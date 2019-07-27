
import React, { Component } from "react";

import './addgoods.css'
class Addinfor extends Component {

    render() {
        return (
            <div>
                <h1>添加用户信息</h1>
                <ul className="addgoodsbox">
                    <li>
                        <label htmlFor='goodsName'>用户昵称:</label>
                        <input id='goodsName' className='input-comon'></input>
                    </li>
                    <li>
                        <label htmlFor='goodsName'>用户手机号:</label>
                        <input id='goodsName' className='input-comon'></input>
                    </li>
                    <li>
                        <label htmlFor='goodsName'>用户密码:</label>
                        <input id='goodsName' className='input-comon'></input>
                    </li>
                    <li>
                        <label htmlFor='goodsName'>用户注册时间:</label>
                        <input id='goodsName' className='input-comon'></input>
                    </li>
                    <li className="uploadfile">
                        <label htmlFor='goodsName' className="upload-label">上传头像:</label>

                        <div >

                        </div>
                        <div>
                            +
                        </div>
                    </li>
                    <li>
                        <label htmlFor='goodsName'>用户其他信息:</label>
                        <textarea></textarea>
                    </li>
                </ul>
            </div>
        )
    }
}
export default Addinfor;