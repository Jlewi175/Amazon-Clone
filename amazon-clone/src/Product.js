import React from 'react'
import "./Product.css"


function Product(id, title, image, rating, price) {
  return (
    <div className="product">
        <div className="product_info">
        <p>title</p>
      <p className="product_price">
        <small>$</small>
        <strong>{price}</strong>
      </p>
      <div className="product_rating">
        {
        Array(rating).fill().map((_)=>(
            <p>*</p>
        ))
        }
      </div>
      </div>

    <img src = {image} alt= "product"/>
      <button>Add to cart</button>
    </div>
  );
}

export default Product;
