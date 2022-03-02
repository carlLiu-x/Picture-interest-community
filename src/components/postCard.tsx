//帖子的预览界面
//输出 PostCard
import React,{useState} from 'react';
import '../css/mainPage.css';
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import {Image} from 'antd';
import '../css/postCard.css';
import PostCardD from './postCard_detailed';


const { Meta } = Card;

class PostCard extends React.Component<any,any> {
  childVisible:boolean = false;
  public childRef:any = React.createRef();  
  constructor(props:any){
        super(props);
        this.state = {
          isActive : false,
          postInformation:this.props.postInformation
        }
       

    }

    render(): React.ReactNode {
      console.log(this.props)
        return(
          <div>
            {this.props.location.query}
          </div>
      
        );
    }
    showModal = () =>{
      this.childRef.setVisible(this.state.postInformation);
    }
    onChildRef = (child:any) =>{
      this.childRef = child;
    }
    changeVisible =() =>{
      this.childVisible = !this.childVisible
      console.log(this.childVisible);
    }
  } 
    
export default PostCard;