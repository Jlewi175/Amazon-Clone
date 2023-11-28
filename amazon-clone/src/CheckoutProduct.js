import React from 'react'
import "./CheckoutProduct.css";
import { useStateValue } from './StateProvider';

function CheckoutProduct({id, title,image,price,rating}) {
const [{basket},dispatch] = useStateValue();

console.log(id,title,image,price,rating)
    const removeFromBasket = ()=>{
        dispatch({
            type:"REMOVE_FROM_CART",
            id: id,

        })
 }
    return (
    <div className="checkoutProduct">
      <img className="checkoutProduct_image" src = {image} alt =""/>
      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <p className="checkoutProduct_price">
            <small>$</small>
            <strong>{price}</strong>
        </p>
        <div className="checkoutProduct_rating">
        {
        Array(rating).fill().map((_, i)=>(
            <p>*</p>
        ))
        }
      </div>
      </div>

      <button onclick = {removeFromBasket}>Remove from Cart</button>

    </div>
  );
}

export default CheckoutProduct;
