import React, { Component } from 'react';
import './img.scss'


class Img extends Component {
    render() {
        return (

            <div className="content">
                <div className="pictures">
                    <ul>
                        <li><img src={require('../../assets/images/p1.jpg')} alt="借款企业营业执照.jpg" /> <span>借款企业营业执照.jpg</span></li>
                        <li><img src={require('../../assets/images/p2.jpg')} alt="借款企业开户许可证.jpg" /> <span>借款企业开户许可证.jpg</span></li>
                        <li><img src={require('../../assets/images/p3.jpg')} alt="借款企业供销合同.jpg" /> <span>借款企业供销合同.jpg</span></li>
                        <li><img src={require('../../assets/images/p4.jpg')} alt="核心建筑企业担保函.jpg" /> <span>核心建筑企业担保函.jpg</span></li>
                        <li><img src={require('../../assets/images/p5.jpg')} alt="核心建筑企业营业执照.jpg" /> <span>核心建筑企业营业执照.jpg</span></li>
                        <li><img src={require('../../assets/images/p6.jpg')} alt="核心建筑企业担保协议.jpg" /> <span>核心建筑企业担保协议.jpg</span></li>
                    </ul>
                </div>
            </div>

        )
    }
}
export default Img;