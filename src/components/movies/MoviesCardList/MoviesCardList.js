import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ cards, handleLike, handleDislike, handleDeleteCard, nothongFound }) {

  const [quantity, setQuantity] = React.useState(showInitialValue());
  const [showButton, setShowButton] = React.useState(false);
  const cardsToShow = cards.slice(0, quantity);

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
    if (quantity < cards.length) {
      setShowButton(true);
    }
    if (quantity >= cards.length) {
      setShowButton(false);
    }
  });

  //React.useEffect(() => {
  //  if (cards.length === 0) {
  //    console.log('ничего')
  //  }
  //}, []);

  return (
    <section className="moviesCardList">
      {nothongFound ? <span className="moviesCardList__span">Ничего не найдено</span> : <span></span> }
      <div className="moviesCardList__section">
        {cardsToShow.map((card) =>
          <MoviesCard
            card={card}
            key={card.__id}
            handleDislike={handleDislike}
            handleLike={handleLike}
            handleDeleteCard={handleDeleteCard}
          />)}
      </div>
      <button onClick={showMore} className={`moviesCardList__button-more ${!showButton ? "moviesCardList__button-more_invisible" : ""}`} type="button">Ещё</button>
    </section>
  );
}

export default MoviesCardList;