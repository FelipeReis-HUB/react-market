import React from 'react';
import './ProductCard.css';
import propTypes from 'prop-types';
import formatCurrency from '../../utils/formatCurrency';

import { BsCartPlus } from 'react-icons/bs';

function ProductCard({data}){

  const {title, thumbnail, price} = data;

  return(
    <section className="product-card">

      <img src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')}
        alt="product image" className="card_image"/>

      <div className="card_infos">
        <h2 className="card_price">{formatCurrency(price, 'BRL')} </h2>
        <h2 className="card_title">{title}</h2>
      </div>

      <button type="button" className="button_add_cart">
        <BsCartPlus />
      </button>

    </section>
  );
}

export default ProductCard;

ProductCard.propTypes = {
  data: propTypes.shape({}),
}.isRequired;
