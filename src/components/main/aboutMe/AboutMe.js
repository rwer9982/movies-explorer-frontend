import React from 'react';
import { Link } from 'react-router-dom';
import Photo_student from '../../../images/Photo_student.jpg';
import arrow from '../../../images/arrow.svg';

function AboutMe({ }) {

    return (
        <section className="about-me">
            <p className="about-me__student">Студент</p>
            <div className="about-me__container">
                <div className="about-me__description">
                    <h2 className="about-me__name">Виталий</h2>
                    <h3 className="about-me__profession">Фронтенд-разработчик, 30 лет</h3>
                    <p className="about-me__story">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
                        и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                    <Link target="_blank" to="https://github.com/rwer9982" className="about-me__git">Github</Link>
                </div>
                <img src={Photo_student} className="about-me__photo" alt="Фото студента"></img>
            </div>
            <h4 className="about-me__portfolio">Портфолио</h4>
            <Link to="https://github.com/rwer9982/mesto" target="_blank" className="about-page">
                <p className="about-page__description">Статичный сайт</p>
                <img src={arrow} className="about-page__image" alt="логотип стрелка"></img>
            </Link>
            <Link to="https://github.com/rwer9982/russian-travel" target="_blank" className="about-page">
                <p className="about-page__description">Адаптивный сайт</p>
                <img src={arrow} className="about-page__image" alt="логотип стрелка"></img>
            </Link>
            <Link to="https://github.com/rwer9982/how-to-learn" target="_blank" className="about-page">
                <p className="about-page__description">Одностраничное приложение</p>
                <img src={arrow} className="about-page__image" alt="логотип стрелка"></img>
            </Link>
        </section>
    );
}

export default AboutMe;