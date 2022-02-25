//评论的列表，用于评论中嵌套的评论
import Avatar from 'antd/lib/avatar/avatar';
import React from 'react';
import AvatarPost from './common/avatar';
import "../css/postComment.css"
import "../css/postCard.css"




class CommentList extends React.Component<any,any> {
    constructor(props:any) {
        super(props)
        this.state = {
            liked:false,
            
        }
    }
    click_like = ()=>{
        this.setState({liked:!this.state.liked})
    }
    compoent = ()=>{
        console.log("compoent")
    }
    render(): React.ReactNode {
        
    
        return(
            <div style = {{width:"100%",lineHeight:"20px",fontSize:"12px"}}>
            <div style = {{padding:"7px 20px"}}>
                    <div style = {{display:"flex"}}>
                        <AvatarPost avatarSrc = "http://120.27.196.130:8080/images/profile/2/profile_1.jpg" style = {{height:40,width:40}}></AvatarPost>
                        <div className="comment_item">
                            <div className="text" style = {{fontSize:10}}>
                                <a className="avatar_link" style={{color:"#1890ff"}} href="/u/1304552850">
                                    <span title={"123"}>{"ligang"}</span>
                                </a>      
                                :
                                <span>{"这些图片太喜庆了"}</span> 
                            </div>
                            <div className="comment_bottom" style={{fontSize:9}}>
                                <a title="12" href="" className="post_time" >{"2022-02-22 19:23:11"}</a>
                                <footer style ={{width:200}}>
                                    <div style = {{display:"flex"}}>
                                        <div className="bottom_item">
                                            <div className="bottom_item_inner">
                                                <span>
                                                    <i data-v-76c52272="" className="transmit"></i>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="bottom_item">
                                            <div className="bottom_item_inner">
                                                <span>
                                                    <i className="comment" title="评论" onClick={this.compoent}></i>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="bottom_item">
                                            <div className="bottom_item_inner">
                                                <span>
                                                    <i className={this.state.liked?"liked":"like"} onClick={this.click_like} title = "点赞"></i>
                                                    <span className='transmit_text'>245</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </footer>
                            </div>
                            <div className = "text" style = {{display:"flex"}}>
                                <a className="avatar_link" style={{color:"#1890ff",marginRight:"4px"}} href="/u/1304552850">
                                    <span title={"123"}>{"ligang"}</span>
                                </a>   
                                 等人
                                <div style = {{color:"#1296db",cursor:"pointer",marginLeft:"4px"}}>{"共2条回复"}</div>
                            </div>
                        </div>
                    </div>
                    <div style ={{margin:"6px 0 2px 44px"}}></div>
                
            </div>
            </div>
        )
    }
    
}
export default CommentList;