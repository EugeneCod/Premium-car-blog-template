let header__burger = document.querySelector('.header__burger');
let header__menu = document.querySelector('.header__menu-container');
let back = document.querySelector('.page');
let nav = document.querySelector('.nav_place_header');

header__burger.onclick = function () {
  header__burger.classList.toggle('_active');
  header__menu.classList.toggle('_active');
  back.classList.toggle('_lock');
}

nav.onclick = function () {
    back.classList.toggle('_lock');
}         
// Функция чередует блокировку скролла с боди при н
// нажатии на ссылку