import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'

import { Menu, Icon } from 'antd'


import Goodslist from './pages/goodslist/index';
import Information from './pages/information/index';
import Orders from './pages/orders/index';
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
          chilList: [

          ]
        }, {
          name: 'information',
          path: '/information',
          title: '商品管理',
          chilList: [
            {
              name: 'inforItems',
              path: '/inforItems',
              title: '用户列表'
            }, {
              name: 'addInfor',
              path: '/addInfor',
              title: '增加用户'
            }
          ]
        }
        , {
          name: 'orders',
          path: '/orders',
          title: '商品管理',
          chilList: [
            {
              name: 'ordersList',
              path: '/ordersList',
              title: '订单列表'
            }, {
              name: 'addOrder',
              path: '/addOrder',
              title: '增加订单'
            }
          ]
        }


      ],
      nas: [
        ['sub1', 1, 2, 3, 4], 'sub2', 'sub3',
      ]
    }
  }

  getInitialState() {
    return {
      current: '1',
      openKeys: [],
    };
  }
  handleClick(e) {
    console.log('click ', e);
    this.setState({
      current: e.key,
      openKeys: e.keyPath.slice(1),
    });
  }
  onToggle(info) {
    console.log("info");

    this.setState({
      openKeys: info.open ? info.keyPath : info.keyPath.slice(1),
    });
  }
  render() {
    return (
      <div className="appbox">
        <div className="navlist">
          <Menu onClick={this.handleClick}
            style={{ width: 240 }}
            openKeys={this.state.openKeys}
            onChange={this.onToggle}

            mode="inline"
            defaultOpenKeys='sub1'
          >
            <SubMenu key="sub1" title={<span><Icon type="mail" /><span>导航一</span></span>}>
              <Menu.Item key="1">选项1</Menu.Item>
              <Menu.Item key="2">选项2</Menu.Item>
              <Menu.Item key="3">选项3</Menu.Item>
              <Menu.Item key="4">选项4</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>导航二</span></span>}>
              <Menu.Item key="5">选项5</Menu.Item>
              <Menu.Item key="6">选项6</Menu.Item>
              <SubMenu key="sub3" title="三级导航">
                <Menu.Item key="7">选项7</Menu.Item>
                <Menu.Item key="8">选项8</Menu.Item>
              </SubMenu>
            </SubMenu>
            <SubMenu key="sub4" title={<span><Icon type="setting" /><span>导航三</span></span>}>
              <Menu.Item key="9">选项9</Menu.Item>
              <Menu.Item key="10">选项10</Menu.Item>
              <Menu.Item key="11">选项11</Menu.Item>
              <Menu.Item key="12">选项12</Menu.Item>
            </SubMenu>
          </Menu>
        </div>
        <div className="maincontent">

        </div>
      </div>
    )
  }
}

export default App;
