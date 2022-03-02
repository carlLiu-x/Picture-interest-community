//主页组件
//输出MainPage
import React from 'react';
import '../css/mainPage.css' 
import {Menu,Space,List} from 'antd';

import PostCard1 from './postCard1_1';
import {get,post} from '../axios/axios';
import axios from 'axios';
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
        let userId = Number(localStorage.getItem("uid"));
        const data = {
            UserId: userId,
        }   
        get("/api/v1/mainPage/page",data).then((res) =>{
            if(res.data == null) {
                window.alert("网络异常")
            } else {
                console.log(res.data.PostList)
                console.log(res.data)
                this.setState({postList:res.data.PostList})  
            } 
        })
    }
    render(): React.ReactNode {
        return(
        <div className = 'mainPage'>
            <div className = 'Page_left'>
                <div className = 'Page_left_main'>
                    <div className = 'Page_left_main_inner'>
                        <div>
                            此部分用于二期中推荐的人部分
                        </div>
                    </div>   
                </div>
            </div> 
            <div className='Page_mid'>
                <div className ="navigation" >
                    <div className="Card">
                        <div>
                            <div className="wbpro-tab2 u-col-8">
                                <div className="woo-box-item-inlineBlock cur">
                                    <div className="woo-box-flex woo-box-alignCenter woo-box-justifyCenter" >
                                        <div className="textcut" tabIndex={0} data-focus-visible={true}>feed2</div>
                                    </div>
                                </div>
                                <div className="woo-box-item-inlineBlock cur">
                                    <div className="woo-box-flex woo-box-alignCenter woo-box-justifyCenter" >
                                        <div className="textcut" tabIndex={0} data-focus-visible={true}>feed1</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = 'scroll_container'>
                    {
                        this.state.postList.map((item:any,index:number) =>{
                            return <PostCard1  senderName = {item.senderName} index={index} publisherName ={item.PublisherName} pictureUrl = {item.PhotoUrl} postInformation = {item.Post} postType = {item.PostType}UserProfile = {item.PublisherProfileUrl} isLike = {item.IsLiked}></PostCard1>
                        })
                    }
                </div>   
            </div>
        </div>
        
        );
    }
  
}
export default MainPage;