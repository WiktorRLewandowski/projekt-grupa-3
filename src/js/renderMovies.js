import { refs } from './refs';
import { imageButtonClick } from './modal'; //importujemy funkcję, żeby użyć jej w tym pliku
import { idToGenre } from './genres';

const { galleryEl } = refs;

/////////////////// CIEKAWOSTKA - START ///////////////////////
// galleryEl.style.backgroundImage = `url(${require('../images/demo.jpg')})`; // działa w parcelu
// galleryEl.style.backgroundImage = 'url(../images/demo.jpg)';               // działa w vanilla
/////////////////// CIEKAWOSTKA - END ///////////////////////

const IMG_URL = 'https://image.tmdb.org/t/p/w500';

/////////// ZOSTAWIAM DLA PODGLĄDU STARA WERSJA idToGenre - START ///////////
// const idToGenre = genresArray => {
//   let genresList = '';
//   genresArray.forEach(
//     id =>
//       (genresList += `${
//         genres.filter(genre => {
//           //   console.log(genre);
//           return genre.id === id;
//         })[0].name
//       }, `),
//   );
//   genresList = genresList.slice(0, -2);
//   return genresList;
// };
/////////// ZOSTAWIAM DLA PODGLĄDU STARA WERSJA idToGenre - END ///////////

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
    const movieContainer = document.createElement('figure');
    movieContainer.classList.add('gallery__movie-container');
    movieContainer.dataset.id = movie.id;
    let moviePoster = '';
    if (movie.poster_path === null) {
      // moviePoster = './images/poster-none.png';
      // moviePoster = `url(${require('../images/poster-none.png')})`;
      moviePoster = new URL('../images/poster-none.png', import.meta.url);
    } else {
      moviePoster = `${IMG_URL}${movie.poster_path}`;
    }
    movieContainer.innerHTML = `
    <img class="gallery__movie-poster" src="${moviePoster}" alt="${movie.title} poster" 
    width="500" height="auto"/>
    <h3 class="gallery__movie-title">${movie.title}</h3>
    <p class="gallery__movie-genres">
    ${idToGenre(movie.genre_ids)} | ${movie.release_date.slice(0, 4)}</p>`;
    galleryEl.appendChild(movieContainer);

    const imageButtons = movieContainer.querySelectorAll('.gallery__movie-poster');
    imageButtons.forEach(imageButton => {
      imageButton.addEventListener('click', () => imageButtonClick(movie)); // tu już była sama deklaracja, definicje można było eksportować
    });
  });
};
