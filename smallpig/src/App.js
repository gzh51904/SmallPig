
import React, {Component}from 'react';
import './App.scss';

import {
  Switch,
  Route,
  Redirect,
  NavLink
} from 'react-router-dom';
import Home from './view/Home/Home';
import Lend from './view/Lend/Lend';
import Mine from './view/Mine/Mine';
// import Login from './pages/Login/Login';
import Detail from './view/Detail/Detail';


class App extends Component {
  constructor(){
    super();
    this.state={
     pic:{
       url:''
     }
    }
     
  }

  render(){
    
    return (
      <div className="App">
        {/* 路由信息 */}
      <Switch>
      <Route path='/home' component={Home}/>
      <Route path='/lend' component={Lend}/>
      <Route path='/mine' component={Mine}/>
      <Route path="/detail" component={Detail}/>

      <Redirect from='/' to='/home' exact/>
      </Switch>
      {/* 底部导航 */}
      <footer>
          <nav>
              <ul> 
                <li >
                  <NavLink to='/home' activeStyle={{color:'#40538f',fontWeight:"bolder"}} ><i className="icon ic-home"></i> <span>首页</span> </NavLink>
                </li>
               <li>
               <NavLink to='/lend' activeStyle={{color:'#40538f',fontWeight:"bolder"}}><i className="icon ic-list"></i> <span>出借</span></NavLink>  
                </li>
               <li> 
               <NavLink to='/mine' activeStyle={{color:'#40538f',fontWeight:"bolder"}}><i className="icon ic-user"></i> <span>我的</span></NavLink>  
              </li>
              </ul> 
          </nav> 
      </footer>

      </div>
    );
  }
  
}

export default App;
