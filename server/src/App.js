import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'

import { Menu, Icon, Breadcrumb } from 'antd'


import Goodslist from './pages/goodslist/index';
import Information from './pages/information/index';
import Orders from './pages/orders/index';
import Addgoods from './pages/goodslist/addgoods';
import Addinfor from './pages/information/Addinfor';
import Addorders from './pages/orders/Addorders';
import loginin from './pages/login/loginIn';
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
    }
    this.handleClick = this.handleClick.bind(this)
    // this.onToggle = this.onToggle.bind(this)
  }

  componentWillMount() {

  }




  getInitialState() {
    return {
      current: 'goodslist',
    };
  }
  handleClick(e) {

    this.setState({
      current: e.key,
    });

    let path = '/' + e.keyPath[0]


    this.props.history.push(path)

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
  render() {
    let { navList } = this.state
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
            <div className="loginIn">
              退出登录
            </div>
          </div>
          <div className="main-content">
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
          </div>
        </div>
      </div>
    )
  }
}
App = withRouter(App)

export default App;
