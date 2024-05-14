import React from 'react';
import SearchBar from '../SearchBar/SearchBar';

import Image from './../../utils/logo.png';
import './Header.css';
import CartButton from '../CartButton/CartButton';
import AccountButton from '../AccountButton/AccountButton';

function Header(){
  return(
    <header className="header">
      <div className="container">

        <div className="left-container">
          <img src={Image} className="logo-image"/>
          <SearchBar/>
        </div>
        
        <div className="buttons-container">
          <CartButton/>
          <AccountButton/>
        </div>
        
      </div>
    </header>
  );
}

export default Header;
