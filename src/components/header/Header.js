import logo from '../../images/logo.svg';
import { Link, Route, Routes } from 'react-router-dom';

function Header({ }) {

  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="логотип_заголовка" />
      <Routes>
        <Route path="/" element={
          <div className="header__link-container">
            <Link to="/signup" className="header__register-link">Регистрация</Link>
            <Link to="/signin" className="header__button-login">Войти</Link>
          </div>
        } />

      </Routes>
    </header>
  );
}

export default Header;