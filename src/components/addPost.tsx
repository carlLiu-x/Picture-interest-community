import React from 'react';
import "../css/AddPost.css"
import "../css/postCardD.css"
import axios from 'axios';
import EmptyPicture from './addPost_empty';
import MorePicture from './addPost_choosePicture';
import AddComment from './addPost_comment';
import {post} from '../axios/axios';
class AddPost extends React.Component<any,any> {
    content:string = "";
    constructor(props:any){
        super(props);
        this.state = {
            FileList:[],
            imgSrc:"",
            pictureId:-1,
            step:"empty",
            // empty-初始状态 cutPicture-图片裁剪 choose-选择滤镜 comment-添加评论
            
        }
    }
    getLocalTime = () =>{
        let date = new Date();
        let time:string = String(date.getFullYear()) +"-"+String(date.getMonth() + 1)+"-"+String(date.getDate()+" "+ String(date.getHours()) +":"+String(date.getMinutes()) + ":" + String(date.getSeconds()))
        return time;
    }
    getContent = (e:any)=>{
        this.content = e.target.value;
        
    }
    choosePicture = ()=>{
        document.getElementById("choosePicture")?.click()
    }
    nextStep = ()=>{
        switch(this.state.step) {
            case "cutPicture": 
                this.setState({step:"comment"});
            break
            case "choose":
                this.setState({step:"comment"})
            break
            case "comment":
                let userId = Number(localStorage.getItem("uid"));
                let send_data = {
                    imgList: this.state.FileList,
                    contents: this.content,
                    date: this.getLocalTime(),
                    uid: userId,
                    location: "wuhan"                    
                }
                axios({
                    method: 'post',
                    url: '/api/v1/mainPage/send',
                    headers: {
                        'Authorization': "Bearer "+ localStorage.getItem("user_token"),
                        'Content-Type': 'application/json' 
                    },
                    data: send_data
                }).then(res =>{
                    if(res.data.message !="OK") {
                        console.log(res)    
                        window.alert("网络异常，请稍后再试")
                        
                    }else {
                        console.log(res.data)
                        this.props.closeAddPost();

                    }
                })
            break
        }
    }
    backStep = ()=>{
        switch(this.state.step) {
            case "cutPicture":
                this.setState({step:"empty",FileList:[],imgSrc:"",pictureId:-1})
            break
            case "choose":
                this.setState({step:"cutPicture"})
            break
            case "comment":
                this.setState({step:"choose"})
        }
    }

    handleImageChange = (e:any)=>{
        
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.readAsDataURL(file);
        reader.onloadend =()=>{
            let tempArray = this.state.FileList;
            tempArray.push(reader.result);
            this.setState({imgSrc:reader.result,FileList:tempArray,pictureId:tempArray.length - 1,step:"cutPicture"});
        } 
    }
    render(): React.ReactNode {
        return (
            <div className = "AddPost_box">
                <div className ="fwButtonBox" style = {{left:"95%"}}>
                    <i className = "fwCloseButtonIcon" onClick={this.props.closeAddPost}></i>
                </div>
                <div className = "AddPost_box_main_container">
                    <div className = "AddPost_box_main_container_1">
                        <div className = "AddPost_box_main_container_2">
                            <div className = "AddPost_box_main_container_top" style={{height:50}}>
                                
                                <div className = "backIcon_box">
                                    {this.state.step !="empty"&&<div className = "backIcon" onClick={this.backStep}></div>   } 
                                </div>
                                <h1 className = "AddPost_box_title">创建新帖子</h1>
                                
                                <div>
                                {this.state.step !="empty"&&<div className ="nextIcon" onClick={this.nextStep}></div>}
                                </div>
                            </div>
                            <div className="AddPost_read_picture">
                                <div className = "AddPost_read_picture_1">
                                    {this.state.FileList.length == 0?<EmptyPicture choosePicture = {this.choosePicture}></EmptyPicture>: 
                                      <MorePicture photoAlbum = {this.state.FileList} pictureId = {this.state.FileList.length-1} step = {this.state.step} choosePicture = {this.choosePicture}>
                                      </MorePicture>  
                                    }      
                                    {this.state.step == "comment"&&<AddComment getContent = {this.getContent}></AddComment>}
                                       <input type={"file"} style = {{display:'none'}} id = "choosePicture" onChange={this.handleImageChange}></input>
                                </div>
                                {this.state.step =="choose" && 
                                <div>
                                    
                                </div>}
                         
                            </div>
                         </div>  
                    </div>
                </div>
            </div>
        )
    }
}
export default AddPost;