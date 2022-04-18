let header__burger = document.querySelector('.header__burger');
let header__menu = document.querySelector('.header__menu-container');
let back = document.querySelector('.page');
let nav = document.querySelector('.nav_place_header');

header__burger.onclick = function () {
  header__burger.classList.toggle('active');
  header__menu.classList.toggle('active');
  back.classList.toggle('lock');
}

nav.onclick = function () {
    back.classList.toggle('lock');
}         
// Функция чередует блокировку скролла с боди при н
// нажатии на ссылку