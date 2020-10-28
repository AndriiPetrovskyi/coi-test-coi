const headerRef = document.querySelector('header');
const menuListRef = document.querySelector('.header_menu');
const burgerMenuRef = document.querySelector('.header_burger-menu');


window.addEventListener('scroll', () => {
    headerRef.classList.toggle('white-bg', window.scrollY > 0);
});

burgerMenuRef.addEventListener('click', () => {
    menuListRef.classList.toggle('show-menu');
})