import React, {Component} from 'react';
import { Layout, Menu, Row, Col } from 'antd';
import Chat from '../component/chat.js';

const { Header, Sider, Content} = Layout;
const { SubMenu } = Menu;

class Talk extends Component{
    render(){
        return(
            <Layout>
                <Header style={{backgroundColor: '#1890ff', height: '60px'}}>FreeIM</Header>
                <Layout>
                    <Sider style={{
                        backgroundColor: '#f6f6f6', 
                        height: 'calc(100vh - 60px)', 
                        overflow: 'auto'}}>
                            <Menu defaultSelectedKeys={['1']} mode="inline">
                                <Menu.Item key="1">
                                好友分组一
                                </Menu.Item>
                                <Menu.Item key="2">
                                好友分组二
                                </Menu.Item>
                                <SubMenu key="sub1" title="好友分组三">
                                <Menu.Item key="3">Tom</Menu.Item>
                                <Menu.Item key="4">Bill</Menu.Item>
                                <Menu.Item key="5">Alex</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub2"  title="好友分组四">
                                <Menu.Item key="6">Team 1</Menu.Item>
                                <Menu.Item key="8">Team 2</Menu.Item>
                                </SubMenu>
                                <Menu.Item key="9"/>
                            </Menu>
                    </Sider>
                    <Content style={{
                        backgroundColor: '#ffffff', 
                        height: 'calc(100vh - 60px)', 
                        overflow: 'auto'}}>
                                <Chat size='30' content='你好' send='奥特曼'/>
                                <Chat size='30' content='你好' send='余姐'/>
                                <Chat size='30' content='你们两个是个傻子吗？' send='我' float="right"/>
                                <Chat size='30' content= "哈哈哈哈哈" send='我' float="right"/>
                   </Content>
                </Layout>
            </Layout>
        );
    }
}   

export default Talk;