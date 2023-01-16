const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');

const show = () => {
    menu.classList.toggle('visible');
}

burger.addEventListener('click', show);