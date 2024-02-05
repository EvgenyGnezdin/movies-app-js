import { getMovies, searchMovies } from './getMovies'

import '../scss/style.scss'

window.addEventListener('DOMContentLoaded', () => {
getMovies()


  //Функция поиска фильмов
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    searchMovies(document.querySelector('.header__search-input').value)
  })
})




