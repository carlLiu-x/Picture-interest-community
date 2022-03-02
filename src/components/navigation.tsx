//导航栏组件
import React from 'react';
import '../css/Navigation.css'
import {  Input ,Layout, Space} from 'antd';
import HomeURL from '../icon/home.png';
import AirplaneURL from '../icon/airplane.png';
import AddURL from '../icon/add.png';
import CompassURL from '../icon/compass.png';
import LoveURL from '../icon/love.png';
import AddPost from './addPost';
import LogoURL from '../icon/logo.png';
import AvatarPost from './common/avatar';
import { url } from 'inspector';
import {get} from '../axios/axios';


const { Header } = Layout;
const {Search} = Input;
class Navigation extends React.Component<any,any> {
  constructor(props:any) {
    super(props);
    let data = {
      UserId:localStorage.getItem("uid")
    }
    get("/api/v1/personalPage/showProfile",data).then(res =>{
      localStorage.setItem("userProfile","/api" + res.data.accountInfo.ProfileUrl);
      this.setState({userProfile: "/api" + res.data.accountInfo.ProfileUrl})

    })
    this.state = {
      addPost:false,
      userProfile:""
    }
  }
  backHome = ()=>{
      document.getElementById('homePage')?.click();
      console.log("click");
  }
  toUserPage = ()=>{
    document.getElementById('userPage')?.click();  
  }
  openAddPost = ()=>{
    this.setState({addPost:true})
  }
  closeAddPost = ()=>{
    this.setState({addPost:false})
  }
  render(): React.ReactNode {
     
    return (
        <div className = "web_top">
          <div className = "web_top_navigation">
            <div className = "web_top_navigation_inner">
              <div className = "web_logo">
                <img  src = {LogoURL} className = "web_logo_picture"></img>
              </div>
              <div className = "web_top_search">
                <input autoCapitalize='none' className = "search_input" placeholder='搜索'></input>

              </div>
              <div className='navigation_choose'>
                {/* <input type = "image" src = {HomeURL} id = "home_icon"></input> */}
                <img src = {HomeURL} className = "navigation_icon" onClick={this.backHome}  title = "主页"></img>
                <img src ={AirplaneURL} className = "navigation_icon"></img>
                <img  src = {AddURL} className = "navigation_icon" onClick={this.openAddPost}></img>
                <img  src={CompassURL} className="navigation_icon"></img>
                <img  src={LoveURL} className="navigation_icon"></img>
                <></>
                <a href = './homepage' style = {{display:'none'}}id = 'homePage'></a>
                <a href = './user' style = {{display:'none'}} id = 'userPage'></a>
                <a href = './edit1' style = {{display:'none'}} id='postPage'> </a>
                <div style={{marginLeft:20,height:30,width:30}}>
                 <AvatarPost style = {{width:30,height:30}} userID = {localStorage.getItem("uid")} avatarSrc = {this.state.userProfile}></AvatarPost>
                </div>           
            </div>
            {this.state.addPost&&<AddPost closeAddPost = {this.closeAddPost}></AddPost>}
              
            </div>
          </div>
        </div>
    //   <div>
    //     <Header id = 'header'style={{ position: 'fixed', zIndex: 1, width: '100%',display:'flex' }}>
    //     <div className="logo">     
    //     </div>
    //     <Search
    //     style={{ width:600,height:31,position:'relative',top:10,left:200,}}
    //     placeholder="input search text"
    //     allowClear
    //     enterButton="Search"
    //     size="large"
    //   //   onSearch={onSearch}
    //   />
       
      
    //   </Header>
   
    // </div>
    
     );
 }


}

export default Navigation;