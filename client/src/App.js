
import './App.css';
import {BrowserRouter, Routes,Route}from 'react-router-dom'
import Nav from './pages/Nav';
import Home from './pages/Home';
import Post from './pages/Post';
import Pre from './pages/Pre';
import PrePre from './pages/PrePre';
import ChildCare from './pages/ChildCare';
import Profile from './pages/Profile';
import Register from './pages/Login/Register.js';
import Login from './pages/Login/Login.js';

function App() {
  return (
    <>
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/Post' element={<Post/>}/>
        <Route path='/Pre' element={<Pre/>}></Route>
        <Route path='/PrePre' element={<PrePre/>}></Route>
        <Route path='/ChildCare' element={<ChildCare/>}></Route>
        <Route path='/Profile' element={<Profile/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>


      </Routes>

    </BrowserRouter></>
   
  );
}

export default App;
