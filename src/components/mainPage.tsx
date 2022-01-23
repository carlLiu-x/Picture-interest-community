import React from 'react';
import '../css/mainPage.css' 
import {Menu,Space} from 'antd';
import PostCard from './postCard';


class MainPage extends React.Component{
    constructor(props:any)
    {
        super(props);
        this.state = {}
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
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />


                </Space>
              
             
               
             </div>
        </div>
         
        );
    }
  
}
export default MainPage;
