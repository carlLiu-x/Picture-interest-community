import React from 'react';
import './css/Navigation.css'
import {  Input ,Layout, Space} from 'antd';
import HomeURL from './icon/home.png';
import AirplaneURL from './icon/airplane.png';
import AddURL from './icon/add.png';
import CompassURL from './icon/compass.png';
import LoveURL from './icon/love.png';
import UserURL from './icon/user.png';

const { Header } = Layout;
const {Search} = Input;
class Navigation extends React.Component {
 render(): React.ReactNode {
     return (

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
          <input type="image" src = {HomeURL} className = "navigation_icon" title = "主页"></input>
          <input type="image" src ={AirplaneURL} className = "navigation_icon"></input>
          <input type='image' src = {AddURL} className = "navigation_icon"></input>
          <input type='image' src={CompassURL} className="navigation_icon"></input>
          <input type='image' src={LoveURL} className="navigation_icon"></input>
          <input type='image' src={UserURL} className="navigation_icon"></input>
      </Space>
       
    </Header>

     );
 }


}
export default Navigation;