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
              <li className="item"><a href="#QuemSomos">Quem somos</a></li>
              <li className="item"><a href="#">Portfólio</a></li>
              <li className="item"><a href="#">Área do cliente</a></li>
              <li className="item"><a href="#">Depoimentos</a></li>
            </ul>
            <ul id="menu-mobile">
              <a href="#"><li className="item-Menu">Home</li></a>
              <a href="#QuemSomos"><li className="item-Menu">Quem somos</li></a>
              <a href="#"><li className="item-Menu">Portfólio</li></a>
              <a href="#"><li className="item-Menu">Área do cliente</li></a>
              <a href="#"><li className="item-Menu">Depoimentos</li></a>
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