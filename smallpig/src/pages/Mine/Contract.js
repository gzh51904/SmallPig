import React from 'react';


import './enterprise.css'


function Contract() {


    return (
        <div className="enterp">
            <img src={require("../../asset/img/banner.jpg")} alt="企业经营" style={{ width: '100%' }} />
            <div style={{ background: "#ffffff", padding: ".53rem 0" }}>
                <img src={require("../../asset/img/title01.png")} alt="小猪理财" style={{ width: "30%", margin: "0 auto 0.5333rem auto", display: 'block' }} />
                <p className="flex-font-item">　
                　项目承包贷是小猪理财针对与核心企业签署了承包协议的项目承
                包方设计的一款短期金融产品。借款方有稳定的收入来源，并承接
                有在建工程项目，具备一定的还款能力，同时由经营正常，资质齐
                全，资金流健康，应收账款较多，具有一定担保能力的核心企业对
                借款方进行担保，资金用于该借款方承包的工程项目建设。
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

export default Contract