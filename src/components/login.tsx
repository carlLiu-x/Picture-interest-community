import React, {Component} from 'react'
import '../css/login.css' 
import { NavLink} from 'react-router-dom'
import { Form, Input, Button, Checkbox,Card,Layout,Divider  } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;

class Login extends React.Component {
    render() {
        const onFinish = (values: any) => {
            console.log('Received values of form: ', values);
        }; 
        return (
            <Layout>
            <div className="whitespace"/>
            {/* 登录页logo */}
            <Content className="logoin-logo-content">
                <Card  className="login-logo">
                        logo
                </Card>
            </Content>
            <div className="whitespace"/>
            {/* 登录账号密码输入card */}
            <Content className="login-log-content">
                <Card title={<div style={{textAlign:"center"}}>图片兴趣社区</div>} className="login-form">
                    <Form
                    name="normal_login"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    >
                    {/* 账号输入框 */}
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                type: 'string',
                                required: true, 
                                message: '请填写账号!'
                            }
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="手机号,邮箱" />
                    </Form.Item>
                    {/* 密码输入框 */}
                    <Form.Item
                        name="password"
                        rules={[
                            { 
                                type: 'string',
                                required: true, 
                                message: '请填写密码!' 
                            }
                        ]}
                    >
                        <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="密码"
                        />
                    </Form.Item>
                    {/* 记住我选项及忘记密码，游客登陆选项 */}
                    <Form.Item>
                        <Form.Item className="login-form-remember" name="remember" valuePropName="checked" noStyle>
                        <Checkbox>记住我</Checkbox>
                        </Form.Item>
                        <a className="login-form-forgot" href="">
                        忘记密码
                        </a>
                    </Form.Item>
                    <Form.Item className="login-form-button">
                        <Button type="primary" htmlType="submit" >
                        登录
                        </Button>
                    </Form.Item>
                    <Divider />
                    <Form.Item className="login-form-guest">
                        <a  href="">
                        游客登陆
                        </a>
                    </Form.Item>
                    </Form>
                </Card>
            </Content>
            <div className="whitespace"/>
            {/* 没有账号，转到注册页跳转card */}
            <Content className="login-tologon-content">
                <Card  className="to-logon">
                        没有账号？ 
                        <NavLink className="log-router-logon" to="/logon" >
                        注册
                        </NavLink>  
                </Card>
            </Content>
            <div className="whitespace"/>
            <div className="whitespace"/>
            <div className="whitespace"/>
            <Footer className="site-layout-footer" style={{ textAlign: 'center' }}>Picture interest community ©2022 Created by group 1</Footer>
          </Layout>

        )
    }

}
export default Login