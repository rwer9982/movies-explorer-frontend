import React from 'react';
import testImg from '../../../images/pic_test.jpg';

function MoviesCard({ }) {

  return (
    <section className="moviesCard">
      <div className="moviesCard__description-container">
        <div className="moviesCard__description">
          <h2 className="moviesCard__header">33 слова о дизайне</h2>
          <p className="moviesCard__time">1ч 47м</p>
        </div>
        <button className="moviesCard__like-icon"></button>
      </div>
      <img src={testImg} className="moviesCard__image" alt="фото фильма"></img>
    </section>
  );
}

export default MoviesCard;