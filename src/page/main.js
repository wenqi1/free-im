import React, {Component} from 'react';
import { Layout, Menu } from 'antd';
import {Link, Route} from 'react-router-dom';
import Home from './home.js';
import News from './news.js';
import '../style/main.css';

const { Header, Content, Footer} = Layout;

class Main extends Component{
    render(){
        return(
            <Layout className="layout">
                <Header>
                    <div className='logo'>
                        网站logo
                    </div>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{marginLeft: '200px'}}>
                        <Menu.Item key="1">
                            <Link to="/main/home">首页</Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            工具一
                        </Menu.Item>
                        <Menu.Item key="3">
                            工具二
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Link to="/main/news">报刊</Link>
                        </Menu.Item>
                    </Menu>

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