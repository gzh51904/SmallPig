import React, { Component } from "react";

import { Pagination, Radio } from 'antd';


import 'antd/dist/antd.css'
import './index.css'
import { api } from "../../utils/idnex";

class Goodslsit extends Component {
    constructor() {
        super();
        this.state = {
            totalList: [],
            goodsList: [

            ],
            totalNum: 0
        }
        this.onChange = this.onChange.bind(this)
        this.changegoods = this.changegoods.bind(this)
    }
    async  onChange(page, pageSize) {


        let { data: { data } } = await api.get('/goods', {})
        let glistss = data;
        let pagesList = [];
        if (page === 1) {
            pagesList = glistss.splice(page * pageSize - 10, 10)
        }
        else {

            pagesList = glistss.splice(page * pageSize - 10, 10)

        }

        this.setState({
            goodsList: pagesList,
        })
    }




    async componentWillMount() {
        let { data: { data } } = await api.get('/goods', {})

        console.log(data);

        let glist = data;
        this.setState({
            totalList: glist,
            totalNum: glist.length
        })

        if (glist.length >= 10) {
            glist = glist.splice(0, 10);
        }


        this.setState({
            goodsList: glist,

        })
    }
    changegoods(item) {

        const path = {

            pathname: "/addgoods",

            query: item,

        }

        this.props.history.push(path);

    }
    async  remove(id) {

        this.setState({
            goodsList: this.state.goodsList.filter(item => item.id !== id),

        })

        let { data } = await api.deletes('/goods/id=' + id, {})



    }
    render() {
        let { goodsList, totalNum } = this.state
        return (

            < div className="box" >
                <h1>商品列表</h1>
                <div className="list-top-content">
                    <table className="tablebox">
                        <thead >
                            <tr>
                                <th>
                                    <input type="checkbox" />
                                </th>
                                <th>
                                    #
                                </th>
                                <th>
                                    商品ID
                                </th>
                                <th>
                                    商品名称
                                </th>
                                <th>
                                    商品价格
                                </th>

                                <th>
                                    商品类别
                                </th>
                                <th>
                                    操作
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                goodsList.map((item, idx) => {
                                    return (
                                        <tr key={item.id} style={{ height: "47px" }}>
                                            <td>
                                                <input type="checkbox" />
                                            </td>
                                            <td>
                                                {idx}
                                            </td>
                                            <td>
                                                {item.id}
                                            </td>
                                            <td>
                                                {item.title}
                                            </td>
                                            <td>
                                                {item.des}
                                            </td>
                                            <td>
                                                {item.type ? item.type : '暂无'}
                                            </td>
                                            <td>
                                                <Radio.Group value='small'>
                                                    <Radio.Button value="small" className="changecolor" onClick={this.changegoods.bind(this, item)}>修改</Radio.Button>
                                                    <Radio.Button value="small" className="dargers" onClick={this.remove.bind(this, item.id)}>删除</Radio.Button>
                                                </Radio.Group>
                                            </td>
                                        </tr>
                                    )
                                })
                            }


                        </tbody>

                    </table>

                </div>

                <div className='pagin'>


                    <Pagination defaultCurrent={1} total={totalNum} onChange={this.onChange} />
                </div>
            </div >
        )
    }
}



export default Goodslsit;