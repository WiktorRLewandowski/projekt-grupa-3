import { refs } from './refs';
import { fetchMovies, fetchSearch, fetchTrending } from './fetchMovies';
import { renderMovies } from './renderMovies';

let lastScrollTop = 0;
let header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    header.style.top = '-228px';
    // header.style.top = '-100%';
  } else {
    header.style.top = '0';
  }
  lastScrollTop = scrollTop;
  //   let header = document.querySelector('.header');
  //   let containerHeader = document.querySelector('.header__container');
  //   let wrapper = document.querySelector('.btn__wrapper');
  //   let navigation = document.querySelector('.navigation');
  //   let headerWrapper = document.querySelector('.header-wrapper');

  //   header.classList.toggle('header__fixed', window.scrollY > 0);
  //   containerHeader.classList.toggle('header__fixed-container', window.scrollY > 0);
  //   navigation.classList.toggle('navigation__fixed', window.scrollY > 0);
  //   wrapper.classList.toggle('hidden', window.scrollY > 0);
  //   headerWrapper.classList.toggle('header-wrapper__fixed', window.scrollY > 0);
});

refs.formEl.addEventListener('submit', searchHandler);

export let queryMem = '';
function searchHandler(ev) {   
    ev.preventDefault();
    queryMem = refs.searchEl.value; 
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
    return queryMem          
}
