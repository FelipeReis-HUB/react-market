import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';

import './SearchBar.css';

function SearchBar(){

  const [searchValue, setSearchValue] = useState('');
  
  return(
    <form className="search-bar">
      <input type="search" placeholder="Buscar Produtos" className="search_input" required
        value={searchValue} onChange={ ({target}) => setSearchValue(target.value)}/>

      <button type="submit" className="search_button">
        <BsSearch/>
      </button>
    </form>
  );
}

export default SearchBar;