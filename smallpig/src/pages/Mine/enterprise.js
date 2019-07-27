import React from 'react';


import './enterprise.css'


function Enterp() {


    return (
        <div className="enterp">
            <img src={require("../../asset/img/banner3.jpg")} alt="企业经营" style={{ width: '100%' }} />
            <div style={{ background: "#ffffff", padding: ".53rem 0" }}>
                <img src={require("../../asset/img/title01.png")} alt="小猪理财" style={{ width: "30%", margin: "0 auto 0.5333rem auto", display: 'block' }} />
                <p className="flex-font-item">
                    企业经营贷是小猪理财针对具备建筑企业资质等级和安全生产许可，有一定政府在建工程、
                   应收账款，现金流稳定、充沛，且具备持续的经营能力和较强还款能力的建筑企业设计的一
                   款短期金融产品。借款企业必须经过小猪理财风控团队的实地尽职调查，同时通过相关科技
                   及数据系统查询后，确认具备较强履约能力的建筑企业。由借款企业股东等自然人作为担保
                   方，对借款进行无限连带责任担保。借款企业在本平台上的借款总额不超过100万元。
                </p>
            </div>
            <div className="jy-section1">
                <img src={require("../../asset/img/title02.png")} alt="小猪理财" />
                <ul>
                    <li>
                        1.借款企业具备相关的建筑施工资质等级，技术人才，管理规范，具备承接一定规模项目工程的条件。
                    </li>
                    <li>
                        2.借款企业有一定规模的在建工程，完工应收账款较多，现金流稳定、充沛，具备一定的还款能力。
                    </li>
                    <li>
                        3.借款企业财务健康，具备较强的履约能力，为了更进一步把控风险，追加借款企业股东等自然人的无限连带责任担保。
                    </li>
                    <li>
                        4.借款资金仅限用于借款企业自身的经营性周转。
                    </li>
                </ul>
            </div>
            <div className="sect">
                <img src={require("../../asset/img/title03.png")} alt="小猪理财" style={{width:"30%",margin:"0 auto 0.5333rem auto",display:'block',paddingTop:".53rem"}}/>
                <img src={require("../../asset/img/img6.jpg")} alt="小猪理财" style={{width:"90%",margin:"0 auto 0.2rem auto",display:"block"}}/>
            </div>
            <span className="btn">立即出借</span>
        </div>
    )
}

export default Enterp