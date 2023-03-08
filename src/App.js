import React from 'react';
import RowPost from './Components/RowPost/RowPost';
import "./App.css"
import { useState } from 'react';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
function App() {
 
  return (
    <div className="app">
     <NavBar/>
     <Banner/>
     <RowPost/>
    </div>
  );
}

export default App;