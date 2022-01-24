import React, { Component } from 'react';
import '../css/postPicturePost.css' 

import { Link,Route, Routes} from 'react-router-dom'
import { Avatar,Layout,Input,Button  } from 'antd';

import { UserOutlined } from '@ant-design/icons';

const { Header, Footer, Sider, Content } = Layout;
const { TextArea } = Input;

export class PostPicturePost extends Component {
  render() {
    return(
        <Layout className='post-layout'>
            <Content className='avatar-content'>
            <Avatar size="large" icon={<UserOutlined />} />
            <span> User name</span>
            </Content>
            <Content className='input-content'>
            <TextArea showCount maxLength={100} style={{ height: 120 }}  />
            </Content>
            <Content className='submit-button'>
            <Button type="primary" block>发布</Button>
            </Content>
            <Content className='position'>
            <Button type="text" block>位置</Button>
            </Content>
            <Content className='others'>
            <Button type="text" block>其他</Button>
            </Content>
        </Layout>
    );
  }
}

export default PostPicturePost;