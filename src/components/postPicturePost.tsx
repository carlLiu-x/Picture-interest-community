import React, { Component } from 'react';
import '../css/postPicturePost.css' 
import { Link,Route, Routes} from 'react-router-dom'
import { Avatar,Layout,Input,Button,Form  } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types'
import { post } from '../axios/axios'
const { Header, Footer, Sider, Content } = Layout;
const { TextArea } = Input;


class PostPicturePost extends Component {
  static contextTypes = {
    pictureurl: PropTypes.string
  }
  onFinish=(value:any)=>{
    var res ={
      pictureurl: this.context.pictureurl,
      uid: 1,
      contents: "",
      data: "",
      location: "",
    }
    post("/mainPage/send",res).then((responce)=>{
      console.log(res);
    }).catch((error)=>{
      console.log("failed");
      console.log(value);
    })
  }
  render() {
    const {
      pictureurl,
      methodA
    } = this.context
    console.log(`context.pictureurl = ${pictureurl}`)
    return(
        <Layout className='post-layout'>
            <Content className='avatar-content'>
            <Avatar size="large" icon={<UserOutlined />} />
            <span> User name</span>
            </Content>
            {/* 文字表单 */}
            <Form
            onFinish={this.onFinish}
            >
              <Form.Item>
              <Content className='input-content'>
              <TextArea showCount maxLength={100} style={{ height: 120 }}  />
              </Content>
              </Form.Item>
              <Form.Item>
              <Content className='submit-button'>
              <Button type="primary" htmlType="submit" block>发布</Button>
              </Content>
              </Form.Item>
            </Form>
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