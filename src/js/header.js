const headerRef = document.querySelector('header');
const menuListRef = document.querySelector('.header_menu');
const burgerMenuRef = document.querySelector('.header_burger-menu');
console.log('Hello fron header')

window.addEventListener('scroll', () => {
    headerRef.classList.toggle('white-bg', window.scrollY > 0);
});

burgerMenuRef.addEventListener('click', () => {
    menuListRef.classList.toggle('show-menu');
})


menuListRef.addEventListener('click', (event) => {
    // console.log(event.target)

    if(event.target.nodeName !== 'A') {
        return;
    }

const currentActiveLink = event.currentTarget.querySelector('.active-link');
if(currentActiveLink) {
    currentActiveLink.classList.remove('active-link');
}

    const nextActiveLink = event.target;
    nextActiveLink.classList.add('active-link');

})