import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'

import { Menu, Icon, Breadcrumb } from 'antd'

import { api } from "./utils/idnex";
import Goodslist from './pages/goodslist/index';
import Information from './pages/information/index';
import Orders from './pages/orders/index';
import Addgoods from './pages/goodslist/addgoods';
import Addinfor from './pages/information/Addinfor';
import Addorders from './pages/orders/Addorders';
import Loginin from './pages/login/loginIn';
import './App.css';


import "./App.css"
import 'antd/dist/antd.css'
const SubMenu = Menu.SubMenu;

class App extends Component {
  constructor() {
    super();


    this.state = {
      navList: [
        {
          name: 'goodslist',
          path: '/goodslist',
          title: '商品管理',
          component: Goodslist,
          keypaths: 1
        }, {
          name: 'information',
          path: '/information',
          title: '商品管理',
          component: Information
        }
        , {
          name: 'orders',
          path: '/orders',
          title: '商品管理',
          component: Orders
        }
        , {
          name: 'addgoods',
          path: '/addgoods',
          title: '添加商品',
          component: Addgoods
        }, {
          name: 'Addinfor',
          path: '/Addinfor',
          title: '增加用户',
          component: Addinfor
        },
        {
          name: 'addorder',
          path: '/addorder',
          title: '增加订单',
          component: Addorders
        }
      ],
      nas:
        ['sub1', 1, 2, 3, 4],
      current: '',
      openKeys: ['sub1'],
      islogin: false,

      username: '',
      password: ''

    }
    this.handleClick = this.handleClick.bind(this)
    this.handlePost = this.handlePost.bind(this)
    this.logout = this.logout.bind(this)
  }

  componentWillMount() {

  }




  getInitialState() {
    return {
      current: 'goodslist',
    };
  }
  handleClick(e) {
    if (this.state.islogin) {
      this.setState({
        current: e.key,
      });

      let path = '/' + e.keyPath[0]

      this.props.history.push(path)

    }

  }
  rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
  onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  };

  handleGetInputValue = (event) => {
    this.setState({
      username: event.target.value,
    })
  };
  handleGetpPasswordValue = (event) => {
    this.setState({
      password: event.target.value,
    })
  };



  async handlePost() {

    let { username, password } = this.state;
    console.log(username, password);

    if (username.length === 0 || password.length === 0) {
      alert("账号或密码不能为空")
    }
    else {
      api.post('/login', {
        params: {
          phone: username,
          password: password
        }
      }).then(res => {
        console.log(res)
        let { data } = res
        console.log(data)
        if (data === 101 || data === 102) {
          alert('账号或密码错误')
        } else if (data.code === 1000) {
          localStorage.setItem('Authorization', data.data);
          this.setState({
            islogin: !this.state.islogin,
          })

        }
      })

    }



  }

  logout() {

    localStorage.setItem('Authorization', '');
    this.setState({
      islogin: !this.state.islogin,
    });
    this.props.history.push('/loginin')
  }




  render() {
    let { navList, islogin } = this.state
    return (
      <div className="appbox">
        <div className="navlist">
          <h1 className="h111">后台管理系统</h1>
          <Menu
            mode="inline"
            openKeys={this.state.openKeys}
            onOpenChange={this.onOpenChange}
            style={{ width: 256, }}
            theme="dark"
            onClick={this.handleClick}
          >
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="mail" />
                  <span>商品管理</span>
                </span>
              }
            >
              <Menu.Item key="goodslist">商品列表</Menu.Item>
              <Menu.Item key="addgoods">添加商品</Menu.Item>

            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="appstore" />
                  <span>信息管理</span>
                </span>
              }
            >
              <Menu.Item key="information">用户列表</Menu.Item>
              <Menu.Item key="Addinfor">添加用户</Menu.Item>

            </SubMenu>
            <SubMenu
              key="sub4"
              title={
                <span>
                  <Icon type="setting" />
                  <span>订单管理</span>
                </span>
              }
            >
              <Menu.Item key="orders">订单列表</Menu.Item>
              <Menu.Item key="addorder">添加订单</Menu.Item>

            </SubMenu>
          </Menu>

        </div>
        <div className="maincontent">
          <div className="main-top">
            {islogin ? <div className="loginIn" onClick={this.logout}>
              退出登录
            </div> :
              <div className="loginIn">
                登录
            </div>
            }
          </div>
          <div className="main-content">

            {
              islogin ? <>
                <Switch>

                  {
                    navList.map(item => {
                      return (

                        <Route key={item.name} path={item.path} component={item.component}></Route>

                      )

                    })
                  }

                  <Redirect from='/' to='/goodslist' />
                </Switch>
              </> : <>

                  <Route path='/loginin' render={
                    () => {
                      return (
                        <div className="login-box">
                          <h2 >请先登录</h2>
                          <li>
                            <label htmlFor='title' className="login-title">用户账号:</label>
                            <input id='username' className='login-comon'
                              value={this.state.username}
                              onChange={this.handleGetInputValue}
                              key="username"
                            >

                            </input>
                          </li>
                          <li>
                            <label htmlFor='des' className="login-title">用户密码:</label>
                            <input id='password' className='login-comon' value={this.state.password} onChange={this.handleGetpPasswordValue} key="password"></input>
                          </li>
                          <button className="login-button" onClick={this.handlePost}>登录</button>
                        </div>
                      )
                    }
                  } />
                  <Redirect from='/' to='/loginin' />
                </>
            }




          </div>
        </div>
      </div>
    )
  }
}
App = withRouter(App)

export default App;
