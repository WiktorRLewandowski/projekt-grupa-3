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
  galleryEl.innerHTML = '';
  dataMovies.forEach(movie => {
    const movieContainer = document.createElement('div');
    movieContainer.classList.add('gallery__movie-container');
    movieContainer.dataset.id = movie.id;
    movieContainer.innerHTML = `
    <img class="gallery__movie-poster" src="${IMG_URL}${movie.poster_path}"/>
    <h3 class="gallery__movie-title">${movie.title}</h3>
    <p class="gallery__movie-genres">${idToGenre(movie.genre_ids)}</p>`;
    galleryEl.appendChild(movieContainer);
  });
};
