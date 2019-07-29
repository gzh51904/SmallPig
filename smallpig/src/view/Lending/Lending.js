import React, { Component } from 'react';
import './lending.scss'

class Lending extends Component {
    render() {
        return (
            <div>
                <div className="content">
                    <div className="profile">
                        <div className="container">
                            <div className="common-item"><p className="common-item-title"><i className="icon icon-border"></i><span>借款企业信息</span></p>
                                <ul>
                                    <li><span className="name">公司全称：</span> <span className="value">昱鼎（大连）贸易有限公司</span></li>
                                    <li><span className="name">注册资金：</span> <span className="value">1000.0000万</span></li>
                                    <li><span className="name">法定代表：</span> <span className="value">冯鑫</span></li>
                                    <li><span className="name">营业执照：</span> <span className="value">912102445880974203</span></li>
                                    <li><span className="name">注册地址：</span> <span className="value">辽宁省 大连市</span></li>
                                    <li><span className="name">征信报告：</span> <span className="value">良好</span></li>
                                    <li><span className="name">逾期次数：</span> <span className="value">4次</span></li>
                                    <li><span className="name">逾期金额：</span> <span className="value">200000元</span></li>
                                </ul>
                            </div>
                            <div className="common-item"><p className="common-item-title"><i className="icon icon-border"></i><span>核心企业信息</span></p>
                                <ul>
                                    <li style={{ width: "100%" }}><span className="name">机构名称：</span><span className="value">辽宁泰通建设集团有限公司</span></li>
                                    <li style={{ width: "100%" }}><span className="name">营业执照：</span><span className="value">912102007824608870</span></li>
                                    <li style={{ width: "100%" }}><span className="name">注册时间：</span><span className="value">2005</span></li>
                                    <li><span className="name">注册资金：</span><span className="value">100000.00万元</span></li>
                                    <li><span className="name">企业征信：</span><span className="value">良好</span></li>
                                </ul>
                            </div>
                            <div className="common-item clear-padding-bottom">
                                <p className="common-item-title"><i className="icon icon-border"></i><span>借款说明</span></p>
                                <p className="flex-font-item">
                                    1.借款企业具备相关的营业许可，有固定业务渠道，稳定的合作单位，资金流健康，应收账款较多，具备一定的还款能力；2.借款企业是核心企业的上游材料/劳务供应公司，与核心企业签署了供销采购/劳务合同；3.借款企业在核心企业具有一定的应收账款，借款资金仅用于借款企业的短期经营周转；4.核心企业作为供应链的核心，财务健康，年施工额在两千万以上，具有较强的担保能力；5.为了更进一步把控风险，保障资金安全，本次借款追加核心企业的无限连带责任担保。</p>
                                <p className="flex-font-item mt-3"></p>
                            </div>
                            <div className="common-item clear-padding-bottom">
                                <p className="common-item-title"><i className="icon icon-border"></i><span>风控说明</span></p>
                                <p className="flex-font-item">1、本借款企业的<span className="orange">营业执照、注册资金、注册地址、开户许可证、征信报告、供销合同、联系方式、担保函</span>等相关资料都经过小猪理财风控部门审核，借款企业符合小猪理财的借款审核标准。</p>
                                <p className="flex-font-item">2、核心企业作为还款保障的核心，经风控人员实地尽职调查，公司<span className="orange">经营正常，资质齐全，资金流健康，应收账款较多，</span>具备一定的担保能力，符合担保条件，此次借款由核心企业进行全额本息担保。</p>
                                <p className="flex-font-item">3、保障还款来源：<span className="orange">第一还款来源：</span>借款企业应收账款；<span className="orange">第二还款来源：</span>借款企业经营收入；<span className="orange">第三还款来源：</span>核心企业代偿。</p>
                            </div>
                            <div className="common-item">
                                <p className="common-item-title"><i className="icon icon-border"></i><span>其他相关信息</span></p>
                                <ul>
                                    <li style={{ width: "100%" }}><span className="name">借款人经营及财务状况：</span><span className="value">良好</span></li>
                                    <li style={{ width: "100%" }}><span className="name">借款人还款能力变化：</span><span className="value">正常履约中</span></li>
                                    <li style={{ width: "100%" }}><span className="name">借款人涉诉及受行政处罚情况：</span><span className="value">暂无</span></li>
                                    <li style={{ width: "100%" }}><span className="name">借款人资金运用情况：</span><span className="value">江西银行已受理提现</span></li>
                                </ul>
                            </div>
                            <div className="common-item">
                                <p className="common-item-title"><i className="icon icon-border"></i><span>风险提示</span></p>
                                <p className="fx"><span>小猪理财及其合作机构将始终践行以风险控制为核心，最大程度的尽力确保借款人信息的真实性，小猪理财仅为信息发布平台，出借人应根据自身的出借偏好和风险承受能力进行独立判断和作出决策，并自行承担资金出借的风险与责任，市场有风险 出借需谨慎。</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Lending;