window.addEventListener('scroll', () => {
  let header = document.querySelector('.header');
  let divInputEl = document.querySelector('.input__wrapper');
  let divError = document.querySelector('.search-error');
  let containerHeader = document.querySelector('.header__container');

  containerHeader.classList.toggle('header__fixed-container', window.scrollY > 0);
  divError.classList.toggle('hidden', window.scrollY > 0);
  divInputEl.classList.toggle('hidden', window.scrollY > 0);
  header.classList.toggle('header__fixed', window.scrollY > 0);
});
