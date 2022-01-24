import React, { useState } from "react";
import { Form, Input, Button ,Select,Card,Avatar} from "antd";

const { Option } = Select;
const { Meta } = Card;

export default function EditUserInfo(): JSX.Element {
    // const [form] = Form.useForm();

    // const onGenderChange = (value: string) => {
    //     switch (value) {
    //       case 'male':
    //         form.setFieldsValue({ note: 'Hi, man!' });
    //         return;
    //       case 'female':
    //         form.setFieldsValue({ note: 'Hi, lady!' });
    //         return;
    //       case 'other':
    //         form.setFieldsValue({ note: 'Hi there!' });
    //     }
    //   };
    
    // const onFinish = (values: any) => {
    // console.log(values);
    // };

    // const onReset = () => {
    // form.resetFields();
    // };

    // const onFill = () => {
    // form.setFieldsValue({
    //     note: 'Hello world!',
    //     gender: 'male',
    // });
    // };

    return (
        <>
            <Meta
                avatar={<Avatar size={48} src="https://joeschmoe.io/api/v1/random" />}
                title="User Nickname"
                description="This is the description"
                style={{marginLeft: "20%"}}
            />
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                // onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Nickname"
                    name="Nickname"
                    rules={[
                        {
                            required: true,
                            message: "Please input your nickname!",
                        },
                    ]}
                >
                    <Input />
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
