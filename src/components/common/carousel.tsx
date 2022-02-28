import React from "react";
import "../../css/postCardD.css"
class Carousel extends React.Component<any,any> {
    img:HTMLImageElement = new Image();
    constructor(props:any){
        super(props);
        this.img.src = this.props.photoAlbum[this.props.pictureId];
        this.img.onload = ()=>{
            this.setState({pictureId:this.state.pictureId})
        }
        this.state = {
            photoAlbum:this.props.photoAlbum,
            pictureId:this.props.pictureId
        }
        
    }
    componentWillReceiveProps(nextProps:any) {
        this.setState({pictureId:nextProps.pictureId})
        
    }
    leftMove = ()=>{
        if(this.state.pictureId > 0) {
          this.img = this.state.photoAlbum[this.state.pictureId - 1]
          this.setState({pictureId:this.state.pictureId - 1})
        }
    }
    rightMove = ()=>{
    if(this.state.pictureId < this.state.photoAlbum.length + 1) {
        this.img = this.state.photoAlbum[this.state.pictureId + 1]
        this.setState({pictureId:this.state.pictureId + 1})
    }
    
    }
    render(): React.ReactNode {
        return(
            <div className = "box_item_flex">
                <div className = "viewer_container">
                    <div className = "picture_viewer_container">
                        {this.state.pictureId !=0&&
                            <div className = "fwButtonBox" style ={{width:60,height:60,top:"45%",left:"2%"}}>
                                <i className = "left_arrow_icon" onClick={this.leftMove}></i>
                            </div>}
                        {this.state.pictureId !=this.state.photoAlbum.length -1&&
                            <div className = "fwButtonBox" style ={{width:60,height:60,top:"45%",left:"90%"}}>
                                <i className = "right_arrow_icon" onClick={this.rightMove}></i>
                            </div>}
                        <div style = {{width:"100%",height:"100%",position:"relative",overflow:"auto"}}>
                            <div style = {{width:"100%",height:"100%",userSelect:"none",position:"relative",overflow:"hidden",display:"flex",justifyContent:"center",alignItems:"center"}}>
                                <div className = "picture_box" style = {{width:this.img.width,height:this.img.height,}}>
                                    <img src = {this.state.photoAlbum[this.state.pictureId]} style = {{width:"100%",height:"100%"}}></img>  
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="picture_preview_list">
                        {this.state.photoAlbum.map((item:string,index:number)=>{
                            return(
                                <li className = "preview_item">
                                    <div style ={{position:"absolute",top:0,right:0,left:0,bottom:0}}>
                                    <div className = {item == this.state.photoAlbum[this.state.pictureId]?"preview_choose_border":""}></div>
                                    <img style = {{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"}} src = {item}></img>
                                    </div>
                                </li>
                            )})}
                    </div>
                </div>
            </div>
        )
    }
    
}
export default Carousel