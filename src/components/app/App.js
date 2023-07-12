import React, { useState, useEffect } from 'react';
import Header from '../header/Header.js';
import Main from '../main/Main.js';
import Footer from '../footer/Footer.js';
import { Route, Routes, Navigate, BrowserRouter, useNavigate } from 'react-router-dom';
import Login from '../login/Login.js';
import Register from '../register/Register.js';
import Movies from '../movies/Movies.js';
import SavedMovies from '../movies/Movies.js';
import Profile from '../Profile/Profile.js';
import NotFound from '../NotFound/NotFound.js';
import Navigation from '../Navigation/Navigation.js';

function App() {

  const [isMenuOpen, setisMenuOpen] = React.useState(false);

  function handleOpenMenu() {
    setisMenuOpen(!isMenuOpen)
  }

  function handleMenuButtonClick() {
    handleOpenMenu()
  }

  function closeMenu () {
    setisMenuOpen(false)
  }

  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/movies/*" element={<Movies openMenu={handleMenuButtonClick}/>} />
        <Route path="/saved-movies" element={<SavedMovies openMenu={handleMenuButtonClick}/>} />
        <Route path="/profile" element={<Profile openMenu={handleMenuButtonClick}/>} />
        <Route path="/404" element={<NotFound />} />
      </Routes>
      <Navigation
      onClose={closeMenu}
      isOpen={isMenuOpen}
      >
      </Navigation>
    </div>

  );
}

export default App;