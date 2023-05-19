import axios from 'axios';
import { refs } from './refs';

const { galleryEl, observerGalleryEl } = refs;

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

observerGalleryEl.style.display = 'none';

let wasFirstFech = false;
const options = {
  rootMargin: '0px',
  threshold: 0.1,
};

const galleryObserver = new IntersectionObserver(async entries => {}, options);
galleryObserver.observe(observerGalleryEl);

const trendingURL = `${URL}trending/movie/week?${searchParams()}`;

const renderMovies = dataMovies => {
  galleryEl.innerHTML = '';
  dataMovies.forEach(movie => {
    const movieContainer = document.createElement('div');
    movieContainer.classList.add('gallery__movie-container');
    movieContainer.dataset.id = movie.id;
    movieContainer.innerHTML = `
  <img class="gallery__movie-poster" src="${IMG_URL}${movie.poster_path}"/>
  <h3 class="gallery__movie-title">${movie.title}</h3>
  <p class="gallery__movie-genres">${movie.genre_ids}</p>`;
    galleryEl.appendChild(movieContainer);
    
    
    const imageButtons = movieContainer.querySelectorAll(".gallery__movie-poster");
    imageButtons.forEach(imageButton => {
      imageButton.addEventListener("click", () => imageButtonClick(movie));
    });
  });
};


function imageButtonClick(movie) {
  const modal = document.querySelector("#modal");
  modal.innerHTML = `
    <div class="modal">
      <h3 class="gallery__movie-title">${movie.title}</h3>
      <button type="button" class="button__modal">Close</button>
    </div>`;
const buttonModal = document.querySelector(".button__modal");
const buttonModalClick = (event) => {
  modal.innerHTML = " ";
}
buttonModal.addEventListener("click", buttonModalClick);
}



const fetchMovies = async url => {
  try {
    const response = await axios.get(url);
    console.log(response);
    totalPages = response.data.total_pages;
    renderMovies(response.data.results);
  } catch (error) {
    console.log(error);
  }
};

fetchMovies(trendingURL);

