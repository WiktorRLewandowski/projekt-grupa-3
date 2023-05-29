let lastScrollTop = 0;
let header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    header.style.top = '-260px';
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
