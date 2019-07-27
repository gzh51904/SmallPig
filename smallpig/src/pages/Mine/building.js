import React from 'react';


import './enterprise.css'


function Building() {


    return (
        <div className="enterp">
            <img src={require("../../asset/img/banner2.jpg")} alt="企业经营" style={{ width: '100%' }} />
            <div style={{ background: "#ffffff", padding: ".53rem 0" }}>
                <img src={require("../../asset/img/title01.png")} alt="小猪理财" style={{ width: "30%", margin: "0 auto 0.5333rem auto", display: 'block' }} />
                <p className="flex-font-item">　
                　建材供应贷是小猪理财基于核心企业和上游企业的业务往来关系的基础之上，
                设计出的一款围绕核心企业，服务于上游企业的短期金融产品。借款企业是核心
                企业的上游材料/劳务供应企业，与核心企业签署了供销采购/劳务合同，在核心
                企业具有一定的应收账款，借款资金仅用于借款企业的短期经营周转。由核心企
                业作为担保方，对借款进行无限连带责任担保。借款企业在本平台上的借款总额不
                超过100万元。
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

export default Building