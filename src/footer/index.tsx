import React from 'react';


import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoYoutube } from "react-icons/io5";
import { IoLogoPinterest } from "react-icons/io5";
import {ReactComponent as ReactLogo} from '../img/logoBlack.svg';

import './style.css';
function footer(){
  return(
    
    <div id="footer">
      <div id="logo">
        <a href=""><ReactLogo /></a>
      </div>
     
      <div className="w">
        <div id="logo-social"> 
          <a href="https://www.facebook.com/aecphotos" target="_blank"><IoLogoFacebook /></a>
          <a href="https://www.instagram.com/aecphotos_/" target="_blank"><IoLogoInstagram /></a>
          <a href=""><IoLogoYoutube /></a>
          <a href=""><IoLogoPinterest /></a>
        </div>
        <span>Você não tira uma foto, você cria uma foto</span>
        <span>©2020 por A&C Photos</span>
      </div>
      </div>

   
  );
}

export default footer;