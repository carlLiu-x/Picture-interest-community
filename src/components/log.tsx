import React, { Component } from 'react';
import { Route, Routes} from 'react-router-dom'
import Login from './login'
import Logon from './logon'


export class Log extends Component {
  render() {
    return(
        <div>
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Logon />} />
        </Routes> 
        </div>
    );
  }
}

export default Log;
