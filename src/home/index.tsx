import React from 'react';
import { IoRibbon } from "react-icons/io5";
import { IoHappy } from "react-icons/io5";
import { IoCalendar } from "react-icons/io5";
import { IoInformationCircle } from "react-icons/io5";
import cropped from '../img/cropped.png'
import './style.css';

function Conteudo(){
  return(
    <div className='container'>
      <div id="conteudo">
        <div className="titulow">
          <h1 className="tituloUnico">Nós somos a persistência da memória</h1>
          <h3 className="subTitulo">Nós salvamos cada momento da sua vida</h3>
        </div>
        <div className="comprometimentoData grid1">
          <IoCalendar/>
          <h2>Comprometimento com data</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id neque sed augue fermentum blandit. Fusce nec justo in lectus pellentesque mattis et vel tortor.</p>
        </div>
        <div className="comprometimentoData grid2">
          <IoInformationCircle/>
          <h2>Atenciosos no atendimento</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id neque sed augue fermentum blandit. Fusce nec justo in lectus pellentesque mattis et vel tortor.</p>
        </div>
        <div className="comprometimentoData grid3">
          <IoHappy/>
          <h2>Ensaio exclusivo e expontâneo</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id neque sed augue fermentum blandit. Fusce nec justo in lectus pellentesque mattis et vel tortor.</p>
        </div>
        <div className="comprometimentoData grid4">
          <IoRibbon/>
          <h2>Entregamos felicidade em forma de ensaio</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id neque sed augue fermentum blandit. Fusce nec justo in lectus pellentesque mattis et vel tortor.</p>
        </div>
      </div>
      <div id='portfolio'>
        <h2>Portfolio</h2>
        <h3>Somos especialistas em guardar momentos.</h3>
      </div>
      <div id="QuemSomos">
          <h2>Quem somos</h2>
          <div id="imgQuemSomos">
            <img src={cropped} alt=""/>
          </div>
         
          <div id="textoAEC">
            <p>A A&C PHOTOS é uma empresa que começou com uma ideia simples
            e descosmprometida de apenas tirar fotos. Mas com o passar do tempo
            vimos o quão importante para as pessoas e quão grande aquela ideia
            descomprometida poderia ser.</p>
            <p>Hoje somos apaixonados ou talvez, até mesmo obcecados pelo que fazemos.
            Adoramos registrar sorrisos, expressões, gestos de carinho e afeto, momentos 
            únicos nas vidas das pessoas. Nosso verdadeiro objetivo é registrar em forma
            de fotografia
            os reais sentimentos das pessoas.</p>
            <p>Nossa forma de trabalhar é um pouco fora dos padrões. Sempre nos relacionamos
            com os clientes de forma descontraída e sadia, procurando atendê-los da melhor 
            forma possível, visando seu bem estar em todas as etapas do trabalho, ou seja,
            da negociação até a entrega do trabalho finalizado.</p>
          </div>
        </div>
    </div>
  );
}

export default Conteudo;