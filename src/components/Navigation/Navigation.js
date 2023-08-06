import { Link } from "react-router-dom";

function Navigation({ onClose, isOpen }) {

  return (
    <section className={`navigation ${isOpen && "navigation_active"}`}>
        <div className="menu">
            <button className="menu__close" onClick={onClose}></button>
            <Link to="/" className="menu__link">Главная</Link>
            <Link to="/movies" className="menu__link">Фильмы</Link>
            <Link to="/saved-movies" className="menu__link">Сохранённые фильмы</Link>
            <Link to="/profile" className="menu__account-link">Аккаунт</Link>
        </div>

    </section>
  );
}

export default Navigation;