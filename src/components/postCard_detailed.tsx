//帖子的详细界面组件 
//输出 PostCardD
import React from 'react';
import "../css/postCardD.css";
import "../css/postCard.css";
// import {get,post} from '../axios/axios';
import AvatarPost from "../components/common/avatar"
import CommentList from './postCommentList';

class PostCardD extends React.Component<any,any> {
  photoAlbum:[] = this.props.photoAlbum;
  img:HTMLImageElement = new Image();
  constructor(props:any){
    super(props);
    this.img.src = this.props.choosePicture;
    this.state={
      choosePicture:this.props.choosePicture,
      postInformation:this.props.postInformation,
      commentList:this.props.commentList,
      pictureId:this.props.pictureId
    }
  } 
  leftMove = ()=>{
    if(this.state.pictureId > 0) {
      this.img.src = this.photoAlbum[this.state.pictureId - 1]
      this.img.onload = ()=>{
        this.setState({pictureId:this.state.pictureId - 1})
      }
      
    }
  }
  rightMove = ()=>{

    if(this.state.pictureId < this.photoAlbum.length + 1) {
      this.img.src = this.photoAlbum[this.state.pictureId + 1]
      this.img.onload = ()=>{
        this.setState({pictureId:this.state.pictureId + 1})
      }
    }
   
  }
  readImg=()=>{
    
  } 
  click_like=()=>{

  }
  openComment=()=>{

  }
  render(): React.ReactNode {
    return (
    <div style = {{minHeight:"100%"}}>
      <div className = "floatingWindow">
        <div className ="fwButtonBox">
          <i className = "fwCloseButtonIcon" onClick={this.props.closePost}></i>
        </div>
        <div className = "box_item_flex">
          <div className = "viewer_container">
            <div className = "picture_viewer_container">
              {this.state.pictureId !=0&&<div className = "fwButtonBox" style ={{width:60,height:60,top:"45%",left:"2%"}}>
                <i className = "left_arrow_icon" onClick={this.leftMove}></i>
              </div>}
              {this.state.pictureId !=this.photoAlbum.length -1&&<div className = "fwButtonBox" style ={{width:60,height:60,top:"45%",left:"90%"}}>
                <i className = "right_arrow_icon" onClick={this.rightMove}></i>
              </div>}
              <div style = {{width:"100%",height:"100%",position:"relative",overflow:"auto"}}>
                <div style = {{width:"100%",height:"100%",userSelect:"none",position:"relative",overflow:"hidden",display:"flex",justifyContent:"center",alignItems:"center"}}>
                
                  <div className = "picture_box" style = {{width:this.img.width,height:this.img.height}}>
                    <img src = {this.photoAlbum[this.state.pictureId]} style = {{width:"100%",height:"100%"}} onClick = {this.readImg}></img>  
                  </div>
                </div>
              </div>
            </div>
            <div className="picture_preview_list">
              {this.photoAlbum.map((item:string,index:number)=>{
                return(
                      <li className = "preview_item">
                        <div style ={{position:"absolute",top:0,right:0,left:0,bottom:0}}>
                          <div className = {item == this.photoAlbum[this.state.pictureId]?"preview_choose_border":""}></div>
                          <img style = {{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"}} src = {item}></img>
                        </div>
                      </li>
             ) })}
            </div>
          </div>
        </div>
        <div className = "fw_comment_box">
            <div className = "fw_comment_background">
              <div className = "fw_comment_main">
                <article className = "fw_comment_main_sender">
                  <div className = "fw_comment_main_sender_feed">
                    <header style = {{display:"flex"}}>
                      <AvatarPost avatarSrc ={this.props.UserProfile} style = {{height:40,width:40}}></AvatarPost>
                      <div className = "post_top_inner">
                        <div className="avatar_name">
                          <a className="avatar_link" href="/u/1304552850">
                            <span title={this.props.publisherName}>{this.props.publisherName}</span>
                          </a>            
                        </div>
                        <div className="avatar_description">
                          <a title={this.state.postInformation.CreatedAt.substr(0,10)+" "+this.state.postInformation.CreatedAt.substr(11,8)} href="" className="post_time">{this.state.postInformation.CreatedAt.substr(0,10)+" "+this.state.postInformation.CreatedAt.substr(11,8)}</a>
                        </div>
                      </div>
                      
                    </header>
                    <div className = "fw_comment_main_sender_feed_text">
                        #feed
                    </div>
                    <div className ="post_bottom">
                        <div className="bottom_item">
                            <div className="bottom_item_inner">
                                <span>
                                    <i data-v-76c52272="" className="transmit"></i>
                                    <span data-v-76c52272="" className="transmit_text">29</span>
                                </span>
                            </div>
                        </div>
                        <div className="bottom_item">
                            <div className="bottom_item_inner">
                                <span>
                                    <i className="comment" title="评论" onClick={this.openComment}></i>
                                    <span className="transmit_text">157</span>
                                </span>
                            </div>
                        </div>
                        <div className="bottom_item">
                            <div className="bottom_item_inner">
                                <span>
                                    <i className={this.state.like?"liked":"like"} onClick={this.click_like} title = "点赞"></i>
                                    <span className='transmit_text'>{12}</span>
                                </span>
                            </div>
                        </div>
                    </div>
                  </div>
                </article>
                <div className = "fw_comment_middle_box">
                  <div>
                    <div className = "fw_comment_middle_box_text">评论</div>
                  </div>
                </div>
                {this.state.commentList.map((item:any,index:number) =>{
                  return <CommentList showAvatar = {false}commentInformation = {item} commentId = {index}></CommentList>
               })}
              </div>
            </div>

          </div>
      </div>
    </div>
    );
  }
}

export default PostCardD