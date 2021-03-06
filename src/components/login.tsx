import React, {Component} from 'react'
import '../css/login.css' 
import {get,post} from '../axios/axios'
import { NavLink} from 'react-router-dom'
import picintlogo from '../icon/picintlogo.png';
import { Form, Input, Button, Checkbox,Card,Layout,Divider,message  } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {set} from "local-storage"
import { withSuccess } from 'antd/lib/modal/confirm';
const { Header, Content, Footer } = Layout;

const error = () => {
    message.error('账号或密码错误');
  };
const success = () => {
    message.success('登陆成功');
  };
class Login extends React.Component {
    onFinish = (values: any) => {
        post("/api/v1/account/login",values).then((responce) =>{
            console.log(responce.data);
            if(responce.data.message === 'OK'){
                if(set("uid",responce.data.uid)){
                    // set("user_token",responce.data.token)
                    localStorage.setItem("user_token",responce.data.token)
                    document.getElementById('tohomepage')?.click();
                    console.log("click");
                    success();// 
                }
            }else{
                error();
            }
        }).catch(error=>{
            console.log('did not send')
        })
    }; 
    render() {
        return (
            <Layout className="login-layout">
            {/* 登录页logo */}
            <Content className="login-logo-content">
            <input type='image' src={picintlogo} style={{padding:30}}></input>
            </Content>
            {/* 登录账号密码输入card */}
            <Content className="login-log-content">
                <Card title={<div style={{textAlign:"center"}}>图片兴趣社区</div>} className="login-form">
                    <Form
                    name="normal_login"
                    initialValues={{ remember: true }}
                    onFinish={this.onFinish}
                    >
                    {/* 账号输入框 */}
                    <Form.Item
                        name="telephone"
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
            {/* 没有账号，转到注册页跳转card */}
            <Content className="login-tologon-content">
            
                        没有账号？ 
                        <NavLink className="log-router-logon" to="/register" >
                        注册
                        </NavLink>  
                
            </Content>
            <Footer className="login-footer">Picture interest community ©2022 Created by group 1</Footer>
            <a href = './homepage' style = {{display:'none',height:0 }}id = 'tohomepage'></a>
            </Layout>

        )
    }

}
export default Login