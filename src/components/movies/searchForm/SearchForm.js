import React from 'react';
//import searchIcon from '../../../images/search_icon.jpg'


function SearchForm({ }) {

  return (
    <section className="searchForm">
      <form className="searchForm__form">
        <div className="searchForm__icon"></div>
        <input className="searchForm__input" placeholder="Фильм" />
        <button className="searchForm__submit" type="submit"></button>
        <button className="filterCheckbox__button"></button>
        <p className="filterCheckbox__description">Короткометражки</p>
      </form>

    </section>
  );
}

export default SearchForm;