// NEEDED IMPORTS:
import { watched, queue } from './localStorage';
import { fetchID } from './fetchMovies';
import { renderMovies } from './renderMovies';

// VARS:
// BTNS:
const watchedBtnLib = document.querySelector('#watched-library');
const queueBtnLib = document.querySelector('#queue-library');
const libLink = document.querySelector('#lib-link');

// HTML elems:
// const libEmptyImg = document.querySelector('.library-empty-img');
const watchedEmpty = document.querySelector('.watched-empty');
const queueEmpty = document.querySelector('.queue-empty');

const divGallery = document.querySelector('#gallery');

// EVENTLISTNERS:
watchedBtnLib.addEventListener('click', watchedBtnLibClick);
queueBtnLib.addEventListener('click', queueBtnLibClick);

// libLink.addEventListener('click', () => {
//   alert('link run');
// });

window.addEventListener('load', () => {
  // console.log('load run');
  watchedBtnLib.classList.add('..active');
  watchedBtnLibClick();
});

// WATCHED BTN RUN
// if empty shows travolta, shows watched
function watchedBtnLibClick() {
  // const movieId = watched;
  if (watched.length === 0) {
    watchedEmpty.classList.remove('is-hidden');
  }
  if ((divGallery.innerHTML = queue)) {
    divGallery.innerHTML = '';
  }
  showWatchedMovies(watched);
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
      .catch(console.error('chuj nie działa'));
  });
}

// QUEUE BTN RUN
// if empty shows sad micheal, shows queue
function queueBtnLibClick() {
  if (queue.length === 0) {
    queueEmpty.classList.remove('is-hidden');
  }
  if ((divGallery.innerHTML = watched)) {
    divGallery.innerHTML = '';
  }
  showQueueMovies(queue);
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
      .catch(console.error('chuj nie działa'));
  });
}
