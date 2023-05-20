import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Heart from '../../assets/Heart';
import { FirebaseContext } from '../../store/FirebaseContext';
import { PostContext } from '../../store/PostContext';
import './Post.css';
import { productContext } from '../../store/ProductContext'
import { productssContext } from '../../store/ProductssContext';

function Posts() {
  const navigate = useNavigate()
  const { firebase } = useContext(FirebaseContext)
  //const [products,setProducts]=useState([])
  const { setPostDetails } = useContext(PostContext)
  const { products, setProducts } = useContext(productContext)
  const { product, setProduct } = useContext(productssContext)

  useEffect(() => {
    firebase.firestore().collection('product').get().then((snapshot) => {
      const allPost = snapshot.docs.map((product) => {
        return {
          ...product.data(),
          id: product.id
        }
      })
      setProducts(allPost)
      setProduct(allPost)

    })
  }, [])

  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>

        <div className="cards">
          {products && products.map((product) => {

            return <div className="card" onClick={() => {
              setPostDetails(product)
              { console.log(product) }
              
            }}>

              <div class='heart' className="favorite">
                <Heart ></Heart>
              </div>
              <div onClick={()=>{
                navigate('./view')
              }} className="image">
                <img src={product.url} alt="" />
              </div>
              <div className="content">
                <p className="rate">&#x20B9; {product.price}</p>
                <span className="kilometer">{product.category}</span>
                <p className="name"> {product.name}</p>
              </div>
              <div className="date">
                <span>{product.createdAt}</span>
              </div>
            </div>
          })
          }

        </div>

      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
