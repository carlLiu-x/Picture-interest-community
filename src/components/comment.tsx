import React,{createElement} from 'react';
import { Comment,Avatar,Collapse,Tooltip,Form,Button,List,Input } from "antd";
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';

const { TextArea } = Input;

// const CommentList = ({comments}) => (
//     <List
//       dataSource={comments}
//       header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
//       itemLayout="horizontal"
//       renderItem={props => <Comment {...props} />}
//     />
//   );
  
//   const Editor = ({ onChange, onSubmit, submitting, value }) => (
//     <>
//       <Form.Item>
//         <TextArea rows={4} onChange={onChange} value={value} />
//       </Form.Item>
//       <Form.Item>
//         <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
//           添加评论
//         </Button>
//       </Form.Item>
//     </>
//   );

class PostComment extends React.Component<any,any>{
    constructor(props:any){
        super(props);
        this.state = {
            commentLike: 10,
            likeAction: 'liked',
            commentDislike:10,
            value:''
        };
    }
    like = ()=>{
        
        this.setState({commentLike:this.state.commentLike + 1,likeAction:'liked',commentDislike:this.state.commentDislike -1});
        
    }
    handleSubmit =() =>{
        //处理提交函数
    }
    handlechange = (e:any)=>{
        this.setState({value:e.target.value})
    }
    dislike = ()=>{
        this.setState({commentLike:this.state.commentLike - 1 ,likeAction:'disliked',commentDislike:this.state.commentDislike + 1});
    }

    render(): React.ReactNode {
        return(
            <div>

            
            <Comment
            actions={[ <Tooltip key="comment-basic-like" title="Like">
            <span onClick={this.like}>
              {createElement(this.state.likeAction === 'liked' ? LikeFilled : LikeOutlined)}
              <span className="comment-action">{this.state.commentLike}</span>
            </span>
          </Tooltip>,
          <Tooltip key="comment-basic-dislike" title="Dislike">
            <span onClick={this.dislike}>
              {React.createElement(this.state.likeAction === 'disliked' ? DislikeFilled : DislikeOutlined)}
              <span className="comment-action">{this.state.commentDislike}</span>
            </span>
          </Tooltip>,
          <span key="comment-basic-reply-to">Reply to</span>,]}
            author={<a>Han Solo</a>}
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
            content={
              <p>
                We supply a series of design principles, practical patterns and high quality design
                resources (Sketch and Axure).
              </p>
            }
          >
              
          </Comment>
          <hr />
          </div>
    
        );
    }
}

export default PostComment