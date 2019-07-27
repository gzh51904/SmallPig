import React, { Component } from "react";
import { Button, Upload, message, Icon } from 'antd';
import { api } from "../../utils/idnex";

import 'antd/dist/antd.css'

import './addgoods.css';
function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}
function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
}
class Addgoods extends Component {
    constructor() {
        super();
        this.state = {
            addOrChangeItem: {
                id: '',
                title: '',
                des: '',
                type: '',
                count: '',
                ms01: '',
                src: ''
            },
            addorchanges: false,
            InputValue: '',
            loading: false,
            getimageUrl: ''
        }

        this.addorchange = this.addorchange.bind(this)
    }


    componentWillMount() {

        let chnageGood = this.props.location.query


        if (chnageGood) {

            this.setState({
                addOrChangeItem: chnageGood,
                addorchanges: true
            })
        }
    }
    handleGetInputValue = (event) => {


        let inputval = event.target.value;


        let name = event.target.id
        let dsd
        if (name === 'title') {
            dsd = { title: event.target.value }
        }
        if (name === 'des') {
            dsd = { des: event.target.value }
        }
        if (name === 'ms01') {
            dsd = { ms01: event.target.value }
        }
        if (name === 'type') {
            dsd = { type: event.target.value }
        }
        if (name === 'count') {
            dsd = { count: event.target.value }
        }


        this.setState({
            addOrChangeItem: { ...this.state.addOrChangeItem, ...dsd },
        })

        console.log("this.state.InputValue---", this.state.addOrChangeItem);
    }
    async addorchange() {
        console.log("this.state.InputValue---", this.state.addOrChangeItem.id);

        let id = this.state.addOrChangeItem.id

        if (this.state.addorchanges) {
            let { data } = await api.put('/goods/id=' + id, this.state.addOrChangeItem);
            console.log(data);

            // if (data.code === 1000) {
            //     alert("添加商品成功")
            // };
        } else {
            let { data } = await api.post('/goods', this.state.addOrChangeItem);
        }




    }


    handleChange = info => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.

            let getimageUrl = (info.file.response.data.path).replace("\\", '/');


            this.setState({
                addOrChangeItem: { ...this.state.addOrChangeItem, src: getimageUrl }
            })

            getBase64(info.file.originFileObj, imageUrl =>
                this.setState({
                    imageUrl,
                    loading: false,
                }),
            );


        }
    };

    render() {
        const uploadButton = (
            <div>
                <Icon type={this.state.loading ? 'loading' : 'plus'} />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        const { imageUrl } = this.state;
        let { addOrChangeItem } = this.state
        return (
            <div>
                <h1>添加商品</h1>
                <ul className="addgoodsbox">
                    <li>
                        <label htmlFor='title'>商品名称:</label>
                        <input id='title' className='input-comon' defaultValue={addOrChangeItem.title ? addOrChangeItem.title : ''} onChange={this.handleGetInputValue} key="title"
                        >

                        </input>
                    </li>
                    <li>
                        <label htmlFor='des'>商品价格:</label>
                        <input id='des' className='input-comon' defaultValue={addOrChangeItem.des ? addOrChangeItem.des : ''} onChange={this.handleGetInputValue}></input>
                    </li>
                    <li>
                        <label htmlFor='type'>商品分类:</label>
                        <input id='type' className='input-comon' defaultValue={addOrChangeItem.type ? addOrChangeItem.type : ''} onChange={this.handleGetInputValue}></input>
                    </li>
                    <li>
                        <label htmlFor='count'>商品库存:</label>
                        <input id='count' className='input-comon' defaultValue={addOrChangeItem.count ? addOrChangeItem.count : ''} onChange={this.handleGetInputValue}></input>
                    </li>
                    <li className="uploadfile">
                        <label htmlFor='goodsName' className="upload-label">上传图片:</label>


                        <Upload
                            name="avatar"
                            listType="picture-card"
                            className="avatar-uploader"
                            showUploadList={false}
                            action="http://localhost:1904/upload/avatar"
                            className='uploadcss'
                            onChange={this.handleChange}
                        >
                            {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} className="uploadimg" /> : uploadButton}
                        </Upload>


                    </li>
                    <li>
                        <label htmlFor='goodsName' defaultValue={addOrChangeItem.ms01 ? addOrChangeItem.ms01 : ''}>商品描述:</label>
                        <textarea defaultValue={addOrChangeItem.ms01 ? addOrChangeItem.ms01 : ''} onChange={this.handleGetInputValue} id="ms01"></textarea>
                    </li>
                    <li> <Button type="primary" onClick={this.addorchange}>提交</Button></li>
                </ul>
            </div>
        )
    }
}
export default Addgoods;