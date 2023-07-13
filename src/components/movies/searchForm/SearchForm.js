import React from 'react';
//import searchIcon from '../../../images/search_icon.jpg'


function SearchForm({ }) {

  return (
    <section className="searchForm">
      <form className="searchForm__form">
        <div className="searchForm__icon"></div>
        <input className="searchForm__input" placeholder="Фильм" type="text" required/>
        <button className="searchForm__submit" type="submit"></button>
        <div className="searchForm__line"></div>
        <button className="searchForm__button"></button>
        <p className="searchForm__description">Короткометражки</p>
      </form>

    </section>
  );
}

export default SearchForm;