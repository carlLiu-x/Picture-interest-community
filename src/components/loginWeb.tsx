
import { Layout } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import EditPage from './editPage';
import Log from './log';
import MainPage from './mainPage';
import Navigation from './navigation';
import UserPage from './userPage';


class LoginWeb extends React.Component {
    render(): React.ReactNode {
        return (
        <Layout>
            <Navigation></Navigation>
            <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 ,marginBottom: '25%'}}>
            <Routes>
                <Route path='/n/homepage' element={<MainPage></MainPage>}></Route>
                <Route path='/edit' element={<EditPage></EditPage>}></Route>
                <Route path='/user/:user' element={<UserPage></UserPage>}></Route>
            </Routes>
            </Content>
        </Layout>
            
        )
    }
}
export default LoginWeb