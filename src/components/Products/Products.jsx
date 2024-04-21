import React,{useEffect, useContext} from 'react';
import AppContext from '../../context/AppContext';

import './Products.css';
import fetchProducts from '../../api/fetchProducts';
import ProductCard from '../ProductCard/ProductCard';
import Loading from '../Loading/Loading';

function Products(){
  const {loading, setLoading, products, setProducts} = useContext(AppContext);

  useEffect(() => {
    fetchProducts('iphone').then((response) => {
      setProducts(response);
      setLoading(false);
    });
  }, []);

  return(
    (loading && <Loading />) || (
      <section className="products container">
        {products?.map((product) => <ProductCard key={product.id} data={product}/>)}
      </section>
    )
  );
}

export default Products;
