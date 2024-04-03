import React,{useState, useEffect} from 'react';

import './Products.css';
import fetchProducts from '../../api/fetchProducts';

function Products(){
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts('oculos').then((response) => {
      setProducts(response);
    });
  }, []);

  return(
    <section className="products container">
      {
        products.map((product) => <p key={product.title}>{product.title}</p>)
      }
    </section>
  );
}

export default Products;
