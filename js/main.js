// mobile nav menu 
const navTriggerBtn = document.querySelector("#nav-trigger-btn")
const navMenu = document.querySelector("#nav-menu")
const menuIcon = document.querySelector("#menu-icon");

navTriggerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('nav-is-open')

    // Toggle between menu and cross icon
    menuIcon.classList.toggle('ri-menu-line');
    menuIcon.classList.toggle('ri-close-line');
});

// Testimonial Slider 

var swiper = new Swiper(".testiSlider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    // autoplay: {
    //     delay: 3000,
    //     speed: 1000,
    // },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
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
var swiper = new Swiper(".newsSlider", {
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

// Scroll Revel

const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 3000,
    delay: 600,
    // reset : true 
});

// hero text
sr.reveal('.hero-text', { origin: 'top' });

// Step 
sr.reveal('.steps--step',{distance:'100px', interval: 100})

// about 
sr.reveal('.about--left',{origin:'left'})
sr.reveal('.about--img', {origin:'right', delay:800})

// Testimonial 
sr.reveal('.testimonial--bg', { delay: 800 })
sr.reveal('.testi--text')
sr.reveal('.testiSlider',{delay:1000})

// Brand 
sr.reveal('.brand--img',{delay:800, distance:'100px', interval:200})

// Work 
sr.reveal('.work--text')
sr.reveal('.work--subtitle', {delay:800})
sr.reveal('.work--grid',{delay:1000})

// Status 
sr.reveal('.status')
sr.reveal('.status--item', {delay:800, interval:100})

// news 
sr.reveal('.news--item', { interval:100, delay:800, distance:'100px'})

// Contact
sr.reveal('.contact')
sr.reveal('.contect-title',{delay:800})
sr.reveal('.contect-text',{delay:800, interval:200, distance:'80px'})

// Footer 
sr.reveal('.footer-item',{delay:800, interval:100, distance:'100px'})
