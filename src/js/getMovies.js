export const getMovies = async () => {
    let movie = document.querySelector('.movie')
    const URL_POPULAR = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_POPULAR_MOVIES';
    let OPTIONS_POPULAR = {
        method: 'GET',
        headers: {
            'X-API-KEY': '1f08000a-4e4a-415b-b666-b66a9583fc7f',
            'Content-Type': 'application/json',
        },
    }
    let res = await fetch(URL_POPULAR, OPTIONS_POPULAR)
    let content = await res.json()
    content = content.items
    movie.innerHTML = ''
    for (let key in content) {
        let movieEl = document.createElement('div')
        movieEl.classList.add('movie__list-item')
        movieEl.innerHTML = 
        `
            <img src="${content[key].posterUrl}" alt="movie-poster">
        `
        movieEl.addEventListener("click", () => openModal(content[key]))
        movie.appendChild(movieEl)
        console.log(content[key])
    }
}

export const searchMovies = async (movies) => {
    const URL_SEARCH = `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${movies}`
    let OPTIONS_SEARCH = {
        method: 'GET',
        headers: {
            'X-API-KEY': '1f08000a-4e4a-415b-b666-b66a9583fc7f',
            'Content-Type': 'application/json',
        },
    }
    let res = await fetch(URL_SEARCH, OPTIONS_SEARCH)
    let content = await res.json()
    content = content.films
    const movie = document.querySelector('.movie')
    movie.innerHTML = ''
    for (let key in content) {
        let movieEl = document.createElement('div')
        movieEl.classList.add('movie__list-item')
        movieEl.innerHTML = 
        `
            <img src="${content[key].posterUrl}" alt="movie-poster" class='movie__poster'>
        `
        movieEl.addEventListener('click', () => openModal(content[key]))
        movie.appendChild(movieEl)
        console.log(content[key]);
    }
    }

let modal = document.querySelector('.modal')
const openModal = (movies) => {
    modal.style.display = 'flex'
    modal.innerHTML = 
    `
        <div class="modal__container">
            <div class="modal__block">
                <div class="modal__rate">Рейтинг ${movies.ratingKinopoisk === null || movies.ratingKinopoisk === undefined ? " " : movies.ratingKinopoisk}${movies.rating === undefined || movies.rating === "null" ? '' : movies.rating}</div>
                <div class="modal__title">${movies.nameRu}</div> 
                <div class="modal__close">Закрыть</div>
            </div>
        </div>
    `
    const img = document.querySelector('.modal__container')
    img.style.cssText = `
        background: url(${movies.posterUrl}); 
        background-repeat: no-repeat;
        background-size: cover;
    `
    modal.style.backgroundColor = 'rgba(0,0,0,0.6)'

    const closeModal = document.querySelector('.modal__close')
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none'
    })
    modal.addEventListener('click', () => {
        modal.style.display = 'none'
    })
}






