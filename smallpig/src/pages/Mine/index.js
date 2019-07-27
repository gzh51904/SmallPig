import React,{Component} from 'react';
import './mine.css'
class Mine extends Component{
    constructor(){
        super();
        this.state={};
        this.removelogin = this.removelogin.bind(this)
    }
    removelogin(){
        localStorage.removeItem('Authorization')
        this.props.history.replace('/login')
    }
   
    
    render() { 
      return <div>
    <div className="profile">
        <div className="total">
            <p className="desc">
                <span className="value">0</span>
                <span className="title">总资产</span>

            </p>
        </div>
        <p className="profit left">
            <span className="value">0</span>
            <span className="title">预计收益(元)</span>
        </p>
        <p className="profit right">
            <span className="value">0</span>
            <span className="title">出借收益(元)</span>
        </p>
    </div>
        <div className="recharge" onClick={()=>{this.props.history.push('/bankcard')}}>
            <p>
                <span className="title">可用余额</span>
                <span className="money">0.00元</span>
                <span className="tor">充值/提现</span>
            </p>
        </div>
        <div className="project-layout" >
            <p className="sitem nobd" onClick={()=>this.props.history.push('/project')}>
                <span className="name">我的出借项目</span>
            </p>
            <div className="project" onClick={()=>this.props.history.push('/project')}>
                <p className="item">
                    <span className="value">0</span>
                    <span className="title">出借中</span>
                </p>
                <p className="item">
                    <span className="value">0</span>
                    <span className="title">待收中</span>
                </p> <p className="item">
                    <span className="value">0</span>
                    <span className="title">已完结</span>
                </p>
            </div>
            <div className="items">
                <p className="sitem" onClick={()=>{this.props.history.push('/bankcard')}}>
                    <i className="icon ic-auto"></i>
                    <span className="name">自动投标</span>
                </p>
                <p className="sitem" onClick={()=>{this.props.history.push('/information')}}>
                    <i className="icon ic-info"></i>
                    <span className="name">信息披露</span>
                </p>
                <p className="sitem" onClick={()=>{this.props.history.push('/product')}}>
                    <i className="icon ic-product"></i>
                    <span className="name">产品介绍</span>
                </p>
            </div>
            <div className="btns">
                <div className="btn" onClick={this.removelogin.bind(this)}>退出登录</div>
            </div>
        </div>
    </div>
}
}



export default Mine