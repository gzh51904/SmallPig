import React,{Component} from 'react';

import Enterp from './enterprise'
import Building from './building'
import Micro from './micro'
import Contract from './Contract'
import Manage from './Manage'

import './product.css'
class Product extends Component{
    constructor(){
        super();
        this.state={
            box:0,
            tabss:[{
                title:'企业经营贷'
            },{
                title:'建材供应贷'
            },{
                title:'小微企业贷'
            },{
                title:'项目承包带'
            },{
                title:'精英担保贷'
            }]
        }
    }
    fillter_click(index){
        this.setState({
            box:index
        })
    }

    render(){
        return(
            <div>
                <div style={{height: '1.14667rem'}}>
                <div className="tabss" style={{flex:1}}>
                   {
                       this.state.tabss.map((item,idx)=><span key={idx} className={idx===this.state.box?"active":""} onClick={(e) => this.fillter_click(idx, e)}>{item.title}</span>)
                   }
                    
                </div>
                
                </div>
                {
                    this.state.box===0? <Enterp/>:(this.state.box===1? <Building/>:(this.state.box===2? <Micro/>:(this.state.box===3? <Contract/>:(this.state.box===4? <Manage/>:""))))
                }
               
            </div>
            
        )
        
    }
    
}
export default Product;