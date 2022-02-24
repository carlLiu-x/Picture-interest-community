import React, {Component} from 'react'
import '../css/logon.css' 
import {get,post} from '../axios/axios'
import { NavLink,useNavigate} from 'react-router-dom'
import { Form, Input,InputNumber,Cascader,Select,Row,Col,AutoComplete, Button, Checkbox,Card,Layout } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { AxiosResponse } from 'axios';

const { Header, Content, Footer } = Layout;
const { Option } = Select;


class Logon extends React.Component{
    // constructor(telnum: string,password: string,sex: string,age: string,email: string) {
    //     super(telnum);
    //     this.state = {
    //         telnum: '', //账号
    //         password: '', // 密码
    //         sex: 0, // 性别
    //         age: '', //年龄
    //         email: '' //邮箱
    //     }
    // }
    // 绑定表单
    handleChange = (values: any) => {
        var res ={
            nickname: values.nickname,
            sex: values.gender,
            telephone: values.telephone,
            profileurl: '',
            password: values.password,
            email: values.email,
            birthday: values.age
        }
        post("/api/v1/account/register",res).then((responce ) =>{
            console.log(responce.data);
            console.log(res);
            if(responce.data.message === 'OK'){
                document.getElementById('tologin')?.click();
                console.log("click");
            }
        }).catch(error=>{
            alert('did not send')
        })
    }; 
    render() {
        return(
            <Layout>
                <div className="whitespace"/>
                {/* 注册页logo */}
                <Content className="site-layout-content">
                    <Card  className="to-logon">
                            logo
                    </Card>
                </Content>
                <div className="whitespace"/>
                <Content className="site-layout-content">
                <Card title={<div style={{textAlign:"center"}}>图片兴趣社区</div>} className="logon-form">
                <Form
                    name="register"
                    initialValues={{ remember: true }}
                    onFinish={this.handleChange}
                >
                    <Form.Item
                        name="telephone"
                        label="电话"
                        rules={[
                        {
                            required: true,
                            message: '请输入电话!',
                        },
                        ]}
                    >
                        <Input placeholder="请输入手机号"/>
                    </Form.Item>
                    <Form.Item
                        name="password"
                        label="密码"
                        rules={[
                        {
                            required: true,
                            message: '请输入密码!',
                        },
                        ]}
                        hasFeedback
                    >
                        <Input.Password placeholder="请输入密码"/>
                    </Form.Item>

                    <Form.Item
                        name="confirm"
                        label="确认密码"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                        {
                            required: true,
                            message: '请再次输入密码!',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error('请确认两次密码相同!'));
                            },
                        }),
                        ]}
                    >
                        <Input.Password placeholder="请再次输入密码"/>
                    </Form.Item>
                    <Form.Item
                        name="nickname"
                        label="昵称"
                        rules={[
                        {
                            required: true,
                            message: '请输入您的昵称!',
                        },
                        ]}
                    >
                        <Input placeholder="请输入昵称"/>
                    </Form.Item>
                    <Form.Item
                        name="gender"
                        label="性别"
                        rules={[{ required: true, message: '请选择你的性别!' }]}
                    >
                        <Select placeholder="选择你的性别">
                        <Option value="1">男</Option>
                        <Option value="0">女</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name="age"
                        label="年龄"
                    >
                        <Input  style={{ width: '100%' }} placeholder="请输入你的年龄"/>
                    </Form.Item>
                    <Form.Item
                        name="email"
                        label="邮箱"
                    >
                        <Input  style={{ width: '100%' }} placeholder="请输入你的邮箱"/>
                    </Form.Item>
                    <Form.Item className="logon-form-button">
                        <Button type="primary" htmlType="submit" >
                        注册
                        </Button>
                    </Form.Item>
                </Form>
                </Card>
                <div className="whitespace"/>
                </Content>
                <Card  className="to-logon">
                        已有账号？ 
                        <NavLink className="log-router-login" to="/login" >
                        登录
                        </NavLink>  
                </Card>
                <div className="whitespace"/>
                <a href = './login' style = {{display:'none'}}id = 'tologin'></a>
            </Layout>
        )
    }
}
export default Logon