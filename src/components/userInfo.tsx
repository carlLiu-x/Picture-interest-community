import React, { useEffect, useState } from "react";
import {
    // LogoutOutlined,
    EllipsisOutlined,
    SettingOutlined,
} from "@ant-design/icons";
import { Card, Avatar, Row, Col, Popconfirm, message } from "antd";
import { userInfoGet } from "../services/userApi";
import { get as localStorageGet, remove as localStorageRemove} from "local-storage";

const { Meta } = Card;

export default function UserInfo(): JSX.Element {
    const [dataSource, setDataSrouce] = useState({ FansNumber: 0, FollowsNumber: 0, Nickname: "", PostsNumber: 0, Profile: "", Signature: "" });
    const [profileUrl,setProfileUrl] = useState("https://joeschmoe.io/api/v1/random");
    // const [value,setValue] = useState(0);
    //调用接口获取用户信息
    useEffect(() => {
        userInfoGet({ UserId: localStorageGet("uid") }).then(res => {
            setDataSrouce(res.data);
            if(res.data.Profile!==""){
                setProfileUrl("/api"+res.data.Profile);
            }
            console.log(dataSource);
            console.log("uid:"+localStorageGet("uid"));
        })
    }, []
    );

    const confirm = () => {
        console.log("click yes");
        console.log("now logout...");
        localStorageRemove("uid");
        message.success('Click on Yes');
        window.location.href = "/";
    }

    const cancel = () => {
        console.log("click no");
        message.error('Click on No');
    }

    return (
        <>
            <Card
                style={{ width: "50%", marginLeft: "25%", marginTop: "50px" }}
                actions={[
                    <SettingOutlined key="setting" onClick={() => { window.location.href = "/edit" }} />,
                    <Popconfirm
                        title="确认登出?"
                        onConfirm={confirm}
                        onCancel={cancel}
                        okText="是"
                        cancelText="否"
                    >
                        <a href="/">登出</a>
                    </Popconfirm>,
                    // <EllipsisOutlined key="ellipsis" />,
                ]}
            >
                <Meta
                    avatar={<Avatar size={128} src={profileUrl} />}
                    title={dataSource["Nickname"]}
                    description={dataSource["Signature"]}
                />
                {<Row style={{ position: 'relative', top: '-40px' }}>
                    <Col span={4}>{dataSource["PostsNumber"]} 帖子</Col>
                    <Col span={4}>{dataSource["FansNumber"]} 粉丝</Col>
                    <Col span={4}>{dataSource["FollowsNumber"]} 关注</Col>
                </Row>}
            </Card>
        </>
    );
}
