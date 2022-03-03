import React, { useState, useEffect } from "react";
import { Form, Input, Button, Select, Card, Avatar, Alert, Row, Col, Upload, message } from "antd";
import { UploadOutlined } from '@ant-design/icons';
import { profileImageUpload, userDetailedInfoGet, userDetailedInfoPost, userProfileEdit } from "../services/userApi";
// import { post } from "../axios/axios";
import { get as localStorageGet,set as localStorageSet } from "local-storage";

const { Option } = Select;
const { Meta } = Card;

export default function EditUserInfo(): JSX.Element {
    const [form] = Form.useForm();
    //用户信息
    const [dataSource, setDataSrouce] = useState({ Email: "", Telephone: "", UserName: "", accountInfo: { UserId: 0, NickName: "", Sex: "male", Signature: "", ProfileUrl: "" } });
    const [visible, setVisible] = useState(false);   //Alert是否可见
    const [loading, setLoading] = useState(false);  //头像是否正在上传
    const [imageUrl, setImageUrl] = useState("https://joeschmoe.io/api/v1/random");   //头像url

    //组件初始化时调用接口获取用户信息
    useEffect(() => {
        userDetailedInfoGet({ UserId: localStorageGet("uid") }).then(res => {
            setDataSrouce(res.data);
            // console.log(dataSource);
            console.log("uid:" + localStorageGet("uid"));
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []
    );

    useEffect(() => {
        form.setFieldsValue({
            nickname: dataSource["accountInfo"]["NickName"],
            username: dataSource["UserName"],
            brief: dataSource["accountInfo"]["Signature"],
            email: dataSource["Email"],
            phoneNumber: dataSource["Telephone"],
            gender: dataSource["accountInfo"]["Sex"]
        })
        if (dataSource["accountInfo"]["ProfileUrl"] !== "") {
            setImageUrl(dataSource["accountInfo"]["ProfileUrl"]);
        }
        console.log(dataSource);
    }, [dataSource]
    )

    // 上传前图片的校验，图片小于1MB
    const beforeUpload = (file: any) => {
        const isLimit = file.size / 1024 < 1024;
        if (!isLimit) {
            message.error('Image must smaller than 1MB!');
        }
        return isLimit;
    }
    //图片上传完，转换成base64类型
    const getBase64 = (img: any) => {
        const reader = new FileReader();
        reader.readAsDataURL(img);
        reader.onloadend = () => {
            const url = reader.result;
            if (typeof (url) === "string") {
                setImageUrl(url);
            }
        };
    };

    //处理头像上传
    const handleChange = (info: any) => {
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }
        if (info.file.status === 'done') {
            setLoading(false);
            getBase64(info.file.originFileObj);
        }
    };

    const customRequest = (info: any) => {
        const formData = new FormData();
        formData.append('profileImage', info.file);
        profileImageUpload(formData).then(res => {
            if(res.data.message==="OK"){
                console.log(res.data);
                userProfileEdit({UserId:localStorageGet("uid"),ProfileUrl:res.data.url}).then(res2=>{
                    if(res.data.message==="OK"){
                        setImageUrl(res.data.url);
                        localStorageSet("userProfile",res.data.url);
                        message.success("更换头像成功!");
                    }else{
                        message.error("更换头像失败!");
                    }
                })
            }else{
                message.error("更换头像失败!");
            }
        })
    }

    //表单提交修改个人信息
    const handelSubmit = (e: any) => {
        const postData = {
            UserId: localStorageGet("uid"),
            NickName: dataSource["accountInfo"]["NickName"],
            UserName: dataSource["UserName"],
            Signature: dataSource["accountInfo"]["Signature"],
            Email: dataSource["Email"],
            Telephone: dataSource["Telephone"],
            Sex: dataSource["accountInfo"]["Sex"]
        }
        userDetailedInfoPost(postData).then(res => {
            console.log(res);
            if (res.data.message === "OK") {
                console.log("post success");
                handleClose();
            } else {
                console.log("post fail");
            }
        })
        // console.log(userDetailedInfoPost(postData));
        console.log(postData);
    }

    const onNicknameChange = (e: any) => {
        const tmp = dataSource;
        tmp["accountInfo"]["NickName"] = e.target.value;
        setDataSrouce(tmp);
    };

    const onUserNameChange = (e: any) => {
        const tmp = dataSource;
        tmp["UserName"] = e.target.value;
        setDataSrouce(tmp);
    };

    const onBriefChange = (e: any) => {
        const tmp = dataSource;
        tmp["accountInfo"]["Signature"] = e.target.value;
        setDataSrouce(tmp);
    };

    const onEmailChange = (e: any) => {
        const tmp = dataSource;
        tmp["Email"] = e.target.value;
        setDataSrouce(tmp);
    };

    const onPhoneChange = (e: any) => {
        const tmp = dataSource;
        tmp["Telephone"] = e.target.value;
        setDataSrouce(tmp);
    };

    // dataSource["accountInfo"]["Sex"] = value;
    const onGenderChange = (value: string) => {
        const tmp = dataSource;
        tmp["accountInfo"]["Sex"] = value;
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
                avatar={<Avatar size={48} src={"/api" + imageUrl} />}
                title={dataSource["accountInfo"]["NickName"]}
                description={<Upload
                    name="avatar"
                    listType="picture"
                    className="avatar-uploader"
                    showUploadList={false}
                    customRequest={customRequest}
                    beforeUpload={beforeUpload}
                    onChange={handleChange}
                >
                    {/* {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton} */}
                    <Button icon={<UploadOutlined />}>更换头像</Button>
                </Upload>}
            style={{ marginLeft: "20%", paddingTop:"10px",paddingBottom:"10px" }}
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
                    label="昵称"
                    name="nickname"
                    rules={[
                        {
                            required: true,
                            message: "请输入您的昵称!",
                        },
                    ]}
                >
                    <Input onChange={onNicknameChange} />
                </Form.Item>

                <Form.Item
                    label="用户名"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: "请输入您的用户名!",
                        },
                    ]}
                >
                    <Input onChange={onUserNameChange} />
                </Form.Item>

                <Form.Item
                    label="个人简介"
                    name="brief"
                    rules={[
                        {
                            required: true,
                            message: "请输入您的个人简介!",
                        },
                    ]}
                >
                    <Input onChange={onBriefChange} />
                </Form.Item>

                <Form.Item
                    label="邮箱"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: "请输入您的邮箱!",
                        },
                    ]}
                >
                    <Input onChange={onEmailChange} />
                </Form.Item>

                <Form.Item
                    label="手机号"
                    name="phoneNumber"
                    rules={[
                        {
                            required: true,
                            message: "请输入您的手机号!",
                        },
                    ]}
                >
                    <Input onChange={onPhoneChange} />
                </Form.Item>

                <Form.Item name="gender" label="性别" rules={[{ required: true }]}>
                    <Select
                        placeholder="Select a option and change input text above"
                        // onChange={onGenderChange}
                        allowClear
                        onChange={onGenderChange}
                    >
                        <Option value="男">male</Option>
                        <Option value="女">female</Option>
                        <Option value="其他">other</Option>
                    </Select>
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
