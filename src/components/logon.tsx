import React, {Component} from 'react'
import '../css/logon.css' 
import { NavLink} from 'react-router-dom'
import { Form, Input,InputNumber,Cascader,Select,Row,Col,AutoComplete, Button, Checkbox,Card,Layout } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;
const { Option } = Select;

class Logon extends React.Component{
    render() {
        const onFinish = (values: any) => {
            console.log('Received values of form: ', values);
        }; 
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
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="telnum"
                        label="电话"
                        rules={[
                        {
                            type: 'email',
                            message: '请输入正确的电话!',
                        },
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
                        name="gender"
                        label="性别"
                        rules={[{ required: true, message: '请选择你的性别!' }]}
                    >
                        <Select placeholder="选择你的性别">
                        <Option value="male">男</Option>
                        <Option value="female">女</Option>
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
            </Layout>
        )
    }
}
export default Logon