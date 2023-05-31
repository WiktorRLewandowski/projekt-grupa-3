// NEEDED IMPORTS:
import { refs } from './refs';
import { refs } from './refs';
import { watched, queue } from './localStorage';
import { fetchID } from './fetchMovies';
import { renderMovies } from './renderMovies';
// import { libraryFlag } from './gallery';

const observerLib = document.getElementById('observer-gallery');

observerLib.style.display = 'none';

let startIndex = 0;
const itemsPerPage = 10;
// let libraryFlag = true;
libraryFLG = true;
let watchQueFlag = true;

let localStorageData = localStorage.getItem('watched');
let movies = JSON.parse(localStorageData) || [];
console.log(movies);

const optionsLib = {
  // rootMargin: '0px',
  // threshold: 0.1,
  rootMargin: '550px',
};

const libObs = new IntersectionObserver(async entries => {
  if (entries[0].isIntersecting && libraryFLG === true && watchQueFlag === true) {
    console.log('obserwujeeeeee');

    let moviesToShow = movies.slice(startIndex, startIndex + itemsPerPage);
    console.log(moviesToShow);

    showWatchedMovies(moviesToShow);
    console.log(startIndex);
    startIndex += itemsPerPage;
    if (startIndex >= movies.length) {
      // libObs.disconnect();
    }
  }
  // else if (entries[0].isIntersecting && libraryFLG === true && watchQueFlag === false) {
  //   console.log('obserwujeeeeee');

  //   localStorageData = localStorage.getItem('queue');
  //   movies = JSON.parse(localStorageData) || [];

  //   let moviesToShow = movies.slice(startIndex, startIndex + itemsPerPage);
  //   console.log(moviesToShow);

  //   showQueueMovies(moviesToShow);
  //   console.log(startIndex);
  //   startIndex += itemsPerPage;
  //   if (startIndex >= movies.length) {
  //     // libObs.disconnect();
  //   }
  // }
}, optionsLib);

libObs.observe(observerLib);
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
    console.log('home page works');
  }

  if (currentPage == libraryPage) {
    console.log('library works?');

    watchedBtnLibClick();
    queueBtnLib.innerHTML = `QUEUE: ${queue.length}`;
  }
  console.log('load run');
});

// on open library 'watched' is active
queueBtnLib.addEventListener('click', () => {
  watchedBtnLib.classList.remove('active');
});

// WATCHED BTN RUN
// if empty shows travolta, shows watched
function watchedBtnLibClick() {
  startIndex = 0;
  watchQueFlag = true;
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
  // showWatchedMovies(watched);
  watchedBtnLib.innerHTML = `WATCHED: ${watched.length}`;
  toggleSound.play();
}

// get watched form local storage and shows
function showWatchedMovies(arr) {
  arr.forEach(id => {
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
  startIndex = 0;
  watchQueFlag = false;
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

setTimeout(() => {
  observerLib.style.display = 'initial';
}, 200);

export { watchedBtnLibClick, queueBtnLibClick };
