import { Link } from 'react-router-dom';

function LoggedHeader({ openMenu }) {

    return (
        <header className="log-header">
            <Link to="/" className="log-header__logo" alt="логотип_заголовка" ></Link>
            <div className="log-header__logged-link-container">
                <div className="log-header__logged-links-films">
                    <Link to="/movies" className="log-header__logged-link">Фильмы</Link>
                    <Link to="/saved-movies" className="log-header__logged-link">Сохраненные фильмы</Link>
                </div>
                <Link to="/profile" className="log-header__logged-link-account">Аккаунт</Link>
                <button onClick={openMenu} className="log-header__menu"></button>
            </div>

        </header>
    );
}

export default LoggedHeader;