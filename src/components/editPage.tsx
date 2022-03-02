import * as React from "react";
import { Tabs, Card, Avatar, Row, Col } from "antd";
import EditPassword from "./editPassword";
import EditUserInfo from "./editUserInfo";
const { TabPane } = Tabs;

export default function EditPage(): JSX.Element {
    return (
        <>
            <Card
                style={{ width: "50%", marginLeft: "25%", marginTop: "50px" }}
            >
                <Tabs tabPosition='left'>
                <TabPane tab="个人信息编辑" key="1">
                    <EditUserInfo/>
                </TabPane>
                <TabPane tab="密码修改" key="2">
                    <EditPassword />
                </TabPane>
                <TabPane tab="..." key="3">
                    未完待续...
                </TabPane>
                </Tabs>
            </Card>
        </>
    );
}
