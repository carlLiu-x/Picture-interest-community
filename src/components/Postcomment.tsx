import React from "react";
import PostCommentSender from "./PostcommentSender";
import CommentList from "./postCommentList";
import "../css/postComment.css"


class PostComment extends React.Component<any,any> {
    constructor(props:any) {
        super(props);
        this.state = {
            commentList:this.props.commentList,
            mode:true
        }
    }
    chooseMod = (e:any)=>{
        if(e.target.className == "item") {
            this.setState({mode:!this.state.mode})
        } 
    }
    render(): React.ReactNode {
        return(
            <div style ={{display:"flex",flexDirection:"column"}}>
               <PostCommentSender index = {this.props.index} UserProfile = {this.props.UserProfile} userId = {localStorage.getItem("uid")} postId = {this.props.postId} postType = {this.props.postType}></PostCommentSender>
               <div style = {{margin:"10px 20px 0 0",borderBottom:"1px solid",color:"#f9f9f9"}}></div>
                <div className = "comment_middle">
                    <div className="commentType">
                        <div className={this.state.mode?"item_curr":"item"} onClick={this.chooseMod}>按热度</div>
                        <div className={this.state.mode?"item":"item_curr"} onClick={this.chooseMod}>按时间</div>
                    </div>
                </div>
                
               {this.state.commentList.map((item:any,index:number) =>{
                  return <CommentList commentInformation = {item} commentId = {index}></CommentList>
               })}
            </div>
        );
    } 
}
export default PostComment;