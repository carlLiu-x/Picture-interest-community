//路由控制文件
//author:刘昌镐  输出：App组件用于路由控制
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './components/mainPage';
import Log from './components/log';
import PostCardD from './components/postCard_detailed';
import PostPicture from './components/postPicture';
import EditPage from './components/editPage';
import UserPage from './components/userPage';
import 'antd/dist/antd.css';
import Navigation from './components/navigation';
import ReactDOM from 'react-dom';
import './css/index.css';
import reportWebVitals from './reportWebVitals';
import { Layout, Menu, Breadcrumb } from 'antd';
import PostCard from './components/postCard';
import LoginWeb from './components/loginWeb';
const { Header, Content, Footer } = Layout;

class App extends React.Component {
    render(): React.ReactNode {
        return (
        <BrowserRouter>
        <Log></Log>
     
            <Routes>
                <Route path='/homepage' element={
                     <Layout>
                     <Navigation></Navigation>
                     <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 ,marginBottom: '25%'}}>
                <MainPage></MainPage>
                </Content>
                </Layout>
                    }></Route>
                <Route path='/edit' element={
                     <Layout>
                     <Navigation></Navigation>
                     <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 ,marginBottom: '25%'}}>
                <EditPage></EditPage>
                </Content>
                </Layout>
                }></Route>
                <Route path='/user/:user' element={
                     <Layout>
                     <Navigation></Navigation>
                     <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 ,marginBottom: '25%'}}>
                <UserPage></UserPage>
                </Content>
                </Layout>
                }></Route>
            </Routes>
            
            
        </BrowserRouter>
                

            
        )
    }
}
export default App