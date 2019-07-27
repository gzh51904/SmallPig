import React, { Component } from 'react';
import { api } from '../../utils';
import './Login.css';
// import '../../../public/rem'

class Login extends Component {
    constructor() {
        super();
        this.state = {
            box: 0,
            tags: [{
                name: 'login',
                title: '登录'
            }, {
                name: 'reg',
                title: '注册'
            }],
            phoneValue : "",
            passwordValue: "",
            username:"",
            password : ""
        }
        this.handlePost = this.handlePost.bind(this)
        this.handleReg = this.handleReg.bind(this)
    }
    fillter_click(index) {
        this.setState({
            box: index,
        })
    }
    // 登录
    handleGetInputValue = (event) => {
        this.setState({
          phoneValue : event.target.value,
        })
      };
      handleGetpPasswordValue = (event) => {
        this.setState({
          passwordValue : event.target.value,
        })
      };
    //   注册
      handleGetUsername = (event) => {
        this.setState({
            username : event.target.value,
        })
      };
      handlePassword = (event) => {
        this.setState({
            password : event.target.value,
        })
      };
    //   登录
      handlePost() {
        const {phoneValue,passwordValue} = this.state;
        console.log('InputValue',phoneValue,passwordValue);
        //在此做提交操作，比如发dispatch等
       api.post('/login',{
        params:{
           phone:phoneValue,
            password:passwordValue
        }
       }).then(res => {
        console.log(res)
           let {data} = res
           console.log(data)
        if(data===101 || data === 102) {
           alert('账号或密码错误')
        }else if(data.code===1000) {
            localStorage.setItem('Authorization',data.data);
            this.props.history.push('/mine')
        }
    })
      };


    //   注册

    handleReg(){
        const {username,password} = this.state;
        console.log("122",username,password);
        if(username === "" || password === ""){
            alert('账号或密码不能为空')
        }else{
            api.post('/reg',{
                params:{
                    phone:username,
                    password:password
                }
            }).then(res=>{
                console.log(res)
                let {data} = res
                if(data === 250){
                    alert('该用户已注册过')
                }else{
                    this.props.history.push('/mine')
                }
            })
        }
       
      
    }




    render() {
        return (
            <div>
                <div className="loginTab">
                    <div className="logo">
                        <img src={require("../../img/logo.png")} alt="logo" style={{ width: '100%' }} />
                    </div>
                    <div className="tabs">
                        {
                            this.state.tags.map((item, idx) => {
                                return (
                                    <span key={idx} className={idx === this.state.box ? "active" : null} onClick={(e) => this.fillter_click(idx, e)}>{item.title}</span>
                                )
                            })
                        }

                    </div>
                </div>
                <div className="content">
                    <div className={"content-view" + " " + (this.state.box === 0 ? "active" : '')}>
                        <div className="main">
                            <div className="contentHeight">
                                <div className="input_content">
                                    <span className="icon user">
                                        <img src={require("../../img/user.png")} alt="zhanghao" />
                                    </span>
                                    <input 
                                    type="text" 
                                    placeholder="请输入账号" 
                                    value={this.state.phoneValue}
                                    onChange={this.handleGetInputValue}
                                    />
                                </div>
                                <div className="input_content">
                                    <span className="icon password">
                                        <img src={require("../../img/password.png")} alt="mima" />
                                    </span>
                                    <input 
                                    type="password" 
                                    placeholder="请输入密码" 
                                    value={this.state.passwordValue}
                                    onChange={this.handleGetpPasswordValue}
                                    />
                                </div>
                                <a className="forget mt-30 text-right mr-20">忘记密码</a>
                            </div>
                            <div className="btn" onClick={this.handlePost.bind(this)}>登录</div>
                        </div>
                    </div>



                    <div className={"content-view" + " " + (this.state.box === 1 ? "active" : '')}>
                    <div className="main">
                            <div className="contentHeight">
                                <div className="input_content">
                                    <span className="icon user">
                                        <img src={require("../../img/user.png")} alt="zhanghao" />
                                    </span>
                                    <input type="text" placeholder="请输入手机号"  value={this.state.username}
                                    onChange={this.handleGetUsername}/>
                                </div>
                                <div className="input_content">
                                    <span className="icon password">
                                        <img src={require("../../img/password.png")} alt="mima" />
                                    </span>
                                    <input type="password" placeholder="请输入8~16位,数字或字母的密码"  value={this.state.password}
                                    onChange={this.handlePassword}/>
                                </div>
                
                                <div className="input_content">
                                    <span className="icon password">
                                        <img src={require("../../img/phone.png")} alt="phone" />
                                    </span>
                                    <input type="password" placeholder="请输入验证码" />
                                    <div className="code">获取验证码</div>
                                </div>
                            </div>
                            
                            <div className="btn" onClick={this.handleReg.bind(this)}>下一步</div>
                        </div>
                    
                    </div>
                </div>
                <div className="safeDiv">
                <i className="safe">
                <img src={require("../../img/safe.png")} alt="safe" />
                </i>
                <span>资金存管于江西银行</span>
                </div>


            </div>
        )
    }
}


export default Login