import React, { useState, useEffect } from "react";
import { Form, Input, Button, Select, Card, Avatar,Alert} from "antd";
import { userDetailedInfoGet, userDetailedInfoPost } from "../services/userApi";
// import { post } from "../axios/axios";
import { get as localStorageGet} from "local-storage";

const { Option } = Select;
const { Meta } = Card;

export default function EditUserInfo(): JSX.Element {
    const [form] = Form.useForm();
    //用户信息
    const [dataSource, setDataSrouce] = useState({Email: "",Telephone: "",UserName: "", accountInfo: { UserId: 0, NickName: "", Sex: "male", Signature: "", ProfileUrl: "" } });
    const [visible, setVisible] = useState(false);   //Alert是否可见

    //组件初始化时调用接口获取用户信息
    useEffect(() => {
        userDetailedInfoGet({ UserId: localStorageGet("uid") }).then(res => {
            setDataSrouce(res.data);
            // console.log(dataSource);
            console.log(localStorageGet("uid"));
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []
    );

    useEffect(()=>{
        form.setFieldsValue({
            nickname: dataSource["accountInfo"]["NickName"],
            username: dataSource["UserName"],
            brief:dataSource["accountInfo"]["Signature"],
            email:dataSource["Email"],
            phoneNumber:dataSource["Telephone"],
            gender: dataSource["accountInfo"]["Sex"]
        })
        console.log(dataSource);
    },[dataSource]
    )

    const handelSubmit = (e: any) => {
        // 一点提交就会刷新，阻止submit事件
        // e.preventDefault();
        const postData={
            UserId:localStorageGet("uid"),
            NickName: dataSource["accountInfo"]["NickName"],
            UserName: dataSource["UserName"],
            Signature:dataSource["accountInfo"]["Signature"],
            Email:dataSource["Email"],
            Telephone:dataSource["Telephone"],
            Sex: dataSource["accountInfo"]["Sex"]
        }
        userDetailedInfoPost(postData).then(res=>{
            console.log(res);
            if(res.data.message==="OK"){
                console.log("post success");
                handleClose();
            }else{
                console.log("post fail");
            }
        })
        // console.log(userDetailedInfoPost(postData));
        console.log(postData);
    }

    const onNicknameChange = (e:any) => {
        const tmp =  dataSource;
        tmp["accountInfo"]["NickName"]=e.target.value;
        setDataSrouce(tmp);
    };

    const onUserNameChange = (e:any) => {
        const tmp =  dataSource;
        tmp["UserName"]=e.target.value;
        setDataSrouce(tmp);
    };

    const onBriefChange = (e:any) => {
        const tmp =  dataSource;
        tmp["accountInfo"]["Signature"]=e.target.value;
        setDataSrouce(tmp);
    };

    const onEmailChange = (e:any) => {
        const tmp =  dataSource;
        tmp["Email"]=e.target.value;
        setDataSrouce(tmp);
    };

    const onPhoneChange = (e:any) => {
        const tmp =  dataSource;
        tmp["Telephone"]=e.target.value;
        setDataSrouce(tmp);
    };

    // dataSource["accountInfo"]["Sex"] = value;
    const onGenderChange = (value: string) => {
        const tmp =  dataSource;
        tmp["accountInfo"]["Sex"]=value;
        setDataSrouce(tmp);
    };

    //控制Alert是否可见
    const handleClose = () => {
        setVisible(!visible);
    };

    return (
        <>
            <div>
            {visible ? (
                <Alert message="Edit Success!" type="success" closable afterClose={handleClose} />
            ) : null}
            </div>
            <Meta
                avatar={<Avatar size={48} src="https://joeschmoe.io/api/v1/random" />}
                title={dataSource["accountInfo"]["NickName"]}
                description={dataSource["accountInfo"]["Signature"]}
                style={{ marginLeft: "20%",marginBottom: "5%" }}
            />
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                // onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                autoComplete="off"
                form={form}
                // initialValues={{
                //     nickname: dataSource["accountInfo"]["NickName"],
                //     username: dataSource["UserName"],
                //     brief:dataSource["accountInfo"]["Signature"],
                //     // brief: "123",
                //     email:dataSource["Email"],
                //     phoneNumber:dataSource["Telephone"],
                //     gender: dataSource["accountInfo"]["Sex"]
                // }}
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
                    <Input onChange={onUserNameChange}/>
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
                    <Input onChange={onBriefChange}/>
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
                    <Input onChange={onEmailChange}/>
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
                    <Input onChange={onPhoneChange}/>
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
