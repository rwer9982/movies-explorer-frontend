import React from 'react';
import { Link } from 'react-router-dom';

function ProfilePage({ }) {

    return (
        <section className="profile-page">
            <h2 className="profile-page__header">Привет, Виталий!</h2>
            <form className="profile-page__form">
                <div className="profile-page__container">
                    <p className="profile-page__title">Имя</p>
                    <p className="profile-page__value">Виталий</p>
                </div>
                <div className="profile-page__container">
                    <p className="profile-page__title">E-mail</p>
                    <p className="profile-page__value">pochta@yandex.ru</p>
                </div>
                <button className="profile-page__button"> Редактировать</button>
                <Link to="/signin"className="profile-page__link">Выйти из аккаунта</Link>
            </form>

        </section>

    );
}

export default ProfilePage;