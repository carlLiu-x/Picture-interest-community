//导航栏组件
import React from 'react';
import '../css/Navigation.css'
import {  Input ,Layout, Space} from 'antd';
import HomeURL from '../icon/home.png';
import AirplaneURL from '../icon/airplane.png';
import AddURL from '../icon/add.png';
import CompassURL from '../icon/compass.png';
import LoveURL from '../icon/love.png';
import UserURL from '../icon/user.png';
import AddPost from './addPost';

const { Header } = Layout;
const {Search} = Input;
class Navigation extends React.Component<any,any> {
  constructor(props:any) {
    super(props);
    this.state = {
      addPost:false,
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
      <div>
        <Header id = 'header'style={{ position: 'fixed', zIndex: 1, width: '100%',display:'flex' }}>
        <div className="logo">     
        </div>
        <Search
        style={{ width:600,height:31,position:'relative',top:10,left:200,}}
        placeholder="input search text"
        allowClear
        enterButton="Search"
        size="large"
      //   onSearch={onSearch}
      />
        <Space size={55}>
            {/* <input type = "image" src = {HomeURL} id = "home_icon"></input> */}
            <input type="image" src = {HomeURL} className = "navigation_icon" onClick={this.backHome}  title = "主页"></input>
            <input type="image" src ={AirplaneURL} className = "navigation_icon"></input>
            <input type='image' src = {AddURL} className = "navigation_icon" onClick={this.openAddPost}></input>
            <input type='image' src={CompassURL} className="navigation_icon"></input>
            <input type='image' src={LoveURL} className="navigation_icon"></input>
            <input type='image' src={UserURL} className="navigation_icon" onClick={this.toUserPage}></input>
            <a href = './homepage' style = {{display:'none'}}id = 'homePage'></a>
            <a href = './user' style = {{display:'none'}} id = 'userPage'></a>
            <a href = './edit1' style = {{display:'none'}} id='postPage'> </a>
        </Space>
      
      </Header>
      {this.state.addPost&&<AddPost closeAddPost = {this.closeAddPost}></AddPost>}
    </div>
     );
 }


}

export default Navigation;