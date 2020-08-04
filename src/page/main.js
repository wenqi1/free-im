import React, {Component} from 'react';
import { Layout, Menu, Dropdown, Button } from 'antd';
import {Link, Route} from 'react-router-dom';
import Home from './home.js';
import News from './news.js';
import '../style/main.css';

const { Header, Content, Footer} = Layout;

const  menu1 = (
    <Menu>
        <Menu.Item>
             <Link to="/main/home">1st menu item</Link>
        </Menu.Item>
        <Menu.Item>
            <Link to="/main/news">2nd menu item</Link>
        </Menu.Item>
        <Menu.Item>
            3rd menu item
        </Menu.Item>
    </Menu>
  );

const  menu2 = (
    <Menu>
        <Menu.Item>
            1st menu item
        </Menu.Item>
        <Menu.Item>
            2nd menu item
        </Menu.Item>
        <Menu.Item>
            3rd menu item
        </Menu.Item>
    </Menu>
  );

class Main extends Component{
    render(){
        return(
            <Layout className="layout">
                <Header>
                    <div className='logo'>
                        网站logo
                    </div>
                    <div className="header-title">
                        <Button type="link" size="large" style={{color: "#fff"}} href="/#/main/home">首页</Button>
                        <Dropdown overlay={menu1} placement="bottomCenter" arrow>
                            <Button type="link" size="large" style={{color: "#fff"}}>目录一</Button>
                        </Dropdown>
                        <Dropdown overlay={menu2} placement="bottomCenter" arrow>
                        <Button type="link" size="large" style={{color: "#fff"}}>目录二</Button>
                        </Dropdown>
                        <div className="user-info">
                            欢迎 XXXXXXXX
                        </div>
                    </div>
                    
                </Header>
                <Content style={{ padding: '0 10px'}}>
                    <div className="site-layout-content">
                        <Route path={"/main"} exact={true} component={Home}/>
                        <Route path={"/main/home"} exact={true} component={Home}/>
                        <Route path={"/main/news"} exact={true} component={News}/>
                    </div>
                </Content>
                <Footer className="footer">xxx Design ©2020 Created by xxx</Footer>
            </Layout>
        );
    }
}   

export default Main;