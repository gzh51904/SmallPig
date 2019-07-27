import React,{Component} from 'react';

import {Route,Switch,Redirect} from 'react-router-dom'
import Login from './pages/Login'
import Mine from './pages/Mine'
import BankCard from './pages/Mine/BankCard'
import Project from './pages/Mine/project'
import Information from './pages/Mine/information'
import Product from './pages/Mine/product';

class App extends Component {
  render(){
    return (
      <div className="App">
        {/* <Switch> */}
       <Route path="/login" component={Login}/>
       <Route path="/mine" component={Mine}/>
       <Route path="/bankcard" component={BankCard}/>
       <Route path="/project" component={Project}/>
       <Route path="/information" component={Information}/>
       <Route path="/product" component={Product}/>
      {/* <Redirect path="/login" component={Login}/> */}
       {/* </Switch> */}
      </div>
    );
  }
 
}

export default App;
