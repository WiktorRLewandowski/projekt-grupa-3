// import { IMG_URL } from './renderMovies' // okazuje się, że nie można wyeksportować i używać zmiennej w tym samym pliku
import { fetchID } from './fetchMovies';
import { idToGenre } from './genres';
import { refs } from './refs';
import { watched, queue, setWatched, setQueue } from './localStorage';

const IMG_URL = 'https://image.tmdb.org/t/p/w500'; // gupia kopia

//wyciągamy tylko definicję funkcji do innego pliku i robimy export, żeby użyć jej w innym
export function imageButtonClick(movie) {
  const modal = document.querySelector('#modal');
  modal.innerHTML = `
      <div class="modal modal-content">
      <button type="button" class="button-modal-close">
      <svg
      xmlns="http://www.w3.org/2000/svg"
      width="11"
      height="11"
      viewBox="0 0 11 11"
      fill="none"
    >
      <path
        d="M11 1.10786L9.89214 0L5.5 4.39214L1.10786 0L0 1.10786L4.39214 5.5L0 9.89214L1.10786 11L5.5 6.60786L9.89214 11L11 9.89214L6.60786 5.5L11 1.10786Z"
        fill="black"
      />
    </svg>
    </button>
      <img class="modal-content__movie-poster" src="${IMG_URL}${movie.poster_path}"/>
        <h3 class="modal-content__movie-title">${movie.title}</h3>
        <ul class="modal-content__list">
        <div class="modal-content__list-box-1">
        <li>Vote / Votes</li>
        <li class="modal-content__list-result"><span class="text-transform-1">${Math.round(
          movie.vote_average,
        ).toFixed(1)}</span> / <span class="text-transform-2"> ${movie.vote_count}</span></li>

        </div>
        <div class="modal-content__list-box-2">
        <li>Popularity</li>
        <li class="modal-content__list-result">${Math.round(movie.popularity).toFixed(1)}</li>
        </div>
        <div class="modal-content__list-box-3">
        <li class="text-transform-li">Original Title</li>
        <li class="modal-content__list-result"><span class="text-transform-3">${
          movie.original_title
        }</span></li>
        </div>
        <div class="modal-content__list-box-4">
        <li>Genre</li>
        <li class="modal-content__list-result">${idToGenre(movie.genre_ids)}</li>
        </div>
        </ul>
        <h4 class="modal-content__movie-about">About</h4>
        <p class="modal-content__text">${movie.overview}</p>
        <div class="button-modal">
      <button type="button" class="button-modal__watched">add to watched</button>
      <button type="button" class="button-modal__queue">add to queue</button>
      </div>
      </div>`;
  modal.classList.remove('is-hidden-modal');

  const buttonModal = document.querySelector('.button-modal-close');
  buttonModal.addEventListener('click', handleEvent);
  disableScroll();

  // add to watched btn -->
  addWatchedClick();

  function addWatchedClick() {
    const watchedBtn = document.querySelector('.button-modal__watched');
    if (watched.includes(movie.id)) {
      watchedBtn.textContent = 'remove from watched';
      return;
    }
    watchedBtn.textContent = 'add to watched';
  }

  const watchedBtn = document.querySelector('.button-modal__watched');
  watchedBtn.addEventListener('click', watchedToStorage);

  function watchedToStorage() {
    if (watched.includes(movie.id)) {
      watched.splice(watched.indexOf(movie.id), 1);
      setWatched(watched);
      watchedBtn.textContent = 'add to watched';
      return;
    }

    watched.push(movie.id);
    setWatched(watched);
    watchedBtn.textContent = 'remove from watched';
  }

  //add to queue btn -->
  addQueueClick();

  function addQueueClick() {
    const queueBtn = document.querySelector('.button-modal__queue');
    if (queue.includes(movie.id)) {
      queueBtn.textContent = 'remove from Queue';
      return;
    }
    queueBtn.textContent = 'add to queue';
  }

  const queueBtn = document.querySelector('.button-modal__queue');
  queueBtn.addEventListener('click', queueToStorage);

  function queueToStorage() {
    if (queue.includes(movie.id)) {
      queue.splice(queue.indexOf(movie.id), 1);
      setQueue(queue);
      queueBtn.textContent = 'add to queue';
      return;
    }

    queue.push(movie.id);
    setQueue(queue);
    queueBtn.textContent = 'remove from queue';
  }
}

window.addEventListener('keydown', handleEvent);

let scrollPosition = 0;
const body = document.body;

function disableScroll() {
  scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  body.classList.add('lock-scroll', 'lock-scroll-modal-open');
}

function enableScroll() {
  body.classList.remove('lock-scroll', 'lock-scroll-modal-open');
  window.scrollTo(0, scrollPosition);
}

function handleEvent(event) {
  if (event.type === 'click' || (event.type === 'keydown' && event.key === 'Escape')) {
    modal.innerHTML = '';
    modal.classList.add('is-hidden-modal');
    enableScroll();
  }
}

refs.galleryEl.addEventListener('click', ev => {
  if (ev.target.matches('figure')) {
    console.log(ev.target.dataset.id);
  }
  console.log(ev.target);
});
