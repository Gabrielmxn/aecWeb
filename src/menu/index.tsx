import React from 'react';
import './style.css';
import {ReactComponent as ReactLogo} from '../img/logoBlack.svg';
function Menu(){
  return(
    <div>
      <header id="container">
        <a href=""> 
          <ReactLogo className='svg'/>
         </a>
        <nav>
          <div>
            <input id="dropMenu" type="checkbox" />
            <label htmlFor="dropMenu">
              <div className="menuT">
                <span className="hamburguer"></span>
              </div>
            </label>
            <ul id="menu">
              <li className="item"><a href="#">Home</a></li>
              <li className="item"><a href="#">Portfólio</a></li>
              <li className="item"><a href="#QuemSomos">Sobre</a></li>
              <li className="item"><a href="#">Área do cliente</a></li>
              <li className="item"><a href="#">Depoimentos</a></li>
            </ul>
            
              <ul id="menu-mobile">
                <li className="item-Menu"><a href="#">Home</a></li>
                <li className="item-Menu"><a href="#">Portfólio</a></li>
                <li className="item-Menu"><a href="#">Sobre</a></li>
                <li className="item-Menu"><a href="#">Depoimentos</a></li>
                <li className="item-Menu"><a href="#">Área do cliente</a></li>
               
              </ul>
           
           
          </div>
        </nav>
       </header>
   <div id="header-princpal">
    <div className="tiwww">
    </div>
 </div>  
 </div>
  );
}

export default Menu;