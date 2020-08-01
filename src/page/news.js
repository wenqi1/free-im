import React, {Component} from 'react';
import { Row, Col } from 'antd';
import Infomation from '../component/infomation.js'

class News extends Component{
    render(){
        return(
            <div>
                <Row style={{marginBottom: '10px'}}>
                    <Col span={8}>
                        <Infomation style={{ padding: '10px', height: '300px', width: '450px', background: '#F0F5E6', textAlign: 'center'}} 
                            title="资讯名" writer="资讯编辑" content="资讯内容"/>
                    </Col>
                    <Col span={8}>
                        <Infomation style={{ padding: '10px', height: '300px', width: '450px', background: '#F0F5E6', textAlign: 'center'}} 
                            title="资讯名" writer="资讯编辑" content="资讯内容"/>
                    </Col>
                    <Col span={8}>
                        <Infomation style={{ padding: '10px', height: '300px', width: '450px', background: '#F0F5E6', textAlign: 'center'}} 
                            title="资讯名" writer="资讯编辑" content="资讯内容"/>
                    </Col>
                </Row>
                <Row style={{marginBottom: '10px'}}>
                    <Col span={8}>
                        <Infomation style={{ padding: '10px', height: '300px', width: '450px', background: '#F0F5E6', textAlign: 'center'}} 
                            title="资讯名" writer="资讯编辑" content="资讯内容"/>
                    </Col>
                    <Col span={8}>
                        <Infomation style={{ padding: '10px', height: '300px', width: '450px', background: '#F0F5E6', textAlign: 'center'}} 
                            title="资讯名" writer="资讯编辑" content="资讯内容"/>
                    </Col>
                    <Col span={8}>
                        <Infomation style={{ padding: '10px', height: '300px', width: '450px', background: '#F0F5E6', textAlign: 'center'}} 
                            title="资讯名" writer="资讯编辑" content="资讯内容"/>
                    </Col>
                </Row>
                <Row style={{marginBottom: '10px'}}>
                    <Col span={8}>
                        <Infomation style={{ padding: '10px', height: '300px', width: '450px', background: '#F0F5E6', textAlign: 'center'}} 
                            title="资讯名" writer="资讯编辑" content="资讯内容"/>
                    </Col>
                    <Col span={8}>
                        <Infomation style={{ padding: '10px', height: '300px', width: '450px', background: '#F0F5E6', textAlign: 'center'}} 
                            title="资讯名" writer="资讯编辑" content="资讯内容"/>
                    </Col>
                    <Col span={8}>
                        <Infomation style={{ padding: '10px', height: '300px', width: '450px', background: '#F0F5E6', textAlign: 'center'}} 
                            title="资讯名" writer="资讯编辑" content="资讯内容"/>
                    </Col>
                </Row>
            </div>
        );
    }
}   

export default News;