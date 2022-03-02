import React, { useEffect, useState } from "react";
import { Card, Avatar, Row, Col, Tabs, Space, List,Image } from "antd";
import { userDetailedInfoGet, userPostsGet, postCommentsGet } from "../services/userApi";
import PostCardD from './postCard_detailed';
import { get as localStorageGet } from "local-storage";


const { TabPane } = Tabs;

export default function UserContent(): JSX.Element {
    // const [dataSource,setDataSrouce] = useState({PageList:[],message:"OK"});
    const [postCard,setPostCard] = useState(false); // 控制帖子详情空间开关
    const [postData,setPostData] = useState([]);
    const [userData, setUserData] = useState({Email: "",Telephone: "",UserName: "", accountInfo: { UserId: 0, NickName: "", Sex: "male", Signature: "", ProfileUrl: "" } });
    
    const [photoAlbum,setPhotoAlbum] = useState([]);
    const [postInformation,setPostInformation] = useState({});
    const [publisherName,setPublisherName] = useState("");
    const [userProfile,setUserProfile] = useState("");
    const [commentList,setCommentList] = useState([]);
    const [commentUpdate,setCommentUpdate] = useState(false);

    //初始化显示帖子需要的数据(用户,帖子,评论)
    useEffect(() => {
        userPostsGet({ UserId: localStorageGet("uid") }).then(res => {
            var posts = res.data.PageList;
            for(var i=0;i<posts.length;i++){
                posts[i]["PhotoPathUrl"] = posts[i]["PhotoPathUrl"].split(";");
            }
            setPostData(res.data.PageList);
            /*
            postData: [
                {
                    "PostId": 2,
                    "Create...
            */
        });
        userDetailedInfoGet({ UserId: localStorageGet("uid") }).then(res => {
            setUserData(res.data);
            // console.log(dataSource);
            console.log("uid: " + localStorageGet("uid"));
        })
    }, []
    )

    //获取评论列表后再展示postCardDetail组件.
    useEffect(()=>{
        if(commentUpdate===true){
            setPostCard(!postCard); 
            console.log(commentList);
        }
    },[commentList]
    )

    const openPost =(item:any) =>{
        setPhotoAlbum(item["PhotoPathUrl"]);
        setPostInformation(item);
        setPublisherName(userData["accountInfo"]["NickName"]);
        setUserProfile("/api"+userData["accountInfo"]["ProfileUrl"]);
        postCommentsGet({PostId: item["PostId"],PostType: 0}).then(res => {
            if(res.data.CommentList!==null){
                setCommentUpdate(true);
                setCommentList(res.data.CommentList);
            }else{
                setCommentUpdate(true);
                setCommentList([]);
            }
        })
        console.log(item);
        console.log(userData);
    }

    const closePost =() =>{
        setPostCard(!postCard);
    }


    const getListElement = () => {
        if (postData === []) {
            return;
        } else {
            return (
                <List
                itemLayout="horizontal"
                dataSource={postData}
                grid={{ gutter: 16, column: 3 }}
                pagination={{
                  onChange: (page) => {
                    console.log(page);
                  },
                  pageSize: 3,
                }}
                renderItem={(item: any) => (
                  <List.Item>
                    <Image 
                    width={200} 
                    height={200}
                    src={"/api"+item.PhotoPathUrl[0]} 
                    onClick={()=>{openPost(item)}}
                    preview={false}
                    fallback="data:image/png;base64,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"
                    />
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
                    height: "500px",
                }}
                activeTabKey={"post"}
            >
                <Tabs defaultActiveKey="content" centered>
                    <TabPane tab="我的帖子" key="1">
                        <Card>
                        {getListElement()}
                        </Card>
                    </TabPane>
                    <TabPane tab="收藏夹" key="2">
                        收藏夹
                    </TabPane>
                    <TabPane tab="标记内容" key="3">
                        标记内容
                    </TabPane>
                </Tabs>
            </Card>
            {postCard&&
            <PostCardD 
            pictureId = {0} 
            photoAlbum = {photoAlbum} 
            closePost = {closePost} 
            choosePicture = {photoAlbum[0]} 
            postInformation = {postInformation} 
            publisherName = {publisherName} 
            UserProfile = {userProfile} 
            commentList = {commentList} >
            </PostCardD>}
        </>
    );
}
