import React from 'react';
import Header from '../header/Header.js';
import Footer from '../footer/Footer.js';
import SearchForm from './searchForm/SearchForm.js';
import MoviesCardList from './MoviesCardList/MoviesCardList.js'
import LoggedHeader from '../../LoggedHeader/LoggedHeader.js';


function SavedMovies({ }) {

  return (
    <main className="movies">
      <LoggedHeader></LoggedHeader>
      <SearchForm></SearchForm>
      <MoviesCardList></MoviesCardList>
      <Footer></Footer>
    </main>
  );
}

export default SavedMovies;