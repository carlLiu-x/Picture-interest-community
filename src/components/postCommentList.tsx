//评论的列表，用于评论中嵌套的评论
import React from 'react';
import {Comment, Avatar,Form,Button,List,Input} from 'antd';
import Item from 'antd/lib/list/Item';

const {TextArea} = Input;

const CommentList = ({comments}:any) =>{
    return(
        <List>
            dataSource = {comments}
            itemLayout="horizontal"
            {/* renderItem = {(item:any)=>(

            )} */}
            
        </List>
    )
}