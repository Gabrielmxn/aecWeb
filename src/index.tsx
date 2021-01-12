import React from 'react';
import ReactDOM from 'react-dom';
import Conteudo from './home/index';
import Menu from './menu/index';
import './style.css';

ReactDOM.render(
  <React.StrictMode>
    <Menu />
    <Conteudo />
  </React.StrictMode>,
  document.getElementById('root')
);



