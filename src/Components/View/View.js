import React from 'react';
import { useEffect,useState,useContext } from 'react';
import { FirebaseContext } from '../../store/FirebaseContext';
import { PostContext } from '../../store/PostContext';

import './View.css';
function View() {
  const [userDetails,setUserDetails]=useState()
  const {postDetails}=useContext(PostContext)
  
  const {firebase}=useContext(FirebaseContext)
  const [state,setState]=useState()
  var value=postDetails
  
  
  if(value){ 
    localStorage.setItem("Name", JSON.stringify(value));}
    
    var txt=JSON.parse(localStorage.getItem('Name'));
    {console.log(txt)}

  if(value){ 
    localStorage.setItem("Nam", JSON.stringify(value.userId));}
    

 
  var val=JSON.parse(localStorage.getItem('Nam'));

  useEffect(()=>{ 
   
    firebase.firestore().collection('user').where('id','==',val).get().then((res)=>{
      res.forEach(doc=>{
        setUserDetails(doc.data())
       })
    })
  },[])
  
 

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={txt.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {txt.price} </p>
          <span>{txt.name}</span>
          <p>{txt.category}</p>
          <span>Tue May 04 2021</span>
        </div>
    { userDetails &&   <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.username}</p>
          <p>{userDetails.phone}</p>
  </div> }
      </div>
    </div>
  );
}
export default View;
