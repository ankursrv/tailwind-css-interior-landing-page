// mobile nav menu 
const navTriggerBtn = document.querySelector("#nav-trigger-btn")
const navMenu = document.querySelector("#nav-menu")
const menuIcon = document.querySelector("#menu-icon");

navTriggerBtn.addEventListener('click',() => {
    navMenu.classList.toggle('nav-is-open')

    // Toggle between menu and cross icon
    menuIcon.classList.toggle('ri-menu-line');
    menuIcon.classList.toggle('ri-close-line');
});

// Testimonial Slider 

var swiper = new Swiper(".testiSlider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop:true,
    autoplay:{
        delay:3000,
        speed:1000,
    },
    breakpoints: {
        '640': {
            slidesPerView: 2,
        },
        '1200': {
            slidesPerView: 3,
        },
    },
});

// News 
var swiper = new Swiper(".news", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 3000,
        speed: 1000,
    },
    breakpoints: {
        '640': {
            slidesPerView: 2,
        },
        '1200': {
            slidesPerView: 3,
        },
    },
});