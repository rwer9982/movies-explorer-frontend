import React from 'react';
import { Link, } from 'react-router-dom';
import { CurrentUserContext } from '../../../contexts/CurrentUserContext';
import validator from "validator";

function ProfilePage({ signOut, userMail, userName, onSubmit }) {

    const [inputInactive, setInputInactive] = React.useState(true);

    const CurrentUser = React.useContext(CurrentUserContext);
    //console.log(CurrentUser)

    const [formValue, setFormValue] = React.useState({
        email: '',
        name: '',
    });
    const [errors, setErrors] = React.useState({});
    const [validForm, setValidForm] = React.useState(false);
    const [changeMessage, setChangeMessage] = React.useState('');
    

    function openInputs(e) {
        e.preventDefault();
        setFormValue({ email: CurrentUser.email, name: CurrentUser.name })
        setInputInactive(!inputInactive);
        setChangeMessage('');
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setErrors({ ...errors, [name]: e.target.validationMessage });
        setFormValue({
            ...formValue,
            [name]: value
        });

        setValidForm(true);
        if (name === "name" && CurrentUser.name === value) {
            setErrors({ ...errors, name: "имя совпадает с существующим" });
            return setValidForm(false)
        } if (name === "email" && CurrentUser.email === value) {
            setErrors({ ...errors, email: "email совпадает с существующим" });
            return setValidForm(false)
        } if (name === "email" && !validator.isEmail(value)) {
            setErrors({ ...errors, email: "Введите корректный адрес электронной почты" });
            return setValidForm(false);
        } if (name === "email" && validator.isEmail(value)) {
            setValidForm(e.target.closest('form').checkValidity());
        } if (errors.email === "") {
            setValidForm(e.target.closest('form').checkValidity());
        }
        setValidForm(e.target.closest('form').checkValidity());
    }

    function handleSubmit(e) {
        e.preventDefault();
        onSubmit({
            name: formValue.name,
            email: formValue.email,
        })
        setInputInactive(true);
        setErrors({ name: '', email: '' })
        setValidForm(false);
        setChangeMessage('данные успешно обновлены');
    }

    return (
        <section className="profile-page">
            <h2 className="profile-page__header">Привет, {userName}!</h2>
            <form className="profile-page__form">
                <div className="profile-page__container">
                    <p className="profile-page__title">Имя</p>
                    <input className={`profile-page__value ${!inputInactive ? "profile-page__value_enabled" : ""}`} value={formValue.name} name="name" onChange={handleChange} placeholder={userName} disabled={inputInactive} type="text" minLength="2" maxLength="30" required></input>
                </div>
                <p className="register__span">{errors.name}</p>
                <div className="profile-page__container">
                    <p className="profile-page__title">E-mail</p>
                    <input className={`profile-page__value ${!inputInactive ? "profile-page__value_enabled" : ""}`} value={formValue.email} name="email" onChange={handleChange} placeholder={userMail} disabled={inputInactive} type="email" required></input>
                </div>
                <p className="register__span">{errors.email}</p>
                <span className='register__message'>{changeMessage}</span>
                <button onClick={openInputs} className={`profile-page__button ${!inputInactive ? "profile-page__button_invisible" : ""}`} type="button">Редактировать</button>
                <button onClick={handleSubmit} className={`profile-page__submit ${inputInactive ? "profile-page__button_invisible" : ""} profile-page__submit ${!validForm ? "profile-page__submit_disabled" : ""}`} disabled={!validForm} type="submit">Сохранить</button>
                <Link onClick={signOut} to="/" className="profile-page__link">Выйти из аккаунта</Link>
            </form>

        </section>

    );
}

export default ProfilePage;