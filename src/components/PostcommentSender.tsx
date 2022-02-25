import React, { createRef } from 'react';
import '../css/postComment.css';
import { post } from '../axios/axios';
import AvatarPost from './common/avatar';






class PostCommentSender extends React.Component<any,any>{
    commentSendJudge:boolean = false;
    modal: React.RefObject<unknown>;
    constructor(props:any){
      super(props);
      this.modal = createRef();
      this.state = {
        inputFocus:false,
        transmitFocus:false,
        commentText:"",
      };
    }
    //节流处理
    throttle = function(func:any,delay:number)
    {
      let prev = Date.now();
      return function(this:any){
        let context = this;
        let args = arguments;
        let now = Date.now();
        if (now - prev >= delay) {
          func.apply(context,args);
          prev = Date.now()
        }
      }
    }
    //防抖处理
    debounce =  function(fn: any, t: number) {
      let timeId: any = null
      const delay = t || 500
      return function (this: any, ...args: any) {
        if (timeId) {
          clearTimeout(timeId)
        }
        timeId = setTimeout(() => {
          timeId = null
          fn.apply(this, args)
        }, delay)
      }
    }
    
    like = ()=>{    
      this.setState({commentLike:this.state.commentLike + 1,likeAction:'liked',commentDislike:this.state.commentDislike -1});
    }
  
    handlechange = (e:any)=>{
      this.setState({value:e.target.value})
    }
    dislike = ()=>{
      this.setState({commentLike:this.state.commentLike - 1 ,likeAction:'disliked',commentDislike:this.state.commentDislike + 1});
    }
    componentDidMount(){
    }
    comment = ()=>{
      this.commentSendJudge = !this.commentSendJudge
    }
    changeInputStyle = ()=>{
      this.setState({inputFocus:true})
    }
    recoverInputStyle = ()=>{
      this.setState({inputFocus:false})
    }
    changeTransmitStyle = ()=>{
      this.setState({transmitFocus:!this.state.transmitFocus})
    }
    readTextArea = (e:any)=>{
      this.setState({commentText:e.target.value})
    }
    postComment =()=>{
      
      let data = {
        PostId: this.props.postId,
        PostType: this.props.postType,
        UserId: localStorage.getItem("uid"),
        Content: this.state.commentText,
        ParentId: -1
      }
      post("/api/v1/mainPage/insertComment",data).then((res) =>{
        console.log("result")
        console.log(res)
      })
    }
    render(): React.ReactNode {
        
        return(
          
          <div style = {{backgroundColor:"#ffffff"}}>
            <div className="comment_blank"></div>
            <div style = {{paddingTop:"10px"}}>
              <div style = {{display:'flex',margin:"0 20px"}}>
                <AvatarPost style = {{height:40,width:40}} avatarSrc = {this.props.UserProfile}></AvatarPost>
                <div className="comment_box">
                  <div>
                    <div>
                      <div className={this.state.inputFocus?"comment_input_box_focus":"comment_input_box"}>
                        <textarea style={{height:"auto"}}placeholder="发布你的评论" className="comment_input" onFocus={this.changeInputStyle} onBlur = {this.recoverInputStyle} onChange = {this.debounce(this.readTextArea,1000)}></textarea>
                      </div>
                    </div>
                    <div style = {{margin:"10px 0"}}>
                      <div style = {{alignItems:"center",display:"flex"}}>
                        <div style = {{margin: "0 0 0 -8px"}}>
                          <div className="emotion_block">
                            <div className="emotion_box">
                              <script src = '../iconfont.js'></script>
                              <i className="emotion" title="表情"></i>
                            </div>
                          </div>
                        </div>
                        <div style = {{alignItems:"center",flex:1}}>
                          <label style = {{position:"relative",top:1,marginLeft:8}}>
                            <input type="checkbox" className="checkbox_input" />
                            <span className={this.state.transmitFocus?"checkbox_shadow_checked":"checkbox_shadow"} onClick={this.changeTransmitStyle}>
                              {this.state.transmitFocus&&<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className="checkbox_icon"><path fill="currentColor" d="M2.348 7.832a.667.667 0 10-.939.947l3.89 3.853c.26.258.678.258.938 0l8.684-8.603a.667.667 0 00-.939-.947L5.768 11.22l-3.42-3.388z"></path></svg>}
                            </span>
                            <span className="checkbox_text">同时转发</span>
                          </label>
                        </div>
                        <button className={this.state.commentText !=""?"button_comment":"button_disabled"} disabled ={this.state.commentText !=""?false:true} onClick={this.postComment}>                          
                            <span>评论</span>
                        </button>
                      </div>
                    </div>
                    <div className="wbpro-pos">
                      <div>
                        <div className="woo-pop-wrap Emoticon_box1_14igs">
                          <span className="woo-pop-ctrl"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
               
        );
    }
}

export default PostCommentSender