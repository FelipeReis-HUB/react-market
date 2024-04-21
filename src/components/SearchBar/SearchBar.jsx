import React, { useState, useContext } from 'react';
import { BsSearch } from 'react-icons/bs';
import fetchProducts from '../../api/fetchProducts';

import './SearchBar.css';
import AppContext from '../../context/AppContext';

function SearchBar(){

  const [searchValue, setSearchValue] = useState('');
  const {setLoading, setProducts} = useContext(AppContext);

  const handleSearch = async (event) => {
    event.preventDefault();
    setLoading(true);
    const products = (await fetchProducts(searchValue));
    setProducts(products);
    setLoading(false);
    setSearchValue('');
  };
  
  return(
    <form className="search-bar" onSubmit={handleSearch}>
      <input type="search" placeholder="Buscar Produtos" className="search_input" required
        value={searchValue} onChange={ ({target}) => setSearchValue(target.value)}/>

      <button type="submit" className="search_button">
        <BsSearch/>
      </button>
    </form>
  );
}

export default SearchBar;
