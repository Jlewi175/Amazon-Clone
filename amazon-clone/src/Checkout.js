import React from 'react'
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
function Checkout() {

    const [{cart}] = useStateValue();
  return (
    <div className="checkout">
     <img className="checkout_ad" src = "https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2023/BFCM/BF/CM_Desktop_ShortHero_EN_1500x200.jpg" alt ="checkout_ad"/>
        {cart?.length === 0 ? (
            <div>
                <h2>Shopping Cart Empty</h2>
                </div>
        ):(
            <div>
            <h2 className="checkout_title">Shopping Cart</h2>
            {cart.map(item =>(
                <CheckoutProduct
                id = {item.id}
                title = {item.title}
                image = {item.image}
                price = {item.price}
                rating = {item.rating}
                />
            ))}
    </div>
        )}

    </div>
  );
}

export default Checkout;
