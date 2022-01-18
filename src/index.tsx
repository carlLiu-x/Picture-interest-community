import 'antd/dist/antd.css';
import React from 'react';
import Navigation from './components/navigation';
import ReactDOM from 'react-dom';
import './css/index.css';
import MainPage from './components/mainPage';
import reportWebVitals from './reportWebVitals';
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

ReactDOM.render(
  <Layout>
    <Navigation/>
    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
      <MainPage />
    </Content>
   
  </Layout>,
  document.getElementById("header"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
 reportWebVitals();
