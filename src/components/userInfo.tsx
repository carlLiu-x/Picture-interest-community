import React,{useEffect,useState} from "react";
import {
    EditOutlined,
    EllipsisOutlined,
    SettingOutlined,
} from "@ant-design/icons";
import { Card, Avatar, Row, Col } from "antd";
import { userInfoGet } from "../services/userApi";

const { Meta } = Card;

export default function UserInfo(): JSX.Element {
    const [dataSource,setDataSrouce] = useState({FansNumber: 0,FollowsNumber: 0,Nickname: "none",PostsNumber: 0,Profile: ""});
    // const [value,setValue] = useState(0);
    //调用接口获取用户信息
    useEffect(()=>{
        userInfoGet({UserId:2}).then(res=>{
            setDataSrouce(res.data);
            console.log(dataSource);
        })
    },[]
    );

    return (
        <>
            <Card
                style={{ width: "50%", marginLeft: "25%", marginTop: "50px" }}
                actions={[
                    <SettingOutlined key="setting" onClick={()=>{window.location.href="/edit"}}/>,
                    // <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                ]}
            >
                <Meta
                    avatar={<Avatar size={128} src="https://joeschmoe.io/api/v1/random" />}
                    title={dataSource["Nickname"]}
                    description={dataSource["Profile"]}
                />
                <Row style={{position:'relative', top: '-40px'}}>
                  <Col span={4}>{dataSource["PostsNumber"]} post</Col>
                  <Col span={4}>{dataSource["FansNumber"]} fans</Col>
                  <Col span={4}>{dataSource["FollowsNumber"]} follow</Col>
                </Row>
            </Card>
        </>
    );
}
