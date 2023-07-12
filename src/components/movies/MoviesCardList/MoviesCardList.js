import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ }) {

  return (
    <section className="moviesCardList">
      <div className="moviesCardList__section">
      <MoviesCard></MoviesCard>
      <MoviesCard></MoviesCard>
      <MoviesCard></MoviesCard>
      <MoviesCard></MoviesCard>
      <MoviesCard></MoviesCard>
      </div>
      <button className="moviesCardList__button-more">Ещё</button>
    </section>
  );
}

export default MoviesCardList;