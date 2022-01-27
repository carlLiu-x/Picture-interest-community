//帖子的详细界面组件 
//输出 PostCardD
import React from 'react';
import { Modal,Avatar,Carousel,Image, Drawer,Comment,List} from 'antd';
import Meta from 'antd/lib/card/Meta';
import "../css/postCard.css";
import pointURL from "../icon/point.png";
import loveURL from "../icon/love_black_1.png";
import commentURL from "../icon/comment.png";
import postURL from "../icon/airplane_black.png";
import postURL_1 from "../icon/post.png";
import disloveURL from "../icon/love_black_2.png";
import PostComment from './Postcomment';
import {get,post} from '../axios/axios'


 

class PostCardD extends React.Component<any,any> {
  
  constructor(props:any){
    super(props);
    this.state={
      visible: this.props.visible,
      drawerVisible: false,
      postInformation:{},
      photoUrl:[],
      commentNumber:0,
      likeNumber:0,
      postID:-1,
      postType:-1,
      commentList:[],
      likeJudge:false

    }
  }
  //评论抽屉的打开
  showDrawer = () =>{
    const data = {
      PostId:this.state.postId,
      PostType:this.state.postType
    }
    console.log(data)
    get("/api/v1/mainPage/comment",data).then((res)=>{
      console.log(res.data)
      this.setState({drawerVisible:true,
                      commentList:res.data.CommentList})
    })
    
  }
  //评论抽屉的关闭
  onClose = () => {
    this.setState({drawerVisible:false})
  }
  //对于详情帖子的关闭
  handleCancel = () =>{
  this.setState({visible:!this.state.visible})
  this.forceUpdate();
  }

  setVisible = (_postInformation:any) =>{
    this.setState({visible:!this.state.visible,
                  postInformation:_postInformation,
                  photoUrl:_postInformation.PhotoUrl,
                  commentNumber:_postInformation.Post.CommentNumber,
                  likeNumber:_postInformation.Post.LikeNumber,
                  postId:    _postInformation.Post.PostId,
                  postType:  _postInformation.PostType})
    console.log(_postInformation.Post.PostId)
  }
  componentDidMount(){
    this.props.onRef(this)
    
  
  }
  like =()=>{
    const data = {
      PostId:1,
      UserId:this.state.postId
    }
    if(this.state.likeJudge == true){
      post("/api/v1/mainPage/cancelLike",data).then((res)=>{
        console.log(res.data);
        if(res.data.message == 'OK'){
          this.setState({likeJudge: !this.state.likeJudge,
                         likeNumber:this.state.likeNumber -1})
        }
        
      })
    }
    else {
      post("/api/v1/mainPage/like",data).then((res)=>{
        console.log(res.data)
        if(res.data.message == 'OK'){
          this.setState({likeJudge: !this.state.likeJudge,
                         likeNumber:this.state.likeNumber + 1})
        }
      })

    }
   
  }  
  


  render() {
    let pictureArray:[] = this.state.photoUrl;
    

    return (
      <>
        
        <Modal
          visible={this.state.visible}
          footer={null}
          width={600}
          closable={false}
          centered={true}
          destroyOnClose = {true}
          onCancel={this.handleCancel}
          maskClosable={true}
        >   
            <div className='postCard'>
              <div id="userInformation">
              <Avatar src={this.state.postInformation.PublisherProfileUrl} />
              <p>{this.state.postInformation.PublisherName}</p>
              <p></p>    <p></p>   <p></p>   <p></p>  <p></p> 
              <p></p>   <p></p>   <p></p>   <p></p>   <p></p> 
              <p></p>  <p></p>   <p></p>   <p></p>   <p></p> 
              <p></p>   <p></p>   <p></p>   <p></p>  <p></p> 
              <input type='image' src={pointURL} style={{height:20,width:20}}></input>

              </div>
           
             <Carousel cssEase='linear' className="PostCarousel" >
{/*                 
                    <Image width={600} height={400} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
                    <Image width={600} height={400} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
                    <Image width={600} height={400} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
                    <Image width={600} height={400} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />  */}
                     {pictureArray.map((item) =>{
                       return <Image width={600} height={400} src={item} />
                     })}
            </Carousel>
            <div id='postCard_action'>
            <input type='image' src={this.state.likeJudge == false?loveURL:disloveURL} className='postcard_icon' onClick={this.like}></input>
            <input type='image' src={commentURL} className='postcard_icon'id = "likeButton" onClick={this.showDrawer}></input>
            <input type='image' src={postURL} className='postcard_icon'></input>
            </div>
            <p className='comment_information'>喜爱{this.state.likeNumber}</p> 
            <p className='comment_information'>主feed</p>
            <p className='comment_information'>全部{this.state.commentNumber}评论</p>
            {/* <div id='comment'>
              <a></a>
              <input type='text' style={{width:400}}></input>
              <input type='image' src={postURL_1} className='postcard_icon'></input>
            </div> */}
            </div>
            <Drawer title = "评论" 
                    placement='right' 
                    onClose={this.onClose} 
                    visible = {this.state.drawerVisible}
                    closable={false}
                    
                    style = {{position:'absolute'}}
                    >
                     
                      <List
                        dataSource={this.state.commentList}
                        renderItem={(item:any) =>(
                            <li>
                                <PostComment commentList = {item}/>
                                
                            </li>
                        )}>

                    </List>
              
        </Drawer> 
                        
        </Modal>
       
       
      </>
    );
  }
}

export default PostCardD