import React, { Component } from 'react';
import './record.scss'

class Record extends Component {
    render() {
        return (
            <div>
                <div className="content">
                    <div className="history">
                        <div className="inverst-top">
                            <div className="item">
                                <img src={require('../../assets/images/jb.png')} alt="" /> <span className="title">首投</span> <span className="money">500.00</span> <span className="user-phone">158****1347</span>
                            </div>
                            <div className="item">
                                <img src={require('../../assets/images/hg.png')} alt="" /> <span className="title">土豪</span> <span className="money">56700.00</span> <span className="user-phone">180****6066</span>
                            </div>
                            <div className="item">
                                <img src={require('../../assets/images/jp.png')} alt="" /><span className="title">终结</span> <span className="money">56700.00</span> <span className="user-phone">180****6066</span>
                            </div>

                        </div>
                        <div className="table">
                            <ul className="title">
                                <li>出借人</li>
                                <li>出借金额(元)</li>
                                <li>出借时间</li>
                            </ul>
                            <ul className="values">
                                <li><span>1582****347<i className="icon icon-auto"></i> </span> <span>500.00</span> <span>2018-06-06</span></li>
                            </ul>
                            <ul className="values">
                                <li><span>1667****668<i className="icon icon-auto"></i> </span> <span>41300.00</span> <span>2018-06-06</span></li>
                            </ul>
                            <ul className="values">
                                <li><span>1387****031<i className="icon icon-auto"></i> </span> <span>21500.00</span> <span>2018-06-06</span></li>
                            </ul>
                            <ul className="values">
                                <li><span>1805****066<i className="icon icon-auto"></i> </span> <span>56700.00</span> <span>2018-06-06</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Record;