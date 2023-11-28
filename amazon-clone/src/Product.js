import React from 'react'
import "./Product.css"
import { useStateValue } from './StateProvider';


function Product(id, title, image, rating, price) {
 const [{}, dispatch] = useStateValue();

    const addToCart = () => {
        //Add items to cart
         dispatch({
            type:"ADD_TO_CART",
            item:{
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
  };
  
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
      <button onClick = {addToCart}>Add to cart</button>
    </div>
  );
}

export default Product;
