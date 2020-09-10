import React, {Component} from 'react';
import {Form, Input, Radio, Button } from 'antd';
import axios from 'axios';
import '../style/register.css';

const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
};

const headerFormItemLayout = {
    wrapperCol: { offset: 11, span: 13 },
};

const tailFormItemLayout = {
    wrapperCol: { offset: 8, span: 16 }, 
};

class Register extends Component{
    constructor(props) {
        super(props);
        this.state={
            sexValue: 1
        }
    }

    formRef = React.createRef();

    onFinish = values => {
        axios.post('/api/user/register', values)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    };

    onChange = e => {
        this.setState({
            sexValue: e.target.value,
        });
    };

    render(){

        return(
            <div className="register-component">
                <Form
                    {...layout}
                    ref={this.formRef}
                    name="register"
                    className="register-form"
                    onFinish={this.onFinish}
                >
                    <Form.Item {...headerFormItemLayout} style={{fontSize:'25px',fontWeight: 'bold'}}>注册</Form.Item>
                    <Form.Item
                        name="mail"
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
                        name="userName"
                        label="用户名"
                        rules={[{ required: true, message: '请输入您的用户名'}]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item 
                        name="sex" 
                        label="性别"
                        rules={[{ required: true, message: '性别不能为空'}]}
                    >
                        <Radio.Group onChange={this.onChange} value={this.state.sexValue}>
                            <Radio value={1}>男</Radio>
                            <Radio value={2}>女</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item
                        name="account"
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