const headerRef = document.querySelector('header');

window.addEventListener('scroll', () => {
    headerRef.classList.toggle('white_bg', window.scrollY > 0);
})