import React from 'react';
import { Modal,Avatar,Carousel,Image, Button} from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import Meta from 'antd/lib/card/Meta';
import "../css/postCard.css";
import pointURL from "../icon/point.png";
import loveURL from "../icon/love_black_1.png";
import commentURL from "../icon/comment.png";
import postURL from "../icon/airplane_black.png";
import postURL_1 from "../icon/post.png";

 

class PostCardD extends React.Component<any,any> {
  
  constructor(props:any){
    super(props);
    this.state={
      visible: this.props.visible,
    }
  }
  
  
  handleCancel = () =>{
  this.setState({visible:!this.state.visible})
  this.forceUpdate();
  }
  setVisible = () =>{
    this.setState({visible:!this.state.visible})
  }
  componentDidMount(){
    this.props.onRef(this)
  }


  render() {
   
    
    return (
      <>
        <Modal
          visible={this.state.visible}
          footer={null}
          width={600}
          closable={true}
          centered={true}
          destroyOnClose = {true}
          onCancel={this.handleCancel}
          maskClosable={true}
          
        >
            <div className='postCard'>
              <div id="userInformation">
              <Avatar src="https://joeschmoe.io/api/v1/random" />
              <p>user name</p>
              <p></p>    <p></p>   <p></p>   <p></p>  <p></p> 
              <p></p>   <p></p>   <p></p>   <p></p>   <p></p> 
              <p></p>  <p></p>   <p></p>   <p></p>   <p></p> 
              <p></p>   <p></p>   <p></p>   <p></p>  <p></p> 
              <input type='image' src={pointURL} style={{height:20,width:20}}></input>

              </div>
           
             <Carousel arrows={true} cssEase='linear' className="Carousel" >
                
                    <Image width={600} height={400} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
               
              
                     <Image width={600} height={400} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
              
                    <Image width={600} height={400} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
               
                    <Image width={600} height={400} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" /> 
              
            </Carousel>
            <div id='postCard_action'>
            <input type='image' src={loveURL} className='postcard_icon'></input>
            <input type='image' src={commentURL} className='postcard_icon'></input>
            <input type='image' src={postURL} className='postcard_icon'></input>
            </div>
            <p className='comment_information'>16.5万赞</p> 
            <p className='comment_information'>主feed</p>
            <p className='comment_information'>全部1000评论</p>
            <div id='comment'>
              <a></a>
              <input type='text' style={{width:400}}></input>
              <input type='image' src={postURL_1} className='postcard_icon'></input>
            </div>
             

            </div>
        </Modal>
      </>
    );
  }
}

export default PostCardD


