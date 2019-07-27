import React from 'react';


import './enterprise.css'


function Manage() {


    return (
        <div className="enterp">
            <img src={require("../../asset/img/banner0.jpg")} alt="企业经营" style={{ width: '100%' }} />
            <div style={{ background: "#ffffff", padding: ".53rem 0" }}>
                <img src={require("../../asset/img/title01.png")} alt="小猪理财" style={{ width: "30%", margin: "0 auto 0.5333rem auto", display: 'block' }} />
                <p className="flex-font-item">　
                　精英担保贷是小猪理财基于核心企业的在建工程、施工资质
                、经营状况、企业实力及企业信用的基础上，为核心企业的精
                英人士（建造师、九大员、股东亲属、公司员工）所设计的一
                款不高于20万元的短期小额金融产品。资金用于核心企业内部
                经营、投标经营、项目投标保证金缴纳、项目履约保证金缴纳等。
                借款人为核心企业的精英人士（建造师、九大员、股东亲属、公司员工）
                ，由核心企业作为担保方，对借款进行无限连带责任担保。由核心企业
                对项目进行担保，每个标的的材料合同及监管均需小猪理财严格审核。
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

export default Manage