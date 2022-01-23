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
                <TabPane tab="Edit Homepage" key="1">
                    <EditUserInfo/>
                </TabPane>
                <TabPane tab="Change Password" key="2">
                    <EditPassword />
                </TabPane>
                <TabPane tab="..." key="3">
                    Content of Tab 3
                </TabPane>
                </Tabs>
            </Card>
        </>
    );
}
