import React, {Component} from 'react';
import {NavLink,Route} from 'react-router-dom';
import { Carousel } from 'antd';
import './home.scss';
class Home extends Component{
    constructor(){
        super();
        this.state={
            style:{
                display:'none'
            }
           
        }
        this.hide=this.hide.bind(this)
    }

    hide(){
      console.log(this.refs.hide)  
      this.refs.hide.style.display= 'none'
    }

    render(){
        return (
            <div>
                <section id={"top"} ref='hide' className={"top"} style={{display: "block"}}>
                     <a href="https://www.xiaozhu158.com/?cut=web">点击返回电脑端</a> 
                     <i id={"topClose"} onClick={this.hide}></i>
                </section>
                <div>
                    <Carousel autoplay>
                        <div>
                            <h3>
                                <img src={require('../../assets/images/b1.png')} alt={''}/>
                            </h3>
                        </div>
                        <div>
                            <h3>
                            <img src={require('../../assets/images/b2.png')} alt={''}/>
                                
                            </h3>
                        </div>
                        <div>
                            <h3>
                            <img src={require('../../assets/images/b3.jpg')} alt={''}/>
                                
                            </h3>
                        </div>
                    </Carousel>
                </div>
                <main>
                     <div className={"data-show"}>
                        <a href={"#"} className={"item left"}>
                            <div className={"data"}>
                                <span className={"title"}>已安全运营</span> 
                                <p className={"value"}><span className={"accent"}>1606</span><span>天</span></p> 
                            </div> 
                                <p className={"logo"}> <img src={require('../../assets/images/safe.png')} style={{width:'1.52rem' ,height: '1.52rem'}} alt={''}/><span>安全保障</span> </p> 
                        </a>
                        <a href={"#"} className={"item right"}> 
                            <div className={"data"}>> 
                                <span className={"title"}>累计成交额</span>
                                <p className={"value"}> <span className={"accent"}>125</span><span>亿</span> <span className={"accent"}>3157</span><span>万</span> </p>
                            </div> 
                                <p className={"logo"}> <img src={require('../../assets/images/msg.png')} style={{width:'1.52rem' ,height: '1.52rem'}} alt={''}/>  <span>信息披露</span> </p>
                        </a>
                    </div>
                     <ul className={"bdlist"}> 
                        <li> 
                        <NavLink to='/detail'>
                            <a href={"#"}> 
                                <i className={"tag"}></i> 
                                <p className={"title"}> <i className={"divider left-divider"}></i> <span>新手专享</span> <i className={"divider right-divider"}></i> </p> 
                                <p className={"annual"}> <span>13.0</span> <span>%</span> </p> 
                                <div className={"data"}> <p className={"balance"}> <span className={"title"}>剩余：</span> <span className={"value"}>0元</span> </p> 
                                    <p className="term"> <span className={"title"}>期限：</span> <span className={"value"}>90天</span> </p> 
                                </div> 
                            </a>
                            <a href={"#"} className={"btn big bg disable"}>已满标</a>
                            </NavLink> 
                         </li>
                         <li> 
                         <NavLink to='/detail'>
                            <a href={"#"}> 
                                <i className={"tag"}></i> 
                                <p className={"title"}> <i className={"divider left-divider"}></i> <span>新手专享</span> <i className={"divider right-divider"}></i> </p> 
                                <p className={"annual"}> <span>13.0</span> <span>%</span> </p> 
                                <div className={"data"}> <p className={"balance"}> <span className={"title"}>剩余：</span> <span className={"value"}>0元</span> </p> 
                                    <p className="term"> <span className={"title"}>期限：</span> <span className={"value"}>90天</span> </p> 
                                </div> 
                            </a>
                            <a href={"#"} className={"btn big bg disable"}>已满标</a>
                            </NavLink> 
                         </li>
                         <li> 
                         <NavLink to='/detail'>
                            <a href={"#"}> 
                                <i className={"tag"}></i> 
                                <p className={"title"}> <i className={"divider left-divider"}></i> <span>新手专享</span> <i className={"divider right-divider"}></i> </p> 
                                <p className={"annual"}> <span>13.0</span> <span>%</span> </p> 
                                <div className={"data"}> <p className={"balance"}> <span className={"title"}>剩余：</span> <span className={"value"}>0元</span> </p> 
                                    <p className="term"> <span className={"title"}>期限：</span> <span className={"value"}>90天</span> </p> 
                                </div> 
                            </a>
                            <a href={"#"} className={"btn big bg disable"}>已满标</a> 
                            </NavLink>
                         </li>
                       
                    </ul>  
                </main>
                    
                   
                               
            </div>
        )
    }
}


export default Home;

