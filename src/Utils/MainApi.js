class Api {
    constructor({ baseUrl, headers }) {
        this._headers = headers;
        this._baseUrl = baseUrl;

    }

    _getResponseData(res) {
        if (!res.ok) {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
        return res.json();
    }

    getProfile() {
        return fetch(`${this._baseUrl}/users/me`, {
            method: "GET",
            credentials: 'include',
            headers: this._headers,
        })
            .then(this._getResponseData)
    }

    getMovies() {
        return fetch(`${this._baseUrl}/movies`, {
            credentials: 'include',
            headers: this._headers,
        })
            .then(this._getResponseData)
    }

    editProfile(name, email) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: "PATCH",
            credentials: 'include',
            headers: this._headers,
            body: JSON.stringify({
                name,
                email
            })
        })
            .then(this._getResponseData)
    }

    createMovie(data) {
        return fetch(`${this._baseUrl}/movies`, {
            method: "POST",
            credentials: 'include',
            headers: this._headers,
            body: JSON.stringify({
                country: data.country,
                director: data.director,
                duration: data.duration,
                year: data.year,
                description: data.description,
                image: `https://api.nomoreparties.co${data.image.url}`,
                trailerLink: data.trailerLink,
                thumbnail: `https://api.nomoreparties.co${data.image.formats.thumbnail.url}`,
                nameRU: data.nameRU,
                nameEN: data.nameEN,
                movieID: data.id,
            })
        })
            .then(this._getResponseData)
    }

    deleteMovie(id) {
        return fetch(`${this._baseUrl}/movies/${id}`, {
            method: "DELETE",
            credentials: 'include',
            headers: this._headers,
        })
            .then(this._getResponseData)
    }
}

const api = new Api({
    //baseUrl: 'http://localhost:3001',
    baseUrl: 'https://api.rwer9982.nomoredomains.monster',
    headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        //'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

export default api;