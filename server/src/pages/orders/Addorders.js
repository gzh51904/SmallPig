import React, { Component } from "react";

import './addgoods.css'
class Addorders extends Component {

    render() {
        return (
            <div>
                <h1>添加订单</h1>
                <ul className="addgoodsbox">
                    <li>
                        <label htmlFor='goodsName'>商品名称:</label>
                        <input id='goodsName' className='input-comon'></input>
                    </li>
                    <li>
                        <label htmlFor='goodsName'>商品数量:</label>
                        <input id='goodsName' className='input-comon'></input>
                    </li>
                    <li>
                        <label htmlFor='goodsName'>运送费用:</label>
                        <input id='goodsName' className='input-comon'></input>
                    </li>
                    <li>
                        <label htmlFor='goodsName'>订单总价:</label>
                        <input id='goodsName' className='input-comon'></input>
                    </li>
                    <li className="uploadfile">
                        <label htmlFor='goodsName' className="upload-label">上传图片信息:</label>

                        <div >

                        </div>
                        <div>
                            +
                        </div>
                    </li>
                    <li>
                        <label htmlFor='goodsName'>订单其他信息:</label>
                        <textarea></textarea>
                    </li>
                </ul>
            </div>
        )
    }
}
export default Addorders;