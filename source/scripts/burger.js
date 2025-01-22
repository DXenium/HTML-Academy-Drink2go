/* мобильное меню */

const headerPage = document.querySelector('.main-header');
const navMain = document.querySelector('.main-header__nav');
const navToggle = document.querySelector('.main-header__button');

headerPage.classList.remove('main-header--nojs');
navMain.classList.add('main-header__nav--closed');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('main-header__nav--closed')) {
    navMain.classList.remove('main-header__nav--closed');
    navMain.classList.add('main-header__nav--opened');
    navToggle.classList.add('main-header__button--close');
  } else {
    navMain.classList.add('main-header__nav--closed');
    navMain.classList.remove('main-header__nav--opened');
    navToggle.classList.remove('main-header__button--close');
  }
});
