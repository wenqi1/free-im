import React, {Component} from 'react';
import {Form, Input, Tooltip, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import '../style/register.css';

const headerFormItemLayout = {
    wrapperCol: { offset: 11, span: 16 },
};
const tailFormItemLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

class Register extends Component{
    formRef = React.createRef();

    onFinish = values => {
        console.log('Received values of form: ', values);
    };

    render(){

        return(
            <div className="register-component">
                <Form
                    ref={this.formRef}
                    name="register"
                    className="register-form"
                    onFinish={this.onFinish}
                >
                    <Form.Item {...headerFormItemLayout} style={{fontSize:'25px',fontWeight: 'bold'}}>注册</Form.Item>
                    <Form.Item
                        name="email"
                        label="E-mail"
                        rules={[
                        {
                            type: 'email',
                            message: '输入的邮件地址无效',
                        },
                        {
                            required: true,
                            message: '请输入您的邮箱地址',
                        },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        label="密码"
                        rules={[
                        {
                            required: true,
                            message: '请输入您的密码',
                        },
                        ]}
                        hasFeedback
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="confirm"
                        label="确认密码"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                        {
                            required: true,
                            message: '请再次输入密码',
                        },
                        ({ getFieldValue }) => ({
                            validator(rule, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject('您两次输入的密码不一致');
                            },
                        }),
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="nickname"
                        label={
                        <span>
                            昵称&nbsp;
                            <Tooltip title="您的网名">
                            <QuestionCircleOutlined />
                            </Tooltip>
                        </span>
                        }
                        rules={[{ required: true, message: '请输入您的昵称', whitespace: true }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="phone"
                        label="手机号"
                        rules={[{ required: true, message: '请输入您的手机号' }]}
                    >
                        <Input style={{ width: '100%' }} />
                    </Form.Item>

                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">注册</Button>
                        <Button type="primary" style={{marginLeft: '10px'}}
                            onClick={() => {
                                this.formRef.current.resetFields();
                            }} 
                        >重置</Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}   

export default Register;