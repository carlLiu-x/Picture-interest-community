import React, { Component } from 'react'
import { NavLink,Route, Routes} from 'react-router-dom'
import '../css/postPicture.css' 
import PostPictureCarousel from './postPictureCarousel' 
import PostPictureEdit from './postPictureEdit'
import PostPicturePost from './postPicturePost'
import PropTypes from "prop-types";
import { Layout,Upload, Modal,Button, message  } from 'antd'
import { PlusOutlined,LeftOutlined,RightOutlined } from '@ant-design/icons'
import { post } from '../axios/axios'
import { UploadFileStatus } from 'antd/lib/upload/interface'
import { fileURLToPath } from 'url'
const { Header, Sider, Content } = Layout;

// 图片转base64
function getBase64(file: Blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
}

class PostPicture extends Component<any,any> {
    static childContextTypes = {
      pictureurl:PropTypes.string,
      sendurl: PropTypes.func
    }
    constructor(props: any) {
      super(props)
      this.removeFile = this.removeFile.bind(this)
    }
    state = {
      previewVisible: false,
      previewImage: '',
      previewTitle: '',
      fileList: [   {
        uid: '-1',
        name: 'image.png',
        status: 'done' as UploadFileStatus ,
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      },]
    }
    removeFile(file:any){
      console.log(file)
      this.state.fileList.map((v,i)=>{
        if(file.uid === v.uid){
          this.state.fileList.splice(i,1)
          this.setState({fileList:this.state.fileList})
          this.props.onChange(this.state.fileList)
        }
      })
    }

    getChildContext (file: any) {
      return {
        pictureurl: `${file}`,
        // methodA: () => 'methodA'
      }
    }
    handleCancel = () => this.setState({ previewVisible: false });  
    handlePreview = async (file: any) => {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj);
      }
      this.setState({
        previewImage: file.url || file.preview,
        previewVisible: true,
        previewTitle: file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
      });
    };
    handleChange = ({file,fileList,event}: any) =>{
      // console.log(file, fileList, event);
      console.log(file);
      this.setState({ fileList });
      if(file.status=='done'){
        this.getChildContext(file);
      }
    }
    beforeUpload(file: any) {
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
      }
      return isLt2M;
    }
    customRequest = (option:any) => {
      var that = this
      const formData = new FormData();
      formData.append('photo', option.file);
      post("http://127.0.0.1:4523/mock/602833/v1/upload/post/image",formData).then(res => {
        console.log(res)
        this.state.fileList.push({
          uid: '1',
          name: 'yyy.png',
          status: 'done',
          url: res.data[0].file_url,
        })
        this.state.fileList.map((v, i) => {
          v.uid = `${i}`
        })
        this.setState({
          fileList: this.state.fileList
        })
        this.props.onChange(this.state.fileList)
      })
    }
  
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
              {/* 左侧走马灯及图片上传sider */}
            <Sider className="picture-upload-sider" width={800} theme = "light">
              {/* 走马灯 */}
                <Content className="picture-upload-show">
                    <PostPictureCarousel/>
                </Content>
                <Content className="picture-upload">
              {/* 上传图片 */}
                    <Upload
                    beforeUpload={this.beforeUpload}
                    customRequest={this.customRequest}
                    fileList={fileList}
                    listType="picture-card"
                    onPreview={this.handlePreview}
                    onChange={this.handleChange}
                    >
                        {fileList.length >= 9 ? null : uploadButton}
                    </Upload>
                    <Modal
                    visible={previewVisible}
                    title={previewTitle}
                    footer={null}
                    onCancel={this.handleCancel}
                    >
                        <img alt="example" style={{ width: '100%' }} src={previewImage} />
                    </Modal>
                </Content>
            </Sider>
            {/* 右侧图片编辑及帖子上传 */}
            <Layout className="picture-design-side">
              {/* 右侧顶端头部左右导航栏（左为图片编辑，右为帖子上传） */}
                <Header className="post-router-head" >
                <NavLink className="post-router-head-edit" to="/mainPage/send/edit" >
                <Button ghost type="text" icon={<LeftOutlined />} className="post-router-head-before" />
                </NavLink>  
                <NavLink className="post-router-head-post" to="/mainPage/send/post" >
                <Button ghost type="text" icon={<RightOutlined />} className="post-router-head-next" />                 
                </NavLink>
                </Header>
                {/* 头部导航栏路由 */}
                <Layout > 
                <Routes>
                  <Route path="/" element={<PostPictureEdit />} />
                  {/* 图片编辑 */}
                  <Route path="/edit/*" element={<PostPictureEdit />}/>
                  {/* 帖子发送 */}
                  <Route path="/post/*" element={<PostPicturePost />}/>
                </Routes>
                </Layout>
            </Layout>
          </Layout>
        );
    }
}

export default PostPicture