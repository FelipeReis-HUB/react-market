import React, { useContext } from 'react';
import './Cart.css';
import CartItem from '../CartItem/CartItem';
import AppContext from '../../context/AppContext';
import formatCurrency from '../../utils/formatCurrency';

function Cart(){
  const { cartItems, isCartVisible } = useContext(AppContext);

  const totalPrice = cartItems.reduce((acc, item) => {
    return item.price + acc;
  }, 0);
  
  return(
    <section className={`cart ${isCartVisible ? 'cart--active' : ''}`}>
      <div className="cart_items">
        {cartItems?.map((cartItem) => (<CartItem key={cartItem} data={cartItem}/>))}
      </div>

      <div className="cart_resume">{formatCurrency(totalPrice, 'BRL')}</div>
      
    </section>
  );
}

export default Cart;