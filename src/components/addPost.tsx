import React from 'react';
import "../css/AddPost.css"
import "../css/postCardD.css"
import axios from 'axios';
import EmptyPicture from './addPost_empty';
import MorePicture from './addPost_choosePicture';
import AddComment from './addPost_comment';

class AddPost extends React.Component<any,any> {
    
    constructor(props:any){
        super(props);
        this.state = {
            FileList:[],
            imgSrc:"",
            pictureId:-1,
            step:"empty"
            // empty-初始状态 cutPicture-图片裁剪 choose-选择滤镜 comment-添加评论
        }
    }
    choosePicture = ()=>{
        document.getElementById("choosePicture")?.click()
    }
    nextStep = ()=>{
        switch(this.state.step) {
            case "cutPicture": 
                this.setState({step:"choose"});
            break
            case "choose":
                this.setState({step:"comment"})
            break
            case "comment":
                //像后端提交图片
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
        console.log(e.target.value)
        let reader = new FileReader();
        let file = e.target.files[0];
        console.log(file);
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
                                    {this.state.step == "comment"&&<AddComment></AddComment>}
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