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
    // const [value,setValue] = useState(0);
    //调用接口获取用户信息
    useEffect(() => {
        userInfoGet({ UserId: localStorageGet("uid") }).then(res => {
            setDataSrouce(res.data);
            console.log(dataSource);
            console.log(localStorageGet("uid"));
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
                        title="Are you sure to logout?"
                        onConfirm={confirm}
                        onCancel={cancel}
                        okText="Yes"
                        cancelText="No"
                    >
                        <a href="/">Logout</a>
                    </Popconfirm>,
                    // <EllipsisOutlined key="ellipsis" />,
                ]}
            >
                <Meta
                    avatar={<Avatar size={128} src="https://joeschmoe.io/api/v1/random" />}
                    title={dataSource["Nickname"]}
                    description={dataSource["Signature"]}
                />
                {<Row style={{ position: 'relative', top: '-40px' }}>
                    <Col span={4}>{dataSource["PostsNumber"]} post</Col>
                    <Col span={4}>{dataSource["FansNumber"]} fans</Col>
                    <Col span={4}>{dataSource["FollowsNumber"]} follow</Col>
                </Row>}
            </Card>
        </>
    );
}
