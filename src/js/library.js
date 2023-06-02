// NEEDED IMPORTS:
import { refs } from './refs';
import { watched, queue } from './localStorage';
import { fetchID } from './fetchMovies';
import { renderMovies } from './renderMovies';

// VARS:
// BTNS:
const watchedBtnLib = document.querySelector('.button-watched');
const queueBtnLib = document.querySelector('.button-queue');

// HTML elems:
const libWatched = document.querySelector('.library-watched');
const libQueue = document.querySelector('.library-queue');
const divGallery = document.querySelector('#gallery');
const watchedGIF = document.querySelector('.travolta-gif');
const queueGIF = document.querySelector('.scott-gif');
const toggleSound = document.querySelector('#toggle-btn');

// EVENTLISTNERS:
watchedBtnLib.addEventListener('click', watchedBtnLibClick);
queueBtnLib.addEventListener('click', queueBtnLibClick);

// on load library watched is showed
window.addEventListener('load', () => {
  const currentPage = window.location.href;
  const libraryPage = document.getElementById('lib-link');
  const homePage = document.getElementById('home-link');

  if (currentPage == homePage) {
    // console.log('home page works');
  }

  if (currentPage == libraryPage) {
    // console.log('library works?');
    watchedBtnLibClick();
    queueBtnLib.innerHTML = `QUEUE: ${queue.length}`;
  }
  // console.log('load run');
});

// on open library 'watched' is active
queueBtnLib.addEventListener('click', () => {
  watchedBtnLib.classList.remove('active');
});

// WATCHED BTN RUN
// if empty shows travolta, shows watched
function watchedBtnLibClick() {
  if (watched.length === 0) {
    libQueue.classList.add('is-hidden');
    libWatched.classList.remove('is-hidden');
    // watchedGIF.scrollIntoView();
    // divGallery.classList.add('.is-hidden');
  }
  if ((divGallery.innerHTML = queue)) {
    divGallery.innerHTML = '';
    libQueue.classList.add('is-hidden');
  }
  showWatchedMovies(watched);
  watchedBtnLib.innerHTML = `WATCHED: ${watched.length}`;
  toggleSound.play();
}

// get watched form local storage and shows
function showWatchedMovies() {
  watched.forEach(id => {
    fetchID(id)
      .then(data => {
        const genreArr = data.genres.map(genre => genre.id);
        data.genre_ids = genreArr;
        renderMovies([data]);
      })
      .catch(error => console.log(error));
  });
}

// QUEUE BTN RUN
// if empty shows michael, shows queue
function queueBtnLibClick() {
  if (queue.length === 0) {
    libWatched.classList.add('is-hidden');
    libQueue.classList.remove('is-hidden');
    // queueGIF.scrollIntoView();
    // divGallery.classList.add('.is-hidden');
  }
  if ((divGallery.innerHTML = watched)) {
    divGallery.innerHTML = '';
    libWatched.classList.add('is-hidden');
  }
  showQueueMovies(queue);
  queueBtnLib.innerHTML = `QUEUE: ${queue.length}`;
  toggleSound.play();
}

// get queue mvoies form local storage and shows
function showQueueMovies() {
  queue.forEach(id => {
    fetchID(id)
      .then(data => {
        const genreArr = data.genres.map(genre => genre.id);
        data.genre_ids = genreArr;
        renderMovies([data]);
      })
      .catch(error => console.log(error));
  });
}

export { watchedBtnLibClick, queueBtnLibClick };

