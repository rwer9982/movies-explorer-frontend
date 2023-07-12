import React from 'react';
import Header from '../header/Header.js';
import Promo from './promo/Promo.js';
import Footer from '../footer/Footer.js';
import AboutProject from './aboutProject/AboutProject.js';
import Techs from './techs/Techs.js';
import AboutMe from './aboutMe/AboutMe.js';

function Main({ }) {

  return (
    <main className="main">
      <Header></Header>
      <Promo></Promo>
      <AboutProject></AboutProject>
      <Techs></Techs>
      <AboutMe></AboutMe>
      <Footer></Footer>
    </main>
  );
}

export default Main;