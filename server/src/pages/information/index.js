import React, { Component } from "react";

import './addgoods.css'

import { List, Icon, Button, InputNumber, Radio } from 'antd'

import 'antd/dist/antd.css'
import './index.css'

class Information extends Component {
    constructor() {
        super();
        this.state = {
            goodsList: [
                {
                    id: 1245,
                    name: '极品飞车',
                    price: '6666',
                    qty: 1

                },
                {
                    id: 145,
                    name: '闪击66',
                    price: '399',
                    qty: 2

                }, {
                    id: 124545,
                    name: '哈登',
                    price: '99999',
                    qty: 1

                }
            ]
        }
    }
    onChange(id, value) {
        console.log(id, value);

    }



    render() {

        return (
            <div className="box">
                <h1>用户列表</h1>
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
                                    用户昵称
                                </th>
                                <th>
                                    手机账号
                                </th>
                                <th>
                                    密码
                                </th>

                                <th>
                                    注册时间
                                </th>
                                <th>
                                    操作
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <input type="checkbox" />
                                </td>
                                <td>
                                    1
                                </td>
                                <td>
                                    大熊
                                </td>
                                <td>
                                    18071458767
                                </td>
                                <td>
                                    *******
                                </td>
                                <td>
                                    2018/5/6
                                </td>
                                <td>
                                    <Radio.Group value='small' onChange={this.handleSizeChange}>
                                        <Radio.Button value="small" className="changecolor">修改</Radio.Button>
                                        <Radio.Button value="small" className="dargers" >删除</Radio.Button>
                                    </Radio.Group>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="checkbox" />
                                </td>
                                <td>
                                    1
                                </td>
                                <td>
                                    12545
                                </td>
                                <td>
                                    极品飞车
                                </td>
                                <td>
                                    1996
                                </td>
                                <td>
                                    车类
                                </td>
                                <td>
                                    <Radio.Group value='small' onChange={this.handleSizeChange}>
                                        <Radio.Button value="small" className="changecolor">修改</Radio.Button>
                                        <Radio.Button value="small" className="dargers" >删除</Radio.Button>
                                    </Radio.Group>
                                </td>
                            </tr>
                        </tbody>

                    </table>

                </div>


            </div >
        )
    }
}

export default Information;