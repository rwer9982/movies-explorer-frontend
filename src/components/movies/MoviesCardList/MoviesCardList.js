import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useLocation, } from "react-router-dom";

function MoviesCardList({ isLiked, cards, handleLike, handleDislike, handleDeleteCard, nothongFound }) {

  const [quantity, setQuantity] = React.useState(showInitialValue());
  const [showButton, setShowButton] = React.useState(false);
  const cardsToShow = cards.slice(0, quantity);
  const [cardsLength, setCardsLength] = React.useState(cards);
  const path = useLocation();

  function showMore() {
    const width = window.innerWidth;
    if (width >= 1262) {
      setQuantity(quantity + 3);
    } else if (width >= 709) {
      setQuantity(quantity + 2);
    } else {
      setQuantity(quantity + 2);
    }
  }

  function showInitialValue() {
    //setQuantity(showInitialValue())
    const width = window.innerWidth;
    if (width >= 1262) {
      return 12;
    } else if (width >= 709) {
      return 8;
    } else {
      return 5;
    }
  }

  React.useEffect(() => {
    //setQuantity(showInitialValue())
    if (quantity < cards.length) {
      setShowButton(true);
    }
    if (quantity >= cards.length) {
      setShowButton(false);
    }
  });

  React.useEffect(() => {
   if(cards.length !== cardsLength) {
     setQuantity(showInitialValue())
  }
  }, [cards])

  return (
    <section className="moviesCardList">
      {nothongFound ? <span className="moviesCardList__span">Ничего не найдено</span> : <span></span>}
      {path.pathname === "/movies" ?
        <div className="moviesCardList__section">
          {cardsToShow.map((card) =>
            <MoviesCard
              card={card}
              key={card.id}
              handleDislike={handleDislike}
              handleLike={handleLike}
              handleDeleteCard={handleDeleteCard}
              isLiked={isLiked}
            />)}
        </div>
        :
        <div className="moviesCardList__section">
          {cards.map((card) =>
            <MoviesCard
              card={card}
              key={card.id}
              handleDislike={handleDislike}
              handleLike={handleLike}
              handleDeleteCard={handleDeleteCard}
              isLiked={isLiked}
            />)}
        </div>
      }
      {path.pathname === "/movies" ?
        <button onClick={showMore} className={`moviesCardList__button-more ${!showButton ? "moviesCardList__button-more_invisible" : ""}`} type="button">Ещё</button>
        : <div></div>}
    </section>
  );
}

export default MoviesCardList;