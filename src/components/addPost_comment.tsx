import React from "react";
import AvatarPost from "./common/avatar";

class AddComment extends React.Component<any,any> {
    constructor(props:any) {
        super(props);
        this.state = {

        }
    }
    render(): React.ReactNode {
        return(
            <div className = "filter_box">
                <div className = "filter_box_inner">
                    <div className = "Avatar_list">
                        <AvatarPost style = {{height:20,width:20}} avatarSrc = "../icon/add.png"></AvatarPost>
                        <div className = "avatar_name">lc88888888</div>
                    </div>
                    <div className = "commentArea">
                        <div className = "commentArea">
                            <textarea placeholder = "添加说明..."className = "comment_textArea"></textarea>
                        </div>
                    </div>
                    <div className = "position_box">
                        <label className = "position_input">
                            
                        </label>
                    </div>
                </div>
            </div>
        )
    }
}
export default AddComment;