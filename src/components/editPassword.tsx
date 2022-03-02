import React, { useState, useEffect } from "react";
import { Form, Input, Button, Checkbox,message } from "antd";
import { passwordModifyPost } from "../services/userApi";
import { get as localStorageGet } from "local-storage";

export default function EditPassword(): JSX.Element {
    const [form] = Form.useForm();
    const uid = localStorageGet("uid");
    const [oldPassword,setOldPassword] = useState("");
    const [newPassword,setNewPassword] = useState("");
    const [rePassword,setRePassword] = useState("");
    //调用接口获取用户信息
    // useEffect(() => {
        
    // }, []
    // );

    const handelSubmit = (e: any) => {
        // 一点提交就会刷新，阻止submit事件
        // e.preventDefault();
        if(rePassword!==newPassword){
            message.info("请检查两次输入的新密码相同!");
            return ;
        }
        const data = {
            UserId:uid,
            Password:oldPassword,
            NewPassword:newPassword,
        }
        passwordModifyPost(data).then(res=>{
            console.log(res);
            if(res.data.message==="OK"){
                console.log("modify success");
                message.success("修改成功!");
            }else{
                console.log("modify fail");
                message.error("修改失败!");
            }
        })
        console.log(data);
        console.log(uid);
    }

    const onOldPasswordChange = (e:any) => {
        setOldPassword(e.target.value);
    };

    const onNewPasswordChange = (e:any) => {
        setNewPassword(e.target.value);
    };

    const onRePasswordChange = (e:any) => {
        setRePassword(e.target.value);
    };

    return (
        <>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onSubmitCapture={handelSubmit}
                autoComplete="off"
            >

                <Form.Item
                    label="旧密码"
                    name="oldPassword"
                    rules={[
                        {
                            required: true,
                            message: "请输入您的旧密码!",
                        },
                    ]}
                >
                    <Input.Password onChange={onOldPasswordChange} />
                </Form.Item>

                <Form.Item
                    label="新密码"
                    name="newPassword"
                    rules={[
                        {
                            required: true,
                            message: "请输入您的新密码!",
                        },
                    ]}
                >
                    <Input.Password onChange={onNewPasswordChange}/>
                </Form.Item>

                <Form.Item
                    label="确认新密码"
                    name="rePassword"
                    rules={[
                        {
                          required: true,
                          message: '请确认您的密码!',
                        },
                        ({ getFieldValue }) => ({
                          validator(_, value) {
                            if (!value || getFieldValue('newPassword') === value) {
                              return Promise.resolve();
                            }
                            return Promise.reject(new Error('两次输入的密码不一致!'));
                          },
                        }),
                      ]}
                >
                    <Input.Password onChange={onRePasswordChange}/>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        提交
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
}
