import React from 'react'
import { Button } from 'antd';
import 'antd/dist/antd.css'
import './order.css'


class Order extends React.Component{
	constructor(props){
		super(props)
		this.state={
			arr:[
				{id:1},
				{id:2},
				{id:3},
				{id:4},
				{id:5}
			]
		}
	}
	render(){
		var order = {
			height:"100%",
			background:"#efeff4"
		}
		let s= null
		s = ( 
			<div>
			{	
				this.state.arr.map((item,i)=>{
					return <div key={i}>
				<ul className="bd-list">
					<li className="disable">
						<div className="main">
							<div className="bd-name-layout">
								<span class="name">建材供应贷</span>
								<span class="number">GYD201807230100</span>
								<p class="icons">
									<i class="icon ic-bd-type ic-d"></i>
									<i class="icon ic-bd-type ic-g"></i>
								</p>
							</div>	
							<p className="payment">一次性还本付息</p>
							<div className="content">
								<div className="item annual">
									<p class="value"><span>11.0</span><span>%+2%</span></p>
									<p class="title">预期年化收益</p>
								</div>
								<div className="item term">
									<p class="value"><span>90天</span></p>
									<p class="title">期限</p>
								</div>
								<div className="item balance">
									<p class="title">剩余<span>0.00</span>元</p>
								</div>
							</div>
						</div>
						<div className="bd-tag">
							<i class="icon ic-tag ic-hot"></i>
							<span>加息标</span>
						</div>
						<div className="bd-state">
							<img src="https://www.xiaozhu158.com/themes/simplebootx/Wechat/images/%E6%BB%A1%E6%A0%87.png" />
						</div>
					</li>
				</ul>
			</div>
				})
			}
			</div>
		)
		
		
		
		
		
		
		
		
		
		
		return (
		
			<div className={order}>
			<div className="nav">
				<div className="menu">
					<span>全部</span>
					<i></i>
				</div>
				<div  className="menu">
					<span>全部</span>
					<i></i>
				</div>
				<div  className="menu">
					<span>全部</span>
					<i></i>
				</div>
			</div>
				{s}
			</div>
			
		)
	}
}


export default Order;