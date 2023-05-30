import { watchedBtnLibClick, queueBtnLibClick } from './library';

const currentPage = window.location.href;
const libraryPage = document.getElementById('lib-link');
const homePage = document.getElementById('home-link');
const watchedBtnLib = document.querySelector('.button-watched');
const queueBtnLib = document.querySelector('.button-queue');

function reloadWatchedOnly() {
  if (currentPage == homePage) {
    //   console.log('currentPage run');
    watchedBtnLib.classList.add('watched-hidden');
  }
  if (currentPage == libraryPage.href) {
    watchedBtnLibClick();
  }
}

function reloadQueueOnly() {
  if (currentPage == homePage) {
    queueBtnLib.classList.add('queue-hidden');
  }
  if (currentPage == libraryPage.href) {
    queueBtnLibClick();
  }
}

export { reloadWatchedOnly, reloadQueueOnly };
