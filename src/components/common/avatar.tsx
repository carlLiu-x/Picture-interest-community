//#####props:
//#####userID:用户ID
//#####avatarSrc:头像图片
//#####使用的时候自己通过style来定义头像大小
//#####通过style来设置头像的height与weight(不设置会报错)
import React, { Component } from "react";
import '../../css/postCard.css';
import {Link} from 'react-router-dom';

class AvatarPost extends React.Component<any,any> {
    constructor(props:any){
        super(props);
        this.state = {
            userID: this.props.userID
        }
    }
    render(): React.ReactNode {
     
        return(
            <a href={"/user/" + this.state.userID}  aria-label={this.props.userID} style = {{color:'inherit',height:this.props.style.height,width:this.props.style.width}}>
                <div className="post_avatar" >
                    <img src={this.props.avatarSrc} className="avatar_img" />
                    <div className="avatar_hoverMask"></div>
                </div>
            </a>
        )    
    }
}
export default AvatarPost;