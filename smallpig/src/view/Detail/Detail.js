import React, { Component } from 'react';
import Img from '../Img/Img';
import Lending from '../Lending/Lending';
import Record from '../Record/Record';
import { Menu } from 'antd';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

import './detail.scss'

class Detail extends Component{
    constructor(){
        super();
        this.state={
            nav:[{
                name: 'Lending',
                path: '/lending',                
                title: '借款详情'
              },
              {
                name: 'Img',
                path: '/img',              
                title: '相关图片'
              },
              {
                name: 'Record',
                path: '/record',
                title: '借出记录'
              },
            ],
              current:'Lending'
        }
        // 改变This指向
    this.handleClick = this.handleClick.bind(this);
    }
    handleClick(data){
        console.log(data);
    
        this.setState({
          current:data.key
        })
    
        // 路由跳转
        // 获取点击的路由路径
        let currentRouter = this.state.nav.filter(item=>item.name===data.key)[0];
        console.log(currentRouter);

        this.props.history.push('/detail'+currentRouter.path)//img
      }
      
    render(){
      console.log('detail',this.props)
      let {path,url}=this.props.match
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
            <main className="main" style={{marginTop:"0rem",paddingBottom:"0rem"}}> 
                <div className="card"> 
                    <p className="bd-desc"> <span className="title">借款金额：</span> <span className="value">80000</span> </p> 
                    <p className="bd-desc"> <span className="title">还款方式：</span> <span className="value">一次性还本付息</span> </p>
                    <p className="bd-desc"> <span className="title">起息时间：</span> <span className="value">满标放款后开始起息</span>   </p> 
                    <p className="bd-desc"> <span className="title">发布日期：</span> <span className="value">2018-07-17</span> </p>
                    <p className="bd-desc"> <span className="title" style={{width:" 3rem"}}>融资项目募集期：   </span> <span className="value">五个工作日</span> </p> 
                    <p className="bd-desc"> <span className="title">相关费用：</span> <span className="value">充值/出借不收费</span> </p>
                    <p className="bd-desc"> <span className="title">出借优势：</span> <span className="value">信息披露透明 + 合规运营三年 + 江西银行存管</span> </p> 
                    <p className="bd-desc"> <span className="title">安全保障：</span> <span className="value">国资参股+银行存管+电子签章</span> </p>
                    <p className="bd-desc"> <span className="title">温馨提示：</span> <span className="value">本标为按天计息标，借款人可能提前还款。如果出现提前还款，您所获利息将按借款人实际借款天数计算！</span> </p> 
                </div>
                 <div className="card desc"> <h3 className="title">项目介绍</h3> <p className="value">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;企业经营贷是小猪理财针对具备建筑企业资质等级和安全生产许可，有一定政府在建工程、应收账款，现金流稳定、充沛，且具备持续的经营能力和较强还款能力的建筑企业设计的一款短期金融产品。借款企业必须经过小猪理财风控团队的实地尽职调查，同时通过相关科技及数据系统查询后，确认具备较强履约能力的建筑企业。由借款企业股东等自然人作为担保方，对借款进行无限连带责任担保。借款企业在本平台上的借款总额不超过100万元。</p></div> 
            </main>
            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" style={{padding:" 0px 34px"}}>
                    {
                        this.state.nav.map(item=>(
                        <Menu.Item key={item.name}>
                            {item.title}
                        </Menu.Item>
                        ))
                    }
          </Menu>
           {/* 路由信息 */}
           <Switch>
          <Route path={path+"/img"} component={Img}/>
          <Route path={path+"/record"} component={Record}/>
          <Route path={path+"/lending"} component={Lending}/>
          <Redirect  to={path+"/lending"} exact/>
          </Switch>
         
            <div className="footered"> <span  className="disable">已满标</span> </div>
        </div>)
    }
    // 改变This指向
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(data) {
    console.log(data);

    this.setState({
      current: data.key
    })

    // 路由跳转
    // 获取点击的路由路径
    let currentRouter = this.state.nav.filter(item => item.name === data.key)[0];
    console.log(currentRouter);

    this.props.history.push('/detail' + currentRouter.path)//img
  }

  render() {
    console.log('detail', this.props)
    let { path, url } = this.props.match
    return (
      <div>
        <header>
          <div className="annual"> <p><span>13.00</span>%</p> <p className="title">预期年化收益</p> </div>
          <div className="progress">
            <div className="value after" data-progress="100.00%" style={{ width: " 100%" }}>
            </div>
          </div>
          <div className="data">
            <div className="item"> <span className="value">90天</span> <span className="title">期限(天)</span> </div>
            <div className="item"> <span className="value">0</span> <span className="title">剩余金额(元)</span> </div>
            <div className="item"> <span className="value">100</span> <span className="title">起投金额(元)</span>
            </div>
          </div>
        </header>
        <main className="main" style={{ marginTop: "0rem", paddingBottom: "0rem" }}>
          <div className="card">
            <p className="bd-desc"> <span className="title">借款金额：</span> <span className="value">80000</span> </p>
            <p className="bd-desc"> <span className="title">还款方式：</span> <span className="value">一次性还本付息</span> </p>
            <p className="bd-desc"> <span className="title">起息时间：</span> <span className="value">满标放款后开始起息</span>   </p>
            <p className="bd-desc"> <span className="title">发布日期：</span> <span className="value">2018-07-17</span> </p>
            <p className="bd-desc"> <span className="title" style={{ width: " 3rem" }}>融资项目募集期：   </span> <span className="value">五个工作日</span> </p>
            <p className="bd-desc"> <span className="title">相关费用：</span> <span className="value">充值/出借不收费</span> </p>
            <p className="bd-desc"> <span className="title">出借优势：</span> <span className="value">信息披露透明 + 合规运营三年 + 江西银行存管</span> </p>
            <p className="bd-desc"> <span className="title">安全保障：</span> <span className="value">国资参股+银行存管+电子签章</span> </p>
            <p className="bd-desc"> <span className="title">温馨提示：</span> <span className="value">本标为按天计息标，借款人可能提前还款。如果出现提前还款，您所获利息将按借款人实际借款天数计算！</span> </p>
          </div>
          <div className="card desc"> <h3 className="title">项目介绍</h3> <p className="value">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;企业经营贷是小猪理财针对具备建筑企业资质等级和安全生产许可，有一定政府在建工程、应收账款，现金流稳定、充沛，且具备持续的经营能力和较强还款能力的建筑企业设计的一款短期金融产品。借款企业必须经过小猪理财风控团队的实地尽职调查，同时通过相关科技及数据系统查询后，确认具备较强履约能力的建筑企业。由借款企业股东等自然人作为担保方，对借款进行无限连带责任担保。借款企业在本平台上的借款总额不超过100万元。</p></div>
        </main>
        <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" style={{ padding: " 0px 34px" }}>
          {
            this.state.nav.map(item => (
              <Menu.Item key={item.name}>
                {item.title}
              </Menu.Item>
            ))
          }
        </Menu>
        {/* 路由信息 */}
        <Switch>
          <Route path={path + "/img"} component={Img} />
          <Route path={path + "/record"} component={Record} />
          <Route path={path + "/lending"} component={Lending} />
          <Redirect to={path + "/lending"} exact />
        </Switch>

        <div className="footered"> <span className="disable">已满标</span> </div>
      </div>)
  }
}
Detail = withRouter(Detail)
export default Detail;