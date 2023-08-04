import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as auth from '../../Utils/Auth';
import validator from "validator";


const Login = ({ handleLogin, loggedIn }) => {

    const [formValue, setFormValue] = useState({
        username: '',
        password: ''
    });

    const [errors, setErrors] = React.useState({});
    const [validForm, setValidForm] = React.useState(false);

    const navigate = useNavigate();

    React.useEffect(() => {
        if (loggedIn) {
            navigate('/movies', { replace: true });
        }
    }, [loggedIn]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setErrors({ ...errors, [name]: e.target.validationMessage });
        setFormValue({
            ...formValue,
            [name]: value
        });

        if (name === "username" && !validator.isEmail(value)) {
            setErrors({ ...errors, username: "Введите корректный адрес электронной почты" });
            return setValidForm(false);
        } if (name === "username" && validator.isEmail(value)) {
            setValidForm(e.target.closest('form').checkValidity());
        } if (errors.username === "") {
            setValidForm(e.target.closest('form').checkValidity());
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formValue.username || !formValue.password) {
            return;
        }
        auth.authorize(formValue.username, formValue.password)
            .then((data) => {
                if (data.token) {
                    setFormValue({ username: '', password: '' });
                    localStorage.setItem('jwt', data.token);
                    //console.log(data)
                    handleLogin();
                    navigate('/movies', { replace: true });
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <main>
            <div className="login">
                <Link to="/" className="login__logo"></Link>
                <p className="login__header">
                    Рады видеть!
                </p>
                <form onSubmit={handleSubmit} className="login__form">
                    <p className="login__input-name">E-mail</p>
                    <input value={formValue.username} onChange={handleChange} className="login__input" required id="username" name="username" type="email" />
                    <p className="login__span">{errors.username}</p>
                    <p className="login__input-name">Пароль</p>
                    <input value={formValue.password} onChange={handleChange} className="login__input" required id="password" name="password" minLength="8" type="password" />
                    <p className="login__span">{errors.password}</p>
                    <button className={`login__submit ${!validForm ? "login__submit_disabled" : ""}`} disabled={!validForm} type="submit">Войти</button>
                </form>
                <div className="login__link-container">
                    <p className="login__link-header">Еще не зарегистрированы?</p>
                    <Link to="/signup" className="login__link">Регистрация</Link>
                </div>
            </div>
        </main>
    )
}

export default Login;