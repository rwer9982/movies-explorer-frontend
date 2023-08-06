import React from 'react';
import { useLocation, Link } from "react-router-dom";

function MoviesCard({ card, handleLike, handleDislike, handleDeleteCard, isLiked }) {

  const path = useLocation();

  function splitDuration(min) {
    let minutes = min % 60;
    let hours = Math.floor(min / 60);

    if (hours === 0) {
      return minutes + ' мин.';
    } else {
      return hours + ' ч. ' + minutes + ' мин.';
    }
  }

  function handleLikeClick() {
    handleLike(card);
  }

  function handleDislikeClick() {
    handleDislike(card);
  }

  function handleDeleteCardClick() {
    handleDeleteCard(card);
  }

  return (
    <section className="moviesCard">
      <div className="moviesCard__description-container">
        <div className="moviesCard__description">
          <h2 className="moviesCard__header">{card.nameRU}</h2>
          <p className="moviesCard__time">{splitDuration(card.duration)}</p>
        </div>
        {path.pathname === "/saved-movies" ?
          <button onClick={handleDeleteCardClick} className="moviesCard__delete-icon" type="button"></button>
          : <button onClick={isLiked(card) ? handleDislikeClick : handleLikeClick} className={`moviesCard__like-icon ${isLiked(card) ? "moviesCard__like-icon_enabled" : ""}`} type="button"></button>}
      </div>
      <Link to={card.trailerLink} target="_blank">
        <img src={path.pathname === "/movies" ? `https://api.nomoreparties.co${card.image.url}` : card.image} alt={card.nameRU} className="moviesCard__image"></img>
      </Link>
    </section>
  );
}
//: <button onClick={isLiked ? handleDislikeClick : handleLikeClick} className={`moviesCard__like-icon ${isLiked(card) ? "moviesCard__like-icon_enabled" : ""}`} type="button"></button>}
export default MoviesCard;