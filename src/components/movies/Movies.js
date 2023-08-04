import React from 'react';
//import Header from '../header/Header.js';
import Footer from '../footer/Footer.js';
import SearchForm from './searchForm/SearchForm.js';
import MoviesCardList from './MoviesCardList/MoviesCardList.js'
import LoggedHeader from '../LoggedHeader/LoggedHeader.js';
import Preloader from '../preloader/Preloader.js';


function Movies({ openMenu, onSubmit, cards, isEnabled, handleDislike, handleLike, handleDeleteCard, isVisible, nothongFound, searchWordValue, changeButtonState, isEnabledSaved, changeButtonSavedState }) {

  return (
    <section className="movies">
      <LoggedHeader openMenu={openMenu}></LoggedHeader>
      <main>
        <SearchForm onSubmit={onSubmit} isEnabled={isEnabled} searchWordValue={searchWordValue} changeButtonState={changeButtonState} isEnabledSaved={isEnabledSaved} changeButtonSavedState={changeButtonSavedState}></SearchForm>
        {isVisible ? <Preloader isVisible={isVisible}/> : <div></div> }
        <MoviesCardList
          cards={cards}
          handleDislike={handleDislike}
          handleLike={handleLike}
          handleDeleteCard={handleDeleteCard}
          nothongFound={nothongFound}
        ></MoviesCardList>
      </main>
      <Footer></Footer>
    </section>
  );
}

export default Movies;