import React from 'react';

function Promo({ }) {

    return (
        <section className="promo">
            <h1 className="promo__header">Учебный проект студента факультета Веб-разработки.</h1>
            <div className="promo__content">
                <p className="promo__about-container">О проекте</p>
                <p className="promo__about-container">Технологии</p>
                <p className="promo__about-container">Студент</p>
            </div>
        </section>
    );
}

export default Promo;