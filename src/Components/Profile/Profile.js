import React, { useContext, useState,useEffect } from 'react'
import './Profile.css'
import { AuthContext } from '../../store/FirebaseContext';
import { FirebaseContext } from '../../store/FirebaseContext';

function Profile() {
  const {user}=useContext(AuthContext)
  const {firebase}=useContext(FirebaseContext)
  const[state,setState]=useState([])
     console.log(user)

     useEffect(()=>{ 
   
      firebase.firestore().collection('user').where('id','==',user.uid).get().then((res)=>{
        res.forEach(doc=>{
          setState(doc.data())
         })
      })
    },[])
   
 
    return (
      
      <div className="profile-page">
      <img src={state.url} className="profile-picture" />
      <h2>{user.displayName}</h2>
      <p>Email: {user.email}</p>
      <p>Phone number: {state.phone}</p>
      <p>Joined in: {user.metadata.creationTime}</p>
     
    </div>
    )
  }
     
    

export default Profile
