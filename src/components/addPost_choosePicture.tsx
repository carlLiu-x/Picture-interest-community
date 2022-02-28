import React from "react";
import Carousel from "./common/carousel";
import "../css/AddPost.css"
import "../css/postCardD.css"

class MorePicture extends React.Component<any,any> {
    constructor(props:any) {
        super(props);
        this.state = {
            zoomOpen: false, 
        }
    }
  
    render(): React.ReactNode {
        return(
            <div className = "picture_display">
                <Carousel  photoAlbum = {this.props.photoAlbum} pictureId = {this.props.pictureId}></Carousel>
                {console.log(this.props.pictureId)}
                <div className = "ButtonBox" style = {{left:10}}>
                    <div className = "ButtonIcon"></div>
                </div>
                <div></div>
                <div className = "ButtonBox" style = {{left:"90%"}}>
                    <div className = "ButtonIcon1" onClick={this.props.choosePicture}></div>
                </div>
              
            </div>
        )
    }
}
export default MorePicture;