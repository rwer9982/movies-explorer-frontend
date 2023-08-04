import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as auth from '../../Utils/Auth';
import validator from "validator";

const Register = ({ loggedIn, handleLogin }) => {

    const [formValue, setFormValue] = useState({
        email: '',
        password: '',
        name: '',
    });

    const [errors, setErrors] = React.useState({
        email: '',
        password: '',
        name: '',
    });
    const [validForm, setValidForm] = React.useState(false);
    const [validEmail, setValidEmail] = React.useState(false);

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

        if (name === "email" && !validator.isEmail(value)) {
            setErrors({ ...errors, email: "Введите корректный адрес электронной почты" });
            return setValidForm(false);
        } if (name === "email" && validator.isEmail(value)) {
            setValidForm(e.target.closest('form').checkValidity());
        } if (errors.email === "") {
            setValidForm(e.target.closest('form').checkValidity());
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password, name } = formValue;
        auth.register(email, password, name)
            .then((res) => {
                console.log(res);
            })
            .then(() => {
                auth.authorize(email, password)
                    .then((data) => {
                        if (data.token) {
                            localStorage.setItem('jwt', data.token);
                            handleLogin();
                            navigate('/movies', { replace: true });
                        }
                    })
                    .catch(err => console.log(err));
            })
            .catch(function (err) {
                console.log('Что-то пошло не так')
            })
        //.finally(() => navigate('/movies', { replace: true }))
    }

    return (
        <main>
            <div className="register">
                <Link to="/" className="register__logo"></Link>
                <p className="register__header">
                    Добро пожаловать!
                </p>
                <form onSubmit={handleSubmit} className="register__form">
                    <p className="register__input-name">Имя</p>
                    <input value={formValue.name} onChange={handleChange} className="register__input" required id="name" name="name" minLength="2" maxLength="30" type="text" />
                    <p className="register__span">{errors.name}</p>
                    <p className="register__input-name">Email</p>
                    <input value={formValue.email} onChange={handleChange} className="register__input" required id="email" name="email" type="email" />
                    <p className="register__span">{errors.email}</p>
                    <p className="register__input-name">Пароль</p>
                    <input value={formValue.password} onChange={handleChange} className="register__input" required id="password" minLength="8" name="password" type="password" />
                    <p className="register__span">{errors.password}</p>
                    <button onSubmit={handleSubmit} className={`register__submit ${!validForm ? "register__submit_disabled" : ""}`} disabled={!validForm} type="submit">Зарегистрироваться</button>
                </form>
                <div className="register__link-container">
                    <p className="register__link-header">Уже зарегистрированы?</p>
                    <Link to="/signin" className="register__link">Войти</Link>
                </div>
            </div>
        </main>
    )
}

export default Register;