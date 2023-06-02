// import { IMG_URL } from './renderMovies' // okazuje się, że nie można wyeksportować i używać zmiennej w tym samym pliku
import { fetchID } from './fetchMovies';
// import { idToGenre } from './genres';
import { refs } from './refs';
import { watched, queue, setWatched, setQueue } from './localStorage';
import { makeMoviePoster } from './makeMoviePoster';
import { makeGenresList } from './genres';
import { reloadWatchedOnly, reloadQueueOnly } from './reloadLibrary';

// const IMG_URL = 'https://image.tmdb.org/t/p/w500'; // gupia kopia

//wyciągamy tylko definicję funkcji do innego pliku i robimy export, żeby użyć jej w innym
export function imageButtonClick(movie) {
  const modal = document.querySelector('#modal');

  // let moviePoster = '';
  // if (movie.poster_path === null) {
  //   moviePoster = new URL('../images/poster-none.png', import.meta.url);
  // } else {
  //   moviePoster = `${IMG_URL}${movie.poster_path}`;
  // }

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
    <div class="modal-content__movie-poster-container">
      <img class="modal-content__movie-poster" src="${makeMoviePoster(movie)}"/>
      </div>
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
        <li class="modal-content__list-result">${makeGenresList(movie)}</li>
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
  modal.addEventListener('click', handleEvent);

  const buttonModal = document.querySelector('.button-modal-close');
  buttonModal.addEventListener('click', handleModalClose);
  disableScroll();

  window.addEventListener('keydown', handleEvent);

  // reload library only after remove movie from watched or queue
  // function reloadLibOnly() {
  //   const currentPage = window.location.href;
  //   const libraryPage = document.getElementById('lib-link');

  //   if (currentPage == libraryPage.href) {
  //     location.reload();
  //   }
  // }

  // trailer -->
  function playTrailer() {
    fetchID(movie.id, '/videos')
      .then(videoData => {
        // console.log(videoData);

        const videosArray = videoData.results;
        // console.log(videosArray);
        const youtubeVideo = videosArray.find(
          video => video.site === 'YouTube' && video.name.includes('Trailer'),
        );
        if (youtubeVideo) {
          modalContent.classList.add('is-hidden-modal');
          const videoUrl = `https://www.youtube.com/embed/${youtubeVideo.key}`;
          // console.log(videoUrl);
          modal.innerHTML += `
          <div class="video-container">
            <iframe class="video-iframe" src="${videoUrl}" frameborder="0" allowfullscreen></iframe>
          </div>
        `;
        } else {
          buttonPoster.classList.add("modal-content__movie-poster-container__no-trailer");
        }
      })
      .catch(error => {
        console.error('Error fetching video data:', error);
      });
  }

  const buttonPoster = document.querySelector('.modal-content__movie-poster-container');
  buttonPoster.addEventListener('click', playTrailer);
  

  const modalContent = document.querySelector('.modal-content');

  // BEGIN OF LOCAL STORAGE
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
      // reloadLibOnly();
      reloadWatchedOnly();
      handleModalClose();
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
      // alert('here');
      // reloadLibOnly();
      reloadQueueOnly();
      handleModalClose();
      return;
    }

    queue.push(movie.id);
    setQueue(queue);
    queueBtn.textContent = 'remove from queue';
  }
  // END OF LOCAL STORAGE

  // sound effects
  const btnClickSound = document.querySelector('#btn-click-sound');
  watchedBtn.addEventListener('click', () => {
    btnClickSound.play();
  });
  queueBtn.addEventListener('click', () => {
    btnClickSound.play();
  });
}

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

function handleModalClose() {
  modal.innerHTML = '';
  modal.classList.add('is-hidden-modal');
  enableScroll();
  window.removeEventListener('keydown', handleEvent);
}

function handleEvent(event) {
  if (
    event.type === 'click' &&
    event.target.closest('.modal-content') === null &&
    event.target.closest('.button-modal-close') === null
  ) {
    modal.innerHTML = '';
    modal.classList.add('is-hidden-modal');
    enableScroll();
    window.removeEventListener('keydown', handleEvent);
  } else if (event.type === 'keydown' && event.key === 'Escape') {
    modal.innerHTML = '';
    modal.classList.add('is-hidden-modal');
    enableScroll();
    window.removeEventListener('keydown', handleEvent);
  }
}
