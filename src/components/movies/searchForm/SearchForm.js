import React from 'react';
import { useLocation } from "react-router-dom";

function SearchForm({ onSubmit, isEnabled, searchWordValue, changeButtonState, isEnabledSaved, changeButtonSavedState }) {

  const [formValue, setFormValue] = React.useState({
    search: searchWordValue,
  });
  const [savedFormValue, setSavedFormValue] = React.useState({
    search: '',
  });
  const [errors, setErrors] = React.useState({});
  const [validForm, setValidForm] = React.useState(false);
  const path = useLocation();


  const handleChange = (e) => {
    const { name, value } = e.target;
    setErrors({ ...errors, [name]: e.target.validationMessage });
    setFormValue({
      ...formValue,
      [name]: value
    });

    setValidForm(e.target.closest('form').checkValidity());
    if (name === "search" && !value) {
      setErrors({ ...errors, search: "Нужно ввести ключевое слово длиной не менее 1 символа" });
    }
  }

  const handleChangeSaved = (e) => {
    const { name, value } = e.target;
    setErrors({ ...errors, [name]: e.target.validationMessage });
    setSavedFormValue({
      ...savedFormValue,
      [name]: value
    });
    setValidForm(e.target.closest('form').checkValidity());
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({
      search: formValue.search,
    })
  }

  function handleSubmitSaved(e) {
    e.preventDefault();
    onSubmit({
      search: savedFormValue.search,
    })
  }

  return (
    <section className="searchForm">
      {path.pathname === "/movies" ?
        <form className="searchForm__form">
          <div className="searchForm__icon"></div>
          <input className="searchForm__input" onChange={handleChange} value={formValue.search} placeholder="Фильм" minLength="1" maxLength="50" type="text" name="search" required />
          <button className="searchForm__submit" onClick={handleSubmit} type="submit" disabled={!validForm}></button>
          <div className="searchForm__line"></div>
          <button
            //onClick={changeButtonState}
            onClick={changeButtonState}
            //className={`searchForm__button ${!shortFilmsButtonEnabled ? "searchForm__button_enabled" : ""}`}
            className={`searchForm__button ${isEnabled ? "searchForm__button_enabled" : ""}`}
            type="button"></button>
          <p className="searchForm__description">Короткометражки</p>
        </form>
        :
        <form className="searchForm__form">
          <div className="searchForm__icon"></div>
          <input className="searchForm__input" onChange={handleChangeSaved} value={savedFormValue.search} placeholder="Поиск по сохраненным фильмам" minLength="1" maxLength="50" type="text" name="search" required />
          <button className="searchForm__submit" onClick={handleSubmitSaved} type="submit" disabled={!validForm}></button>
          <div className="searchForm__line"></div>
          <button
            onClick={changeButtonSavedState}
            className={`searchForm__button ${isEnabledSaved ? "searchForm__button_enabled" : ""}`}
            type="button"></button>
          <p className="searchForm__description">Короткометражки</p>
        </form>}
      <p>{errors.search}</p>
    </section>
  );
}
//<p>{!validForm ? "Нужно ввести ключевое слово длиной не менее 2 символов" : ""}</p>
export default SearchForm;