import React from 'react';
import Footer from '../footer/Footer.js';
import SearchForm from './searchForm/SearchForm.js';
import MoviesCardList from './MoviesCardList/MoviesCardList.js'
import LoggedHeader from '../../LoggedHeader/LoggedHeader.js';

function SavedMovies({ searchWordValue, isLiked, onSubmitSaved, openMenu, cards, isEnabled, onSubmit, handleDislike, handleDeleteCard, isEnabledSaved, changeButtonState, changeButtonSavedState }) {

  return (
    <main className="saved-movies">
      <LoggedHeader
        openMenu={openMenu}
      ></LoggedHeader>
      <SearchForm
        onSubmit={onSubmit}
        isEnabled={isEnabled}
        isEnabledSaved={isEnabledSaved}
        changeButtonState={changeButtonState}
        changeButtonSavedState={changeButtonSavedState}
        onSubmitSaved={onSubmitSaved}
        searchWordValue={searchWordValue}
      ></SearchForm>
      <MoviesCardList
        cards={cards}
        isLiked={isLiked}
        handleDislike={handleDislike}
        handleDeleteCard={handleDeleteCard}
      ></MoviesCardList>
      <Footer></Footer>
    </main>
  );
}

export default SavedMovies;