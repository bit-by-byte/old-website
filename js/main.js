let typed = new Typed(".typed", {
    stringsElement: ".typed-phrases",
    // showCursor: false,
    smartBackspace: true,
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
});


const nav = document.querySelector('.navbar-burger');

nav.addEventListener('click', () => {
    nav.classList.toggle('is-active')
    document.getElementById(nav.dataset.target).classList.toggle('is-active')
})