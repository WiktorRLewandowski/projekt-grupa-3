window.addEventListener('scroll', () => {
  let header = document.querySelector('.header');
  let containerHeader = document.querySelector('.header__container');
  let wrapper = document.querySelector('.btn__wrapper')

  containerHeader.classList.toggle('header__fixed-container', window.scrollY > 0);
  wrapper.classList.toggle('hidden', window.scrollY > 0);
  header.classList.toggle('header__fixed', window.scrollY > 0);
});
