import React from 'react';
import { useLocation } from "react-router-dom";

function SearchForm({ clearValue, onSubmit, onSubmitSaved, isEnabled, searchWordValue, changeButtonState, isEnabledSaved, changeButtonSavedState, savedSearchWordValue }) {

  const [formValue, setFormValue] = React.useState({
    search: searchWordValue,
  });
  const [savedFormValue, setSavedFormValue] = React.useState({
    searchSaved: '',
  });
  const [errors, setErrors] = React.useState({});
  const [savedFormErrors, setSavedFormErrors] = React.useState({});

  const [validForm, setValidForm] = React.useState(false);
  const [savedValidForm, setSavedValidForm] = React.useState(false);
  const path = useLocation();

  React.useEffect(() => {
    if (path.pathname === "/saved-movies") {
      setSavedFormValue({ searchSaved: '' })
    }
  }, [path.pathname])

  //function clearValue() {
  //  setSavedFormValue({ searchSaved: '' })
  //}


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
    //e.preventDefault();
    const { name, value } = e.target;
    setErrors({ ...errors, [name]: e.target.validationMessage });
    setSavedFormValue({
      ...savedFormValue,
      [name]: value
    });
    //setValidForm(e.target.closest('form').checkValidity());
    setSavedValidForm(e.target.closest('form').checkValidity());
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({
      search: formValue.search,
    })
  }

  function handleSubmitSaved(e) {
    e.preventDefault();
    onSubmitSaved({
      searchSaved: savedFormValue.searchSaved,
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
        <form className="searchForm__form searchForm__form-saved-form">
          <div className="searchForm__icon"></div>
          <input id='saved-form-input' className="searchForm__input" onChange={handleChangeSaved} value={savedFormValue.searchSaved} placeholder="Поиск по сохраненным фильмам" maxLength="50" type="text" name="searchSaved" />
          <button className="searchForm__submit" onClick={handleSubmitSaved} type="submit" disabled={!savedValidForm}></button>
          <div className="searchForm__line"></div>
          <button
            onClick={changeButtonSavedState}
            className={`searchForm__button ${isEnabledSaved ? "searchForm__button_enabled" : ""}`}
            type="button"></button>
          <p className="searchForm__description">Короткометражки</p>
        </form>}
      {path.pathname === "/movies" ? <p className="searchForm__error">{errors.search}</p> : <div></div>}
    </section>
  );
}

export default SearchForm;