import React, {Component} from 'react';
import Img from './Img/Img';
import Lending from './Lending /Lending ';
import Record from './Record/Record';

import './detail.scss'

class Detail extends Component{
    constructor(){
        super();
        this.state={
            nav:[{
                name: 'Home',
                path: '/home',
                icon: 'home',
                title: '借款详情'
              },
              {
                name: 'List',
                path: '/list',
                icon: 'bars',
                title: '相关图片'
              },
              {
                name: 'Cart',
                path: '/cart',
                icon: 'shopping-cart',
                title: '借出记录'
              },]
        }
    }
    render(){
        return (
        <div>
            <header> 
                <div className="annual"> <p><span>13.00</span>%</p> <p className="title">预期年化收益</p> </div>
                 <div className="progress">
                      <div className="value after" data-progress="100.00%" style={{width:" 100%"}}> 
                      </div> 
                </div> 
                <div className="data"> 
                    <div className="item"> <span className="value">90天</span> <span className="title">期限(天)</span> </div> 
                    <div className="item"> <span className="value">0</span> <span className="title">剩余金额(元)</span> </div>
                    <div className="item"> <span className="value">100</span> <span className="title">起投金额(元)</span>
                   </div> 
                </div> 
            </header>
            <main className="main" style={{marginTop:"0rem"}}> 
                <div className="card"> 
                    <p className="bd-desc"> <span class="title">借款金额：</span> <span class="value">80000</span> </p> 
                    <p className="bd-desc"> <span class="title">还款方式：</span> <span class="value">一次性还本付息</span> </p>
                    <p className="bd-desc"> <span class="title">起息时间：</span> <span class="value">满标放款后开始起息</span>   </p> 
                    <p class="bd-desc"> <span class="title">发布日期：</span> <span class="value">2018-07-17</span> </p>
                    <p class="bd-desc"> <span class="title" style={{width:" 3rem"}}>融资项目募集期：   </span> <span class="value">五个工作日</span> </p> 
                    <p class="bd-desc"> <span class="title">相关费用：</span> <span class="value">充值/出借不收费</span> </p>
                    <p class="bd-desc"> <span class="title">出借优势：</span> <span class="value">信息披露透明 + 合规运营三年 + 江西银行存管</span> </p> 
                    <p class="bd-desc"> <span class="title">安全保障：</span> <span class="value">国资参股+银行存管+电子签章</span> </p>
                    <p class="bd-desc"> <span class="title">温馨提示：</span> <span class="value">本标为按天计息标，借款人可能提前还款。如果出现提前还款，您所获利息将按借款人实际借款天数计算！</span> </p> 
                </div>
                 <div class="card desc"> <h3 class="title">项目介绍</h3> <p class="value">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;企业经营贷是小猪理财针对具备建筑企业资质等级和安全生产许可，有一定政府在建工程、应收账款，现金流稳定、充沛，且具备持续的经营能力和较强还款能力的建筑企业设计的一款短期金融产品。借款企业必须经过小猪理财风控团队的实地尽职调查，同时通过相关科技及数据系统查询后，确认具备较强履约能力的建筑企业。由借款企业股东等自然人作为担保方，对借款进行无限连带责任担保。借款企业在本平台上的借款总额不超过100万元。</p></div> 
            </main>
         
            <div className="footered"> <span  className="disable">已满标</span> </div>
        </div>)
    }
}
export default Detail;