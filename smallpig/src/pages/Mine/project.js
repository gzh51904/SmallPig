import React,{Component} from 'react';
import './project.css'


class Project extends Component{
    constructor(){
        super();
        this.state={
            box: 0,
            menus:[{
                id:1,
                name:'出借中'
            },{
                id:2,
                name:'代收中'
            },{
                id:3,
                name:'已完结'
            },]
        }
    }
    fillter_click(index) {
        this.setState({
            box: index,
            
        })
        
    }

    render(){
        return (
            <div className="header">
                <div className="top">
                    <p>
                        <span className="title">累计收益(元)</span>
                        <span className="value">0.00</span>
                    </p>
                    <p>
                        <span className="title">待收本金(元)</span>
                        <span className="value">0.00</span>
                    </p>
                    <p>
                        <span className="title">待收利息(元)</span>
                        <span className="value">0.00</span>
                    </p>
                </div>
                <div className="tab">
                    <ul className="menu">
                       {
                         this.state.menus.map((item,idx)=><li className={"ite"+" "+(idx===this.state.box?"active":"")} key={idx} onClick={(e) => this.fillter_click(idx, e)}>{item.name} </li>)
                       }
                    </ul>
                </div>
            </div>
        )
    }
   
}


export default Project;