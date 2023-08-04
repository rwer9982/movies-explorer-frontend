class MoviesApi {
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

    getMovies() {
        return fetch(`${this._baseUrl}`, {
            //credentials: 'include',
            headers: this._headers,
        })
            .then(this._getResponseData)
    }
}

const moviesApi = new MoviesApi({
    baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
    //baseUrl: 'https://api.rwer9982.nomoredomains.monster',
    headers: {
        //Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        //'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

export default moviesApi;