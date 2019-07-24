import React, {Component}from 'react';
import './App.scss';

import {
  Switch,
  withRouter,
  Route,
  Redirect
} from 'react-router-dom';
// import { Menu, Icon } from 'antd';

import Home from './view/Home/Home';


class App extends Component {
  constructor(){
    super();
    this.state={
      nav:[
        {
          name:'Home',
          path:'./home',
          icon:'home',
          title:'首页'
        },
        {
          name:'Lend',
          path:'./lend',
          icon:'home',
          title:'借出'
        },
        {
          name:'Mine',
          path:'./mine',
          icon:'user',
          title:'我的'
        },
      ],
      current:'Home'
    }
  }
  render(){
    let {nav}=this.state;

    return (
      <div className="App">
      
      <Route path='/home' component={Home}/>
      <footer>
          <nav>
              <ul> 
                <li className={"active"}>
                   <a href={"/wechat/home/index"}> <i className={"icon ic-home"}></i> <span>首页</span> </a> 
                </li>
               <li>
                  <a href={"/wechat/mark/marklist"}> <i className={"icon ic-list"}></i> <span>出借</span> </a> 
                </li>
               <li> 
                 <a href={"/wechat/user/index"}> <i className={"icon ic-user"}></i> <span>我的</span> </a> 
              </li>
              </ul> 
          </nav> 
      </footer>

      </div>
    );
  }
  
}

export default App;
