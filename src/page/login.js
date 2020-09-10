import React, {Component} from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import '../style/login.css';

const headerFormItemLayout = {
    wrapperCol: { offset: 10, span: 16 },
};

class Login extends Component{
    
    onFinish = values => {
        axios.post('/api/user/login', values)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    };

    render(){
        return(
            <div className="login-component">
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={this.onFinish}
                    >
                    <Form.Item {...headerFormItemLayout} style={{fontSize:'25px',fontWeight: 'bold'}}>登录</Form.Item>
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: '请输入用户名' }]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: '请输入密码' }]}
                    >
                        <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="密码"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox className="login-form-remember">记住密码</Checkbox>
                        </Form.Item>

                        <a className="login-form-forgot" href="">忘记密码</a>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">登录</Button>
                        <a href="/#/register">新用户注册</a>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}   

export default Login;