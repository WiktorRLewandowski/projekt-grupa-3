import axios from 'axios';
import { refs } from './refs';

const { galleryEl } = refs;

const URL = 'https://api.themoviedb.org/3/';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const KEY = '79ea8908d5d0aaabd49d601dd35d503a';
const LANG = 'en-US';

let page = 1;
let totalPages = 0;
let queryValue = '';

const searchParams = () =>
  new URLSearchParams({
    query: queryValue,
    api_key: KEY,
    language: LANG,
    include_adult: false,
    page: page,
  });

const trendingURL = `${URL}trending/movie/week?${searchParams()}`;

const renderMovies = dataMovies => {
  galleryEl.innerHTML = '';
  dataMovies.forEach(movie => {
    //   createBox(movie);
    const movieContainer = document.createElement('div');
    movieContainer.classList.add('gallery__movie-container');
    movieContainer.dataset.id = movie.id;
    movieContainer.innerHTML = `
  <img class="gallery__movie-poster" src="${IMG_URL}${movie.poster_path}"/>
  <h3 class="gallery__movie-title">${movie.title}</h3>
  <p class="gallery__movie-genres">${movie.genre_ids}</p>`;
    galleryEl.appendChild(movieContainer);
  });
};

const fetchMovies = async url => {
  try {
    const response = await axios.get(url);
    console.log(response);
    totalPages = response.data.total_pages;
    renderMovies(response.data.results);
    // createPagination();
  } catch (error) {
    console.log(error);
  }
};

fetchMovies(trendingURL);
