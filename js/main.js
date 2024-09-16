const burgerButton = document.querySelector('.menu__button');
const menuClose = document.querySelector('.menu__item-close__button');
const menuList = document.querySelector('.menu__list');
const menuShadow = document.querySelector('.menu--close');

burgerButton.addEventListener('click', () => {
    menuList.classList.toggle('menu__list-open');
    menuShadow.classList.toggle('menu--open');
});
menuClose.addEventListener('click', () => {
    menuList.classList.remove('menu__list-open');
    menuShadow.classList.remove('menu--open');
});