import { refs } from './refs';
import { fetchMovies, fetchSearch, fetchTrending } from './fetchMovies';
import { renderMovies } from './renderMovies';

window.addEventListener('scroll', () => {
  let header = document.querySelector('.header');
  let containerHeader = document.querySelector('.header__container');
  let wrapper = document.querySelector('.btn__wrapper');
  let navigation = document.querySelector('.navigation');
  let headerWrapper = document.querySelector('.header-wrapper');

  header.classList.toggle('header__fixed', window.scrollY > 0);
  containerHeader.classList.toggle('header__fixed-container', window.scrollY > 0);
  navigation.classList.toggle('navigation__fixed', window.scrollY > 0);
  wrapper.classList.toggle('hidden', window.scrollY > 0);
  headerWrapper.classList.toggle('header-wrapper__fixed', window.scrollY > 0);
});

refs.formEl.addEventListener('submit', ev => {
  ev.preventDefault();
  refs.galleryEl.innerHTML = '';
  refs.errorEl.innerHTML = '';
  fetchSearch(refs.searchEl.value)
    .then(data => {
      if (data.results.length === 0) {
        refs.errorEl.innerHTML = 'SEARCH RESULT NOT SUCCESSFUL. ENTER THE CORRECT MOVIE NAME';
        fetchTrending();
      }
      renderMovies(data.results);
    })
    .catch(error => console.log(error));
});