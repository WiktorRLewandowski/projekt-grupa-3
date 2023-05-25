import { refs } from './refs';
import { imageButtonClick } from './modal'; //importujemy funkcję, żeby użyć jej w tym pliku
import { idToGenre } from './genres';

const { galleryEl } = refs;

import { watched, queue } from './localStorage';
import { renderMovies } from './renderMovies';

const IMG_URL = 'https://image.tmdb.org/t/p/w500';

const watchedBtnLib = document.querySelector('#watched-library');
const libEmptyImg = document.querySelector('.library-empty-img');

watchedBtnLib.addEventListener('click', watchedBtnLibClick);

function watchedBtnLibClick() {
  const movieId = watched;
  if (watched.length === 0) {
    libEmptyImg.classList.remove('is-hidden');
    return;
  } else {
    // Display the data in the console
    showWatchedMovies(movieId);
  }
}
