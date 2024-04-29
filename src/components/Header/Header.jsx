import React from 'react';
import SearchBar from '../SearchBar/SearchBar';

import './Header.css';
import CartButton from '../CartButton/CartButton';
import AccountButton from '../AccountButton/AccountButton';

function Header(){
  return(
    <header className="header">
      <div className="container">
        
        <SearchBar/>

        <div className="buttons-container">
          <CartButton/>
          <AccountButton/>
        </div>
        
      </div>
    </header>
  );
}

export default Header;
