import React, { useEffect, useState } from "react";
import { Card, Avatar, Row, Col, Tabs, Space, List,Image } from "antd";
import { userPostsGet } from "../services/userApi";
import UserPostCard from "./userPostCard";
import { get as localStorageGet } from "local-storage";

const { TabPane } = Tabs;

export default function UserContent(): JSX.Element {
    // const [dataSource,setDataSrouce] = useState({PageList:[],message:"OK"});
    const [dataSource, setDataSrouce] = useState([]);
    // const [value, setValue] = useState(0);
    // //调用接口获取用户信息
    // useEffect(()=>{
    //     userPostsGet({UserId:2}).then(res=>{
    //         setDataSrouce(res.data);
    //         console.log(dataSource);
    //     });
    // },[value]
    // )

    //测试用 调用接口获取用户信息
    useEffect(() => {
        userPostsGet({ UserId: 1 }).then(res => {
            setDataSrouce(res.data.PostList);
            console.log(dataSource);
        });
    }, []
    )

    const getListElement = () => {
        if (dataSource === null) {
            return;
        } else {
            return (
                // <List
                //     dataSource={dataSource}
                //     renderItem={(item: any) => (
                //         // <li>
                //         <UserPostCard pictureUrl={item.PhotoUrl[0]} postInformation={item.Post} UserProfile={item.SenderProfileUrl}></UserPostCard>

                //         // </li>
                //     )}>
                // </List>
                <List
                itemLayout="horizontal"
                dataSource={dataSource}
                grid={{ gutter: 16, column: 2 }}
                pagination={{
                  onChange: (page) => {
                    console.log(page);
                  },
                  pageSize: 4,
                }}
                renderItem={(item: any) => (
                  <List.Item>
                    <Image width={200} src={item.PhotoUrl[0]} />
                  </List.Item>
                )}
              />
            );
        }
    }

    return (
        <>
            <Card
                style={{
                    width: "50%",
                    margin: "50px 25% 50px",
                    height: "400px",
                }}
                activeTabKey={"post"}
            >
                <Tabs defaultActiveKey="content" centered>
                    <TabPane tab="posts" key="1">
                        {/* <Space style={{ position: "relative", top: 100, zIndex: 0 }} direction='vertical' size={20}> */}
                        {getListElement()}
                        {/* </Space> */}
                    </TabPane>
                    <TabPane tab="favorites" key="2">
                        favorites
                    </TabPane>
                    <TabPane tab="marks" key="3">
                        marks
                    </TabPane>
                </Tabs>
            </Card>
        </>
    );
}
