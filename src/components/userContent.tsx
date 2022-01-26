import * as React from "react";

import { Card, Avatar, Row, Col } from "antd";

const tabList = [
    {
        key: "post",
        tab: "post",
    },
    {
        key: "favorite",
        tab: "favorite",
    },
    {
        key: "mark",
        tab: "mark",
    },
];

export default function UserContent(): JSX.Element {
    return (
        <>
            <Card
                style={{
                    width: "50%",
                    margin: "50px 25% 50px",
                    height: "400px",
                }}
                tabList={tabList}
                activeTabKey={"post"}
            >
                list
            </Card>
        </>
    );
}
