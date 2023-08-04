import React from 'react';

function AboutProject({ }) {

    return (
        <section className="about-project">
            <h2 className="about-project__header">О проекте</h2>
            <div className="plan">
                <div className="plan__container">
                    <h3 className="plan__header">Дипломный проект включал 5 этапов</h3>
                    <p className="plan__description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className="plan__container">
                    <h3 className="plan__header">На выполнение диплома ушло 5 недель</h3>
                    <p className="plan__description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className="time">
                <p className="time__description">1 неделя</p>
                <p className="time__description">4 недели</p>
            </div>
            <div className="stack">
                <p className="stack__description">Back-end</p>
                <p className="stack__description">Front-end</p>
            </div>

        </section>
    );
}

export default AboutProject;