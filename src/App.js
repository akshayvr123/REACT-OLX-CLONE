import React from 'react';
import { useState } from 'react';
import About from './Container/About';
import Profile from './Container/Profile';
import NotFound from './Container/NotFound';
import {
  Route,Routes,Link, useNavigate
} from "react-router-dom";

function App() {
  const navigate = useNavigate();
  return (
    <div className="app">
      <button onClick={() => navigate('/about')}>Click</button>
      <ul>
        <li> <Link to='/about'>Home</Link> </li>
        <li> <Link to='/profile'>Profile</Link> </li>
       
      </ul>
         <Routes>
         <Route path 
            ='*' element={<NotFound></NotFound>}></Route>
            <Route path 
            ='/about' element={<About></About>}></Route>
             <Route path 
            ='/profile' element={<Profile></Profile>}></Route>
         </Routes>
         
    </div>
  );
}

export default App;
