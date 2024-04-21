import React, { useContext } from 'react';
import { BsCartX } from 'react-icons/bs';
import propTypes from 'prop-types';

import './CartItem.css';
import formatCurrency from '../../utils/formatCurrency';
import AppContext from '../../context/AppContext';

function CartItem({ data }){

  const { cartItems, setCartItems } = useContext(AppContext);
  const { id, thumbnail, title, price } = data;

  const handleRemoveItem = () => {
    const updatedItems = cartItems.filter((item) => item.id != id);
    setCartItems(updatedItems);
  };
  
  return(
    <section className="cart_item">

      <img src={thumbnail} alt="imagem do produto" className="cart_item_image"/>
      
      <div className="cart_item_content">
        <h3 className="cart_item_title">{title}</h3>
        <h3 className="cart_item_price">{formatCurrency(price, 'BRL')}</h3>

        <button type="button" className="button_remove_item"
          onClick={ handleRemoveItem }>
          <BsCartX />
        </button>
      </div>

    </section>
  );
}

export default CartItem;

CartItem.propTypes = {
  data: propTypes.shape({}),
}.isRequired;
