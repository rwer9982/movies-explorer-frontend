import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../images/logo.svg';


const Login = ({ }) => {

    return (
        <div className="login">
            <Link to="/" className="login__logo"></Link>
            <p className="login__header">
                Рады видеть!
            </p>
            <form className="login__form">
                <p className="register__input-name">E-mail</p>
                <input className="login__input" required id="username" name="username" type="text" />
                <p className="login__span">Что-то пошло не так...</p>
                <p className="register__input-name">Пароль</p>
                <input className="login__input" required id="password" name="password" type="password" />
                <p className="login__span">Что-то пошло не так...</p>
                <button className="login__submit" type="submit">Войти</button>
            </form>
            <div className="login__link-container">
                <p className="login__link-header">Еще не зарегистрированы?</p>
                <Link to="/signup" className="login__link">Регистрация</Link>
            </div>
        </div>
    )
}

export default Login;