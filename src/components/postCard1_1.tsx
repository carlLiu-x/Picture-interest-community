//帖子的预览界面
//输出 PostCard
import React,{useState} from 'react';
import '../css/mainPage.css';
import { Card, Avatar } from 'antd';
import AvatarPost from './common/avatar';
import '../css/postCard.css';
import PostCardD from './postCard_detailed';
import PostCommentSender from './PostcommentSender';
import PostComment from './postComment';
import { post,get } from '../axios/axios';
import qs from 'querystring'

const { Meta } = Card;

class PostCard1 extends React.Component<any,any> {
    choosePicture:string = "";
    pictureId:number = -1;
    
    public childRef:any = React.createRef();  
    constructor(props:any){
        super(props);
        this.state = {
            isActive : false,
            postInformation: this.props.postInformation,
            photoAlbum: this.props.pictureUrl,
            like: this.props.isLike,
            likeNumber: this.props.postInformation.LikeNumber,
            commentIsOpened: false,
            postType: this.props.postType,
            commentList: [],
            openPostCard: false
        }
    }
    openComment = ()=>{
        let data = {
            PostId: this.state.postInformation.PostId,
            PostType: this.state.postType
        }
        get("/api/v1/mainPage/comment",data).then((res) =>{

            this.setState({commentIsOpened: !this.state.commentIsOpened,commentList:res.data.CommentList})
            console.log(res.data)
        })
        
    }
    click_like =() =>{
        let temp_data = {
            PostId: this.state.postInformation.PostId,
            UserId: 1,
            PostType: this.state.postType
        }
        if(this.state.like) {
            
            this.setState({like:!this.state.like,likeNumber:this.state.likeNumber - 1})
            let data = qs.stringify(temp_data);
            post("/api/v1/mainPage/cancelLike",data).then((res) => {
                console.log(res)
            })
        }
        else {
            this.setState({like:!this.state.like,likeNumber:this.state.likeNumber + 1})
            
            let data = qs.stringify(temp_data);
            post("/api/v1/mainPage/like",data).then((res) => {
                console.log(res)
            } )
        }
        
     }
    openPost =(index:number,e:any) =>{
        this.choosePicture = e.target.src;  
        this.pictureId = index;
        this.setState({openPostCard:!this.state.openPostCard}) 
    }
    closePost =() =>{
        this.setState({openPostCard:!this.state.openPostCard})
    }

    render(): React.ReactNode {
        return(
            
            <div data-index="0" className="scroller_item" data-active="true">
                <article className="scroller_item_inner" tabIndex={0}>  
                <div className="post_body">
                    <header style={{display: 'flex'}}>
                        <AvatarPost avatarSrc={this.props.UserProfile} style={{height:'3.25rem',width:'3.25rem'}} userID = {localStorage.getItem("uid")}></AvatarPost>
                        <div className="post_top_main">
                            <div className="post_top_inner">
                                <div className="avatar_name">
                                    <a className="avatar_link" href="/u/1304552850">
                                        <span title={this.props.publisherName}>{this.props.publisherName}</span>
                                    </a>
                                    
                                </div>
                                <div className="avatar_description">
                                    <a title={this.state.postInformation.CreatedAt.substr(0,10)+" "+this.state.postInformation.CreatedAt.substr(11,8)} href="" className="post_time">{this.state.postInformation.CreatedAt.substr(0,10)+" "+this.state.postInformation.CreatedAt.substr(11,8)}</a>
                                </div>
                            </div>
                        </div>
                        <div className="button_flex">
                            <button className="focus_button">
                                <span> 关注</span>
                            </button>
                            <div className="button_mask"></div>
                        </div>
                    </header>
                    <div style = {{paddingLeft:60}}>
                        <a href="" className="avatar_link" style={{fontSize:12}}>#feed</a>
                        <div className ="postcard_content">
                            <div>{this.state.postInformation.Content}</div>
                        </div>
                        <div className="margin_top">
                            <div className="picture_album" >
                            {
                                this.state.photoAlbum.map((item:string,index:number) =>{
                                    return   <div className="picture_container" >
                                                    <div className="picture_square">
                                                        <div className = 'picture_slot'>
                                                            <img src={item} className="picture_img"  onClick={(e) =>this.openPost(index,e)} />
                                                        </div>
                                                        <div className="picture_hoverMask"></div>    
                                                        <div className="woo-picture-cover"></div>
                                                    </div>
                                                </div>
                                 })
                            }
                            </div>
                            
                        </div>
                    </div>
                    <div style={{margin:8}}></div>
                </div>
                <footer aria-label="138,157,706">
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
                                    <span className='transmit_text'>{this.state.likeNumber}</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </footer>
                {this.state.commentIsOpened&&
                 <PostComment index = {this.props.index} commentList = {this.state.commentList} UserProfile = {this.props.UserProfile} postId = {this.state.postInformation.PostId} postType ={this.state.postType}></PostComment>
                }
            </article>
            {this.state.openPostCard&&<PostCardD pictureId = {this.pictureId} photoAlbum = {this.state.photoAlbum} closePost = {this.closePost} choosePicture = {this.choosePicture} postInformation = {this.state.postInformation} publisherName = {this.props.publisherName} UserProfile = {this.props.UserProfile} commentList = {this.state.commentList} ></PostCardD>}
        </div>           
        );
    } 
} 
    
export default PostCard1;