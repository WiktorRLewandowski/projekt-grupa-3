import { refs } from './refs';
import { genres } from './genres';

const { galleryEl, observerGalleryEl } = refs;

const IMG_URL = 'https://image.tmdb.org/t/p/w300';

const idToGenre = genresArray => {
  let genresList = '';
  genresArray.forEach(
    id =>
      (genresList += `${
        genres.filter(genre => {
          //   console.log(genre);
          return genre.id === id;
        })[0].name
      }, `),
  );
  return genresList;
};

///////////// ZOSTAWIAM DLA PODGLĄDU CO DOSTAJEMY po kazdym foreach'u  - START /////////
// const idToGenre = genresArray => {
//   let genresList = '';
//   genresArray.forEach(id =>
//     console.log(
//       genres.filter(genre => {
//         //   console.log(genre);
//         return genre.id === id;
//       }),
//     ),
//   );
//   console.log(genresList);
//   return genresList;
// };
///////////// ZOSTAWIAM DLA PODGLĄDU CO DOSTAJEMY po kazdym foreach'u  - END /////////

export const renderMovies = dataMovies => {
  // galleryEl.innerHTML += '';
  dataMovies.forEach(movie => {
    const movieContainer = document.createElement('div');
    movieContainer.classList.add('gallery__movie-container');
    movieContainer.dataset.id = movie.id;
    movieContainer.innerHTML = `
    <img class="gallery__movie-poster" src="${IMG_URL}${movie.poster_path}"/>
    <h3 class="gallery__movie-title">${movie.title}</h3>
    <p class="gallery__movie-genres">${idToGenre(movie.genre_ids)}</p>`;
    galleryEl.appendChild(movieContainer);

    const imageButtons = movieContainer.querySelectorAll('.gallery__movie-poster');
    imageButtons.forEach(imageButton => {
      imageButton.addEventListener('click', () => imageButtonClick(movie));
    });
  });

  function imageButtonClick(movie) {
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
        ).toFixed(1)}</span> / ${movie.vote_count}</li>
        </div>
        <div class="modal-content__list-box-2">
        <li>Popularity</li>
        <li class="modal-content__list-result">${Math.round(movie.popularity).toFixed(1)}</li>
        </div>
        <div class="modal-content__list-box-3">
        <li class="text-transform-li">Original Title</li>
        <li class="modal-content__list-result"><span class="text-transform-2">${
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
    modal.classList.toggle('is-hidden-modal');
    const buttonModal = document.querySelector('.button-modal-close');
    const buttonModalClick = event => {
      modal.innerHTML = ' ';
      modal.classList.toggle('is-hidden-modal');
    };
    buttonModal.addEventListener('click', buttonModalClick);
  }
};
