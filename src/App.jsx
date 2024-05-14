import React from 'react';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Provider from './context/Provider';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';
import ScrollButton from './components/ScrollButton/ScrollButton';

function App() {
  return (
    <div>
      <Provider>
        <Header/>
        <ScrollButton/>
        <Products/>
        <Cart/>
        <Footer/>
      </Provider>
    </div>
  );
}

export default App;
