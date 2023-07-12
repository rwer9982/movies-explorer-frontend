import React from 'react';
import Header from '../header/Header.js';
import Footer from '../footer/Footer.js';
import SearchForm from './searchForm/SearchForm.js';
import MoviesCardList from './MoviesCardList/MoviesCardList.js'
import LoggedHeader from '../LoggedHeader/LoggedHeader.js';
import Navigation from '../Navigation/Navigation.js';


function Movies({ openMenu }) {

  return (
    <main className="movies">
      <LoggedHeader openMenu={openMenu}></LoggedHeader>
      <SearchForm></SearchForm>
      <MoviesCardList></MoviesCardList>
      <Footer></Footer>
    </main>
  );
}

export default Movies;