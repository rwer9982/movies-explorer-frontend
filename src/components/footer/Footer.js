import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__about">Учебный проект Яндекс.Практикум х BeatFilm</p>
      <div className="footer__container">
        <p className="footer__copyright">&copy; 2023</p>
        <div className="footer__links">
          <Link target="_blank" to="https://practicum.yandex.ru" className="footer__link">Яндекс.Практикум</Link>
          <Link target="_blank" to="https://github.com/rwer9982" className="footer__link">Github</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;