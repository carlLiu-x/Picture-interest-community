//路由控制文件
//author:刘昌镐  输出：App组件用于路由控制
import React from 'react';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import MainPage from './components/mainPage';
import PostCardD from './components/postCard_detailed';
import EditPage from './components/editPage';
import UserPage from './components/userPage';

class App extends React.Component{
    render(): React.ReactNode {
        return(
         
            <BrowserRouter>
                <Routes>
                    <Route path='/homepage' element={<MainPage></MainPage>}/>
                    <Route path='/' element={<PostCardD></PostCardD>}></Route>
                    <Route path='/edit' element={<EditPage></EditPage>}></Route>
                    <Route path='/user' element={<UserPage></UserPage>}></Route>
                </Routes>
            </BrowserRouter>            
        )
    }
}
 export default App
