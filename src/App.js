import React from 'react';
import { Firebase } from './firebase/config';
import { useState } from 'react';


function App() {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  return (
    <div className="app">
      <form>
        <label htmlFor="">Email</label>
        <input  onChange={(event) =>
          setEmail(event.target.value)} type="email" />
        <label htmlFor="">Password</label>
        <input  onChange={(event) =>
          setPassword(event.target.value)}  type="password" />
      </form>
     <button onClick={()=>{

Firebase.auth().createUserWithEmailAndPassword(email,password)
.then((userCredential) => {
  // Signed Up
  var user = userCredential.user;
  
  Firebase.firestore().collection('Products').get().then((snap)=>{
       console.log(snap)
  })
  // ...
})
.catch((error) => {
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log(errorCode)
  console.log(errorMessage)
});

           
     }}>Click</button>
         
    </div>
  );
}

export default App;
