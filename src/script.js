//HAMBURGER
window.onscroll = function() {
    const header = document.querySelector('header');

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.classList.add("navbar-fixed");
    } else {
        header.classList.remove("navbar-fixed");
    }
 
}

const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
})
