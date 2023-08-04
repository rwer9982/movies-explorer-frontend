import React, { useState, useEffect } from 'react';
import Main from '../main/Main.js';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import Login from '../login/Login.js';
import Register from '../register/Register.js';
import Movies from '../movies/Movies.js';
import SavedMovies from '../movies/Movies.js';
import Profile from '../Profile/Profile.js';
import NotFound from '../NotFound/NotFound.js';
import Navigation from '../Navigation/Navigation.js';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';
import api from '../../Utils/MainApi.js';
import ProtectedRouteElement from '../ProtectedRoute/ProtectedRoute.js';
import moviesApi from '../../Utils/MoviesApi.js';
import * as auth from '../../Utils/Auth';

function App() {

  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = useState(!!JSON.parse(localStorage.getItem("loggedIn")));
  const [isMenuOpen, setisMenuOpen] = React.useState(false);

  const [films, setFilms] = useState([]);
  const [findedFilms, setFindedFilms] = useState([]);
  const [isEnabledState, setIsEnabledState] = useState(() => {
    const state = localStorage.getItem('isEnabledShortButton');
    if (state && state === 'true') {
      return true;
    }
    return false;
  });
  const [isEnabledSavedState, setIsEnabledSavedState] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [findedSavedMovies, setFindedSavedMovies] = useState([]);
  const [findedSavedFilmsFilter, setFindedSavedFilmsFilter] = useState([]);
  const [isPreloaderVisible, setIsPreloaderVisible] = useState(false);
  const [nothingFoundState, setNothingFoundState] = useState(false);

  useEffect(() => {
    checkToken();
  }, [loggedIn]);

  //const tokenCheck = () => {
  //  if (localStorage.getItem('jwt')) {
  //    if (jwt) {
  //      localStorage.setItem('loggedIn', JSON.stringify(loggedIn));
  //      setLoggedIn(true);
  //    }
  //  }
  //}

  function checkToken() {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      localStorage.setItem('loggedIn', JSON.stringify(loggedIn));
      setLoggedIn(true);
    } if (!jwt) {
      return signOut();
    }
  }

  const handleLogin = () => {
    setLoggedIn(true);
  }

  function getuserInfo() {
    if (loggedIn) {
      api.getProfile()
        .then((userInfo) => {
          setCurrentUser(userInfo);
        })
        .catch((err) => console.log(err))
    }
  }

  useEffect(() => {
    if (loggedIn) {
      getuserInfo();
    }
  }, [loggedIn]);

  useEffect(() => {
    if (loggedIn) {
      api.getMovies()
        .then((res) => {
          setSavedMovies(res);
          setFindedSavedMovies(res);
          setFindedSavedFilmsFilter(res);
        })
    }
  }, [loggedIn]);

  function handleOpenMenu() {
    setisMenuOpen(!isMenuOpen)
  }

  function handleMenuButtonClick() {
    handleOpenMenu()
  }

  function closeMenu() {
    setisMenuOpen(false)
  }

  function signOut() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('findedFilms');
    localStorage.removeItem('findedFilmsFilter');
    localStorage.removeItem('findedSavedFilms');
    localStorage.removeItem('findedSavedFilmsFilter');
    localStorage.removeItem('searchWord');
    localStorage.removeItem('isEnabledShortButton');
    localStorage.removeItem('isEnabledSavedShortButton');
    localStorage.removeItem('isEnabledlike');
    setNothingFoundState(false);
    setFindedFilms([]);
    setIsEnabledState(false)
    setIsEnabledSavedState(false);
    setLoggedIn(false);
  }

  function handleEdit(data) {
    api.editProfile(data.name, data.email)
      .then((res) => {
        console.log(res, 'данные успешно обновлены')
        setCurrentUser(res)
      })
      .catch(err => console.log(err));
  }

  function getFilms() {
    moviesApi.getMovies()
      .then((res) => {
        setFilms(res);
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getFilms();
  }, [loggedIn]);

  function findFilms(data) {
    const searchWord = data.search;
    const result = films.filter(film => film.nameRU.toLowerCase().includes(searchWord.toLowerCase()) || film.nameEN.toLowerCase().includes(searchWord.toLowerCase()));
    setIsPreloaderVisible(true);
    setNothingFoundState(false);
    localStorage.setItem('findedFilms', JSON.stringify(result))
    localStorage.setItem('findedFilmsFilter', JSON.stringify(result))
    localStorage.setItem('searchWord', searchWord);
    setTimeout(() => {
      setIsPreloaderVisible(false);
      if (result.length === 0) {
        setNothingFoundState(true);
      }
      if (isEnabledState) {
        const shortResult = JSON.parse(localStorage.getItem('findedFilms')).filter((film) => film.duration <= 40);
        return setFindedFilms(shortResult);
      }
      setFindedFilms(result)

    }, 2000);
  }

  useEffect(() => {
    if (localStorage.getItem('findedFilms') !== null) {
      if (isEnabledState) {
        const shortResult = JSON.parse(localStorage.getItem('findedFilms')).filter((film) => film.duration <= 40);
        setFindedFilms(shortResult);
      }
      if (!isEnabledState) {
        setFindedFilms(JSON.parse(localStorage.getItem('findedFilms')));
      }
    }

  }, [isEnabledState]);

  function findSavedFilms(data) {
    const searchWord = data.search;
    const result = savedMovies.filter(film => film.nameRU.toLowerCase().includes(searchWord.toLowerCase()) || film.nameEN.toLowerCase().includes(searchWord.toLowerCase()));
    localStorage.setItem('findedSavedFilms', JSON.stringify(result))
    localStorage.setItem('findedSavedFilmsFilter', JSON.stringify(result))
    setFindedSavedFilmsFilter(result)
    if (isEnabledSavedState) {
      const shortResult = findedSavedFilmsFilter.filter((film) => film.duration <= 40);
      return setFindedSavedFilmsFilter(shortResult)
    }
    setFindedSavedMovies(result);
  }

  useEffect(() => {
    if (isEnabledSavedState) {
      const shortFindedResult = findedSavedFilmsFilter.filter((film) => film.duration <= 40);
      setFindedSavedMovies(shortFindedResult);
    } if (!isEnabledSavedState) {
      setFindedSavedMovies(findedSavedFilmsFilter);
    }
  }, [isEnabledSavedState]);

  const changeEnabledState = () => {
    setIsEnabledState(!isEnabledState)
    localStorage.setItem('isEnabledShortButton', !isEnabledState)
  }

  const changeEnabledSavedState = () => {
    setIsEnabledSavedState(!isEnabledSavedState)
  }

  function handleLikeCard(card) {
    api.createMovie(card)
      .then((res) => {
        card.id = res._id;
        setSavedMovies((movies) => [...movies, res])
        setFindedSavedMovies([res, ...findedSavedMovies]);
      })
      .catch(err => console.log(err))
      .finally(() => {

      })
  }

  function handleDislikeCard(card) {
    api.deleteMovie(card.id)
      .then((res) => {
        setSavedMovies(savedMovies.filter((data) => data._id !== card.id))
      })
      .catch(err => console.log(err));
  }

  function handleDeleteCard(card) {
    api.deleteMovie(card._id)
      .then((res) => {
        setFindedSavedMovies((state) => state.filter((s) => s._id !== card._id))
      })
      .catch(err => console.log(err));
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>

      <div className="app">
        <Routes>
          <Route exact path="/" element={<Main logged={loggedIn} />} />
          <Route path="/signin" element={<Login handleLogin={handleLogin} loggedIn={loggedIn} />} />
          <Route path="/signup" element={<Register loggedIn={loggedIn} handleLogin={handleLogin} />} />
          <Route path="/movies" element={<ProtectedRouteElement
            loggedIn={loggedIn}
            element={Movies}
            openMenu={handleMenuButtonClick}
            onSubmit={findFilms}
            cards={findedFilms || []}
            isEnabled={isEnabledState}
            changeButtonState={changeEnabledState}
            handleDislike={handleDislikeCard}
            handleLike={handleLikeCard}
            isVisible={isPreloaderVisible}
            nothongFound={nothingFoundState}
            searchWordValue={localStorage.getItem('searchWord') || ''}
          />} />
          <Route path="/saved-movies" element={<ProtectedRouteElement
            loggedIn={loggedIn}
            element={SavedMovies}
            openMenu={handleMenuButtonClick}
            onSubmit={findSavedFilms}
            cards={findedSavedMovies}
            isEnabledSaved={isEnabledSavedState}
            changeButtonSavedState={changeEnabledSavedState}
            handleDeleteCard={handleDeleteCard}
          />} />
          <Route path="/profile" element={<ProtectedRouteElement
            loggedIn={loggedIn}
            element={Profile}
            signOut={signOut}
            userMail={currentUser.email}
            userName={currentUser.name}
            openMenu={handleMenuButtonClick}
            onSubmit={handleEdit}
          />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Navigation
          onClose={closeMenu}
          isOpen={isMenuOpen}
        >
        </Navigation>

      </div>

    </CurrentUserContext.Provider>
  );
}

export default App;