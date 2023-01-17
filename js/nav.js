const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const navBg = document.querySelector('.nav-bg');

const onScroll = () => {
    if( document.documentElement.scrollTop > 80) {
        navBg.style.display = 'block';
    } else {
        navBg.style.display = 'none';
    }
}

const show = () => {
    menu.classList.toggle('visible');
}


burger.addEventListener('click', show);
window.addEventListener('scroll', onScroll);