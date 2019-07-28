import React, {Component} from 'react';
import {NavLink,Route} from 'react-router-dom';
// import Detail from './Detail/Detail';


import './lend.scss'
class Lend extends Component{
    constructor(props){
        super(props);
        this.state={
            pro:[
                {name:'建材供应货',number:'GYD201807230100', date:'90天', value1:'11.0', value2:'%+2%' },
                {name:'建材供应货',number:'GYD201807330505', date:'180天', value1:'11.0', value2:'%+2%' },
                {name:'建材供应货',number:'GYD201807236190', date:'90天', value1:'11.0', value2:'%+2%' },
                {name:'建材供应货',number:'GYD201807230101', date:'270天', value1:'11.0', value2:'%+2%' },
                {name:'建材供应货',number:'GYD201807237180', date:'90天', value1:'11.0', value2:'%+2%' },
                {name:'建材供应货',number:'GYD201807230904', date:'180天', value1:'11.0', value2:'%+2%' },
                {name:'建工经营贷',number:'JGD201807230904', date:'90天', value1:'11.0', value2:'%+2%' },
                {name:'建工经营贷',number:'JGD201807230924', date:'90天', value1:'11.0', value2:'%+2%' },
                {name:'建工经营贷',number:'JGD201807530904', date:'180天', value1:'11.0', value2:'%+2%' },
                {name:'建工经营贷',number:'JGD201807230906', date:'90天', value1:'11.0', value2:'%+2%' },
                {name:'建工经营贷',number:'JGD201807235904', date:'270天', value1:'11.0', value2:'%+2%' },
                {name:'建工经营贷',number:'JGD201807230204', date:'90天', value1:'11.0', value2:'%+2%' },
                {name:'建工经营贷',number:'JGD201807230905', date:'270天', value1:'11.0', value2:'%+1%' },
                {name:'精英担保贷',number:'DBD201807231925', date:'270天', value1:'11.0', value2:'%+1%' },
                {name:'精英担保贷',number:'DBD201807230905', date:'180天', value1:'11.0', value2:'%+1%' },
                {name:'精英担保贷',number:'DBD201807234905', date:'270天', value1:'11.0', value2:'%+1%' },
                {name:'精英担保贷',number:'DBD201807230907', date:'90天', value1:'11.0', value2:'%+2%' },
                {name:'精英担保贷',number:'DBD201807230909', date:'270天', value1:'11.0', value2:'%+0%' },
                {name:'精英担保贷',number:'DBD201807230925', date:'180天', value1:'11.0', value2:'%+2%' },
                {name:'项目承包贷',number:'CBD201807230928', date:'90天', value1:'11.0', value2:'%+0%' },
                {name:'项目承包贷',number:'CBD201807236925', date:'90天', value1:'11.0', value2:'%+0%' },
                {name:'项目承包贷',number:'CBD201807230924', date:'90天', value1:'11.0', value2:'%+0%' },
                {name:'项目承包贷',number:'CBD201807230975', date:'90天', value1:'11.0', value2:'%+0%' },
                {name:'项目承包贷',number:'CBD201807230955', date:'90天', value1:'11.0', value2:'%+0%' },
                {name:'项目承包贷',number:'CBD201807230905', date:'90天', value1:'11.0', value2:'%+0%' },
                
            ],
            data:{
                isToggleOn: true,
                display:'none'
            },
            currentIndex: 0
        
            
        }
        this.showhide=this.showhide.bind(this)
        this.setCurrentIndex = this.setCurrentIndex.bind(this)
    }
    showhide(){
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn,
            display: prevState.isToggleOn ? 'none': 'block'
          }));

    }
    setCurrentIndex(event) {
        this.setState({
          currentIndex: parseInt(event.currentTarget.getAttribute('index'), 10)
        })
      }
    render(){
        return (
        <div>
            <div className="heads" style={{backgroundcolor: '#efeff4'}}>
                <nav>
                    <ul className="menus"> 
                         <li className="menu" onClick={this.showhide}> <span>全部</span> <i className="icon ic-order-normal active"></i> </li>
                         <li className="menu"> <span>项目期限</span> <i className="icon ic-order-normal2"></i> </li> 
                         <li className="menu"> <span>年化收益</span> <i className="icon ic-order-normal2"></i> </li>
                    </ul> 
                </nav> 
            </div>
            <main id="mescroll" className="mescroll" style={{}}>
                 <ul id="data-list" className="bd-list">
                     {this.state.pro.map(item=>(
                        <li className="disable"  key={item.number}>
                            <NavLink to='/detail'>
                          <div className="main">
                              <div className="bd-name-layout">
                                  <span className="name">{item.name}</span>
                                   <span className="number">{item.number}</span> 
                                   <p className="icons"><i className="icon ic-bd-type ic-d"></i><i className="icon ic-bd-type ic-g"></i></p>
                              </div> 
                              <p className="payment">一次性还本付息</p>
                               <div className="content">
                                  <div className="item annual">
                                       <p className="value"><span>{item.value1}</span><span>{item.value2}</span></p> <p className="title">预期年化收益</p>
                                  </div> 
                                  <div className="item term"><p className="value"><span>{item.date}</span></p> <p className="title">期限</p></div> 
                                      <div className="item balance">
                                          <p className="value"><a href="#" className="btn btn-normall-s">立即出借</a></p> 
                                          <p className="title">剩余<span>0.00</span>元</p>
                                      </div>
                              </div>
                              
                              <div className="bd-tag"><i className="icon ic-tag ic-hot"></i> <span>加息标</span></div> 
                              <div className="bd-state"><img src={require("../../assets/images/jm.png")} alt=""/></div>
                          </div> 
                          </NavLink>    
                      </li>

                     )                                                                                                                   
                     )}
                   
            
                </ul> 
            </main>
            {/* 路由信息 在App.js中*/}
            {/* <Route path="/detail" component={Detail}/> */}
            <div className="order active" id="order1" ref='sh' style={{display: this.state.display}}> 
                 <ul> 
                     <li data-name="0" className="active" className={this.state.currentIndex === i ? 'active' : ''}
               index={i} onClick={this.setCurrentIndex}>全部</li> 
                     <li data-name="6">企业经营贷</li> 
                     <li data-name="3">建材供应贷</li> 
                     <li data-name="7">小微企业贷</li> 
                     <li data-name="4">项目承包贷</li> 
                     <li data-name="5">精英担保贷</li> 
                </ul> 
            </div>
        </div>
        )
    }
}
export default Lend;