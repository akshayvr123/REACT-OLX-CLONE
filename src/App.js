import React,{useEffect,useContext} from 'react';
import './App.css';
import {
  Route,Routes,Link, useNavigate
} from "react-router-dom";
import Signup from './Pages/Signup'
import Home from './Pages/Home';
import Login from './Pages/Login'
import Create from './Components/Create/Create';
import { AuthContext, FirebaseContext } from './store/FirebaseContext';
import ViewPost from './Pages/ViewPost';
import Posts from './store/ProductContext';
import Post from './store/PostContext'
import Postss from './store/ProductssContext';
import Profile from './Components/Profile/Profile'


function App() {
  
  const {setUser}=useContext(AuthContext)
  const {firebase}=useContext(FirebaseContext)
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
  })

  return (
    <div>
      <Postss>
      <Posts>
      <Post>
     
        <Routes> 
            <Route path ='/' element={<Home></Home>}></Route>
            <Route path='/signup' element={<Signup></Signup>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/create' element={<Create></Create>}></Route>
            <Route path='/view' element={<ViewPost></ViewPost>}></Route>
            <Route path='/profile' element={<Profile></Profile>}></Route>
       
        </Routes>
        </Post>
        </Posts>
        </Postss>
    </div>
  );
}

export default App;
