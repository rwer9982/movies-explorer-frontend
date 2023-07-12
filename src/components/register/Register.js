import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../images/logo.svg';

const Register = ({ }) => {


    return (
        <div className="register">
            <Link to="/" className="register__logo"></Link>
            <p className="register__header">
                Добро пожаловать!
            </p>
            <form className="register__form">
                <p className="register__input-name">Имя</p>
                <input className="register__input" required id="name" name="name" type="text" />
                <p className="register__span">Что-то пошло не так...</p>
                <p className="register__input-name">Email</p>
                <input className="register__input" required id="email" name="email" type="text" />
                <p className="register__span">Что-то пошло не так...</p>
                <p className="register__input-name">Пароль</p>
                <input className="register__input" required id="password" name="password" type="password" />
                <p className="register__span">Что-то пошло не так...</p>
                <button className="register__submit" type="submit">Зарегистрироваться</button>
            </form>
            <div className="register__link-container">
                <p className="register__link-header">Уже зарегистрированы?</p>
                <Link to="/signin" className="register__link">Войти</Link>
            </div>
        </div>
    )
}

export default Register;