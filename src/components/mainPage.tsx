//主页组件
//输出MainPage
import React from 'react';
import '../css/mainPage.css' 
import {Menu,Space,List} from 'antd';
import PostCard from './postCard';
import {get,post} from '../axios/axios';
import axios from 'axios';

interface Post {
    PostId: number;
    CreatedAt: Date;
    UpdatedAt: Date;
    DeletedAt: Date;
    PublisherId:string;
    PhotoNumber:string;
    Content:any;
    CommentNumber: number;
    ForwardNumber: number;
    LikeNumber: number;
    CollectionNumber: number;
    PhotoPathUrl: string;
    Location: string;

}
class MainPage extends React.Component<any,any>{
    constructor(props:any)
    {
        super(props);
        this.state = {
            postList:[],
            model:"recommend", 
        }
        
       
    }
    
    componentDidMount(){
        const data = {
            UserId: 1,
        }
        
        get("/api/v1/mainPage/page",data).then((res) =>{
           
             
             console.log(res.data.PostList)
             this.setState({postList:res.data.PostList})
             
             
        })
    }
    render(): React.ReactNode {
        
        return(
        <div>   
             <div id = 'mainPage'>
                <Menu theme="dark" mode="horizontal" style={{position:'fixed',zIndex:1}} defaultSelectedKeys={['2']}>
                    <Menu.Item style={{width:400}} key="1">关注的人</Menu.Item>
                    <Menu.Item style={{width:400}}key="2">推荐</Menu.Item>
                </Menu>
                
                <Space style={{position:"relative",top:100,zIndex:0}} direction='vertical' size={20}>
                    <List
                        dataSource={this.state.postList}
                        renderItem={(item:any) =>(
                            <li>
                                <PostCard  pictureUrl = {item.PhotoUrl[0]} postInformation = {item.Post} UserProfile = {item.SenderProfileUrl}></PostCard>
                                
                            </li>
                        )}>

                    </List>
                    
                    
                    

                </Space>
              
             
               
             </div>
        </div>
         
        );
    }
  
}
export default MainPage;