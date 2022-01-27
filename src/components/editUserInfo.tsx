import React, { useState, useEffect } from "react";
import { Form, Input, Button, Select, Card, Avatar } from "antd";
import { userDetailedInfoGet, userDetailedInfoPost } from "../services/userApi";

const { Option } = Select;
const { Meta } = Card;

export default function EditUserInfo(): JSX.Element {
    const [form] = Form.useForm();
    const [dataSource, setDataSrouce] = useState({ accountInfo: { UserId: 2, NickName: "黎刚", Sex: "male", Signature: "", ProfileUrl: "" } });
    const [value, setValue] = useState(0);

    //调用接口获取用户信息
    useEffect(() => {
        userDetailedInfoGet({ UserId: 2 }).then(res => {
            setDataSrouce(res.data);
            // console.log(dataSource);
            console.log(dataSource["accountInfo"]);
        })
    }, []
    );

    const handelSubmit = (e: any) => {
        // 一点提交就会刷新，阻止submit事件
        e.preventDefault();
        userDetailedInfoPost(dataSource);
        console.log(dataSource);
    }

    const onNicknameChange = (e:any) => {
        const tmp =  dataSource;
        tmp["accountInfo"]["NickName"]=e.target.value;
        setDataSrouce(tmp);
    };

    // dataSource["accountInfo"]["Sex"] = value;
    const onGenderChange = (value: string) => {
        const tmp =  dataSource;
        tmp["accountInfo"]["Sex"]=value;
        setDataSrouce(tmp);
    };

    return (
        <>
            <Meta
                avatar={<Avatar size={48} src="https://joeschmoe.io/api/v1/random" />}
                title="User Nickname"
                description="This is the description"
                style={{ marginLeft: "20%" }}
            />
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                // onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                autoComplete="off"
                initialValues={{
                    nickname: dataSource["accountInfo"]["NickName"],
                    userName: dataSource["accountInfo"]["NickName"],
                    brief:dataSource["accountInfo"]["Signature"],
                    // brief: "123",
                    gender: dataSource["accountInfo"]["Sex"]
                }}
                onSubmitCapture={handelSubmit}
            >
                <Form.Item
                    label="Nickname"
                    name="nickname"
                    rules={[
                        {
                            required: true,
                            message: "Please input your nickname!",
                        },
                    ]}
                >
                    <Input  onChange={onNicknameChange}/>
                </Form.Item>

                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: "Please input your username!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Brief"
                    name="brief"
                    rules={[
                        {
                            required: true,
                            message: "Please input your brief!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: "Please input your email!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Phone Number"
                    name="phoneNumber"
                    rules={[
                        {
                            required: true,
                            message: "Please input your phone number!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
                    <Select
                        placeholder="Select a option and change input text above"
                        // onChange={onGenderChange}
                        allowClear
                        onChange={onGenderChange}
                    >
                        <Option value="male">male</Option>
                        <Option value="female">female</Option>
                        <Option value="other">other</Option>
                    </Select>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
}
