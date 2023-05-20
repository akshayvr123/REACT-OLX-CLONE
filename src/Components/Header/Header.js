import React, { useContext, useEffect, useState } from 'react';

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext, FirebaseContext } from '../../store/FirebaseContext';
import { useNavigate } from 'react-router-dom';
import { productContext } from '../../store/ProductContext'
import { productssContext } from '../../store/ProductssContext';

function Header() {
  
  const navigate = useNavigate()
  const {user}=useContext(AuthContext)
  const {firebase}=useContext(FirebaseContext)
  const {products,setProducts}=useContext(productContext)
  const {product}=useContext(productssContext)
 {console.log(user);}

  
 const  filterNames=e=>{

     const search=e.target.value.toLowerCase()
     const filterNames=product.filter(products=>products.name.toLowerCase().includes(search))
     setProducts(filterNames)
     }

   const  filterCategory=e=>{

    const search=e.target.value.toLowerCase()
    const filterNames=product.filter(productss=>productss.category.toLowerCase().includes(search))
    setProducts(filterNames)
    
  }

  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input onChange={(e)=>{filterCategory(e)}} placeholder='category' type="text" />
          
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input onChange={(e)=>{
              filterNames(e) 
            }}
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          <span onClick={()=>{navigate('/signup')}} className='signup'>{user ? "":"Signup"}</span>
          <span className='user'  onClick={()=> {user ? navigate('/profile'):navigate('/login')} }>{user ? user.displayName : 'Login'}</span>
          {user && <span className='user'  onClick={()=>{
            firebase.auth().signOut()
            navigate('/login');
          }}>  LogOut</span>}
          <hr />
        </div>

        <div onClick={()=>{
               navigate('/create')
            }} className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span >SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
