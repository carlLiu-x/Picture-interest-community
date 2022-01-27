import 'antd/dist/antd.css';
import React from 'react';
import Navigation from './components/navigation';
import ReactDOM from 'react-dom';
import './css/index.css';
import reportWebVitals from './reportWebVitals';
import { Layout, Menu, Breadcrumb } from 'antd';
import App from './App';


const { Header, Content, Footer } = Layout;

ReactDOM.render(
 
     <App></App>
   ,
  document.getElementById("body"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
 reportWebVitals();
