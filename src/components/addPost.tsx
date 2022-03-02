import React from 'react';
import "../css/AddPost.css"
import "../css/postCardD.css"
// import ReadPicture from './addPost_readPicture';

class AddPost extends React.Component<any,any> {
    constructor(props:any){
        super(props);
        this.state = {

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
                            <div className = "AddPost_box_main_container_top">
                                <div></div>    
                                <h1 className = "AddPost_box_title">创建新帖子</h1>
                                <div></div>
                            </div>
                            <div className="AddPost_read_picture">
                            </div>
                         </div>  
                    </div>
                </div>
            </div>
        )
    }
}
export default AddPost;