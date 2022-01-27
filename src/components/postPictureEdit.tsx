import React, { Component } from 'react';
import { NavLink,Route, Routes} from 'react-router-dom'
import { Layout,Button   } from 'antd';
import PostPictureCut from './postPictureCut'
import PostPictureFilter from './postPictureFilter'
import PostPictureSign from './postPictureSign'
import '../css/postPictureEdit.css' 
const { Sider, Content } = Layout;

export class PostPictureEdit extends Component {
  render() {
    return(
        <Layout>
            {/**图片编辑导航栏路由链接*/}
            <Sider className="picture-edit-item" width={100} theme = "light">
              <Content className="picture-edit-item-content">
                <NavLink className="cut" to="/mainPage/send/edit/postpicturecut" >
                <Button type="primary" block>
                  裁剪
                </Button>
                </NavLink>
              </Content>
              <Content className="picture-edit-item-content">
                <NavLink className="filter" to="/mainPage/send/edit/postpicturefilter" >
                <Button type="primary" block>
                  滤镜
                </Button>
                </NavLink>
              </Content>
              <Content className="picture-edit-item-content">
                <NavLink className="sign" to="/mainPage/send/edit/postpicturesign" >
                <Button type="primary" block>
                  标记
                </Button>
                </NavLink>
              </Content>
            </Sider>
            {/**图片编辑注册路由*/}
            <Content className="picture-edit">
            <Routes>
              <Route path="/" element={<PostPictureCut />}/>
              <Route path="/postpicturecut" element={<PostPictureCut />}/>
              <Route path="/postpicturefilter" element={<PostPictureFilter />}/>
              <Route path="/postpicturesign" element={<PostPictureSign />}/>
            </Routes>
            </Content>            
        </Layout>
    );
  }
}


export default PostPictureEdit;