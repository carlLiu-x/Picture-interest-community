import React, { Component } from 'react'
import { NavLink,Route, Routes} from 'react-router-dom'
import '../css/postPicture.css' 
import PostPictureCarousel from './postPictureCarousel' 
import PostPictureEdit from './postPictureEdit'
import PostPicturePost from './postPicturePost'
import { Layout,Upload, Modal,Button  } from 'antd'
import { PlusOutlined,LeftOutlined,RightOutlined } from '@ant-design/icons'

const { Header, Sider, Content } = Layout;

/*
function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
}
*/
class PostPicture extends Component {
    
    state = {
        previewVisible: false,
        previewImage: '',
        previewTitle: '',
        fileList: [
          {
            uid: '-1',
            name: 'image.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          },
          {
            uid: '-2',
            name: 'image.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          },
          {
            uid: '-3',
            name: 'image.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          },
          {
            uid: '-4',
            name: 'image.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          },
          {
            uid: '-xxx',
            percent: 50,
            name: 'image.png',
            status: 'uploading',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          },
          {
            uid: '-5',
            name: 'image.png',
            status: 'error',
          },
        ],
      };
/*    
      handleCancel = () => this.setState({ previewVisible: false });
    
      handlePreview = async file => {
        if (!file.url && !file.preview) {
          file.preview = await getBase64(file.originFileObj);
        }
    
        this.setState({
          previewImage: file.url || file.preview,
          previewVisible: true,
          previewTitle: file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
        });
      };
    
      handleChange = ({ fileList }) => this.setState({ fileList });
*/    

    render(): React.ReactNode {
        const { previewVisible, previewImage, fileList, previewTitle } = this.state;
        const uploadButton = (
          <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
          </div>
        );
        return(
            <Layout>
            <Sider className="picture-upload-sider" width={800} theme = "light">
                <Content className="picture-upload-show">
                    <PostPictureCarousel/>
                </Content>
                <Content className="picture-upload">
                    <Upload
                    listType="picture-card"
    //                fileList={fileList}
    //                onPreview={this.handlePreview}
    //                onChange={this.handleChange}
                    >
                        {fileList.length >= 8 ? null : uploadButton}
                    </Upload>
                    <Modal
                    visible={previewVisible}
                    title={previewTitle}
                    footer={null}
    //                onCancel={this.handleCancel}
                    >
                        <img alt="example" style={{ width: '100%' }} src={previewImage} />
                    </Modal>
                </Content>
            </Sider>
            <Layout className="picture-design-side">
                <Header className="post-router-head" >
                <NavLink className="post-router-head-edit" to="/postpicture/edit" >
                <Button ghost type="text" icon={<LeftOutlined />} className="post-router-head-before" />
                </NavLink>  
                <NavLink className="post-router-head-post" to="/postpicture/post" >
                <Button ghost type="text" icon={<RightOutlined />} className="post-router-head-next" />                 
                </NavLink>
                </Header>
                <Layout > 
                <Routes>
                <Route path="/" element={<PostPictureEdit />} />
                <Route path="/edit/*" element={<PostPictureEdit />}/>
                <Route path="/post/*" element={<PostPicturePost />}/>
                </Routes>
                </Layout>
            </Layout>
          </Layout>
        );
    }
}

export default PostPicture