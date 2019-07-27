import React, { Component } from "react";


import { List, Icon, Button, InputNumber, Radio } from 'antd'

import 'antd/dist/antd.css'
import './index.css'

class Orders extends Component {
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
                <h1>订单列表</h1>
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

export default Orders;