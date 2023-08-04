import React from 'react';
import Header from '../header/Header.js';
import LoggedHeader from '../LoggedHeader/LoggedHeader.js';
import Promo from './promo/Promo.js';
import Footer from '../footer/Footer.js';
import AboutProject from './aboutProject/AboutProject.js';
import Techs from './techs/Techs.js';
import AboutMe from './aboutMe/AboutMe.js';

function Main({ logged }) {

  return (
    <section className="main">
      {!logged ? <Header></Header> : <LoggedHeader></LoggedHeader>}
      <main>
      <Promo></Promo>
      <AboutProject></AboutProject>
      <Techs></Techs>
      <AboutMe></AboutMe>
      </main>
      <Footer></Footer>
    </section>
  );
}

export default Main;