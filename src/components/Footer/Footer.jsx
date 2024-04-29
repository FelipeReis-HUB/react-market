import React, {useContext} from 'react';
import AppContext from '../../context/AppContext';

import './Footer.css';
import Image from './../../utils/profile-me.jpeg';

import { FaGithubSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { IoMailSharp } from 'react-icons/io5';

function Footer() {
  const {loading} = useContext(AppContext);

  return (
    (loading ? <div/> : 
      <footer className="footer">
        <div className="main-container">

          <div className="informations-container">    
            <img src={Image} className="author-image"/>

            <div className="info-container">
              <h1 className="info-title">Desenvolvedor - Entre em contato!</h1>
              <h2 className="info-mail">felipereis0724@gmail.com</h2>
              <h2 className="info-desc">Site com carrinho de compras funcional feito com React utilizando a API do Mercado Livre para a listagem dos produtos.</h2>

              <div className="buttons-container">
                <a className="button" href="https://github.com/FelipeReis-HUB/" target="_blank" rel="noopener noreferrer"><FaGithubSquare/></a>       
                <a className="button" href="https://www.linkedin.com/in/luis-felipe-medeiros-reis-54759520a/" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>       
                <a className="button" href="mailto:felipereis0724@gmail.com"><IoMailSharp /></a>
              </div>
            </div>
          </div>

          <h2 className="info-copy">© 2024 Felipe Reis</h2>

        </div>
      </footer>
    )
  );
}

export default Footer;
