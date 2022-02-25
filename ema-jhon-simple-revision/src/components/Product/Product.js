import React from 'react';
import './Product.css'

const Product = (props) => {
  // console.log(props);
  const {name, img, seller, price, stock, star} = props.product;
  
  return (
    <div className='product'>
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h1 className='product-name'>Name: {name}</h1>
        <h3>Price: {price}</h3>
        <h4>By: {seller}</h4>
        <h5>Star: {star}</h5>
        <p>In Stock: {stock}</p>
        <button 
        onClick={() => props.handleAddToCart(props.product)}
        className='btn-regular'>Add to Cart</button>
      </div>
      
     
    </div>
  );
};

export default Product;