import React, { useState, useEffect } from "react";
import { Form, Input, Button, Checkbox,message } from "antd";
import { passwordModifyPost } from "../services/userApi";
import { get as localStorageGet } from "local-storage";

export default function EditPassword(): JSX.Element {
    const [form] = Form.useForm();
    const uid = localStorageGet("uid");
    //调用接口获取用户信息
    // useEffect(() => {
        
    // }, []
    // );

    const handelSubmit = (e: any) => {
        // 一点提交就会刷新，阻止submit事件
        // e.preventDefault();
        const data = {
            UserId:uid,
            Password:form.getFieldValue("oldPassword"),
            NewPassword:form.getFieldValue("newPassword"),
        }
        passwordModifyPost(data).then(res=>{
            console.log(res);
            if(res.data.message==="OK"){
                console.log("modify success");
                message.info("modify success");
            }else{
                console.log("modify fail");
                message.error("modify fail");
            }
        })
        console.log(data);
        console.log(uid);
    }

    return (
        <>
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
                    label="Old Password"
                    name="oldPassword"
                    rules={[
                        {
                            required: true,
                            message: "Please input your old password!",
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    label="New Password"
                    name="newPassword"
                    rules={[
                        {
                            required: true,
                            message: "Please input your new password!",
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    label="Repeat Password"
                    name="rePassword"
                    rules={[
                        {
                          required: true,
                          message: 'Please confirm your password!',
                        },
                        ({ getFieldValue }) => ({
                          validator(_, value) {
                            if (!value || getFieldValue('newPassword') === value) {
                              return Promise.resolve();
                            }
                            return Promise.reject(new Error('The two passwords that you entered do not match!'));
                          },
                        }),
                      ]}
                >
                    <Input.Password />
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
