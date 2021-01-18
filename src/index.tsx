import React from 'react';
import ReactDOM from 'react-dom';
import Conteudo from './home/index';
import Menu from './menu/index';
import Footer from './footer/index';
import './style.css';

ReactDOM.render(
  <React.StrictMode>
    <Menu />
    <Conteudo />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);



