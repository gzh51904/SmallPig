import React from 'react';


import './enterprise.css'


function Micro() {


    return (
        <div className="enterp">
            <img src={require("../../asset/img/xwd.jpg")} alt="企业经营" style={{ width: '100%' }} />
            <div style={{ background: "#ffffff", padding: ".53rem 0" }}>
                <img src={require("../../asset/img/title01.png")} alt="小猪理财" style={{ width: "30%", margin: "0 auto 0.5333rem auto", display: 'block' }} />
                <p className="flex-font-item">　　
                小微企业贷是小猪理财针对具备合法经营资格，
                持续盈利的中小微企业经营性资金需求设计的
                一款短期金融产品。借款企业必须经过小猪理财
                风控团队的风险审核，借款企业是产品有市场、
                经营有效益、业务稳定、信用记录良好、持续发展
                能力较强的成长型中小微企业，具备还款能力，还款
                意愿良好。借款资金仅限用于借款企业自身的经营性
                资金周转，单家借款企业在本平台上的借款总额不超过
                100万元。
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

export default Micro