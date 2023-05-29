const IMG_URL = 'https://image.tmdb.org/t/p/w500';

export function makeMoviePoster(movie) {
  let moviePoster = '';
  if (movie.poster_path === null) {
    return (moviePoster = new URL('../images/poster-none.png', import.meta.url));
  } else {
    return (moviePoster = `${IMG_URL}${movie.poster_path}`);
  }
}
