import { refs } from './refs';
import { fetchSearch } from './fetchMovies';
import { renderMovies } from './renderMovies';

window.addEventListener('scroll', () => {
  let header = document.querySelector('.header');
  let containerHeader = document.querySelector('.header__container');
  let wrapper = document.querySelector('.btn__wrapper');

  containerHeader.classList.toggle('header__fixed-container', window.scrollY > 0);
  wrapper.classList.toggle('hidden', window.scrollY > 0);
  header.classList.toggle('header__fixed', window.scrollY > 0);
});

refs.formEl.addEventListener('submit', ev => {
  ev.preventDefault();
  refs.galleryEl.innerHTML = '';
  refs.errorEl.innerHTML = '';
  fetchSearch(refs.searchEl.value)
    .then(data => {
      if (data.results.length === 0) {
        refs.errorEl.innerHTML = 'SEARCH RESULT NOT SUCCESSFUL. ENTER THE CORRECT MOVIE NAME';
      }

      console.log(data.results);
      renderMovies(data.results);
    })
    .catch(error => console.log(error));
});
