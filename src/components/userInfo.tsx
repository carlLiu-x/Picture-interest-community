import * as React from "react";
import {
    EditOutlined,
    EllipsisOutlined,
    SettingOutlined,
} from "@ant-design/icons";
import { Card, Avatar, Row, Col } from "antd";
const { Meta } = Card;

export default function UserInfo(): JSX.Element {
    return (
        <>
            <Card
                style={{ width: "50%", marginLeft: "25%", marginTop: "50px" }}
                actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                ]}
            >
                <Meta
                    avatar={<Avatar size={128} src="https://joeschmoe.io/api/v1/random" />}
                    title="User Nickname"
                    description="This is the description"
                />
                <Row style={{position:'relative', top: '-40px'}}>
                  <Col span={4}>0 post</Col>
                  <Col span={4}>0 fans</Col>
                  <Col span={4}>0 follow</Col>
                </Row>
            </Card>
        </>
    );
}
