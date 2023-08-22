window.sr = ScrollReveal({ reset: true });

sr.reveal('header .foto', {duration: 2000});
sr.reveal('header .logo', {duration: 2000});
sr.reveal('header .linguas', {duration: 2000})
sr.reveal('.introducao', {duration: 2000});
sr.reveal('.formacao', {duration: 2000});
sr.reveal('.skills', {duration: 2000});
sr.reveal('.eventos', {duration: 2000});
sr.reveal('.contato', {duration: 2000});
sr.reveal('.email', {duration: 2000});
sr.reveal('.redes', {duration: 2000});

//Menu responsivo
const btnMobile = document.querySelector('.menu .button');

function toggleMenu() {
    const nav = document.querySelector('.menu');
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);

//Slider
const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

let currentSlide = 0;

function hideSlider() {
    slider.forEach(item => item.classList.remove('on'))
}

function showSlider() {
    slider[currentSlide].classList.add('on')
}

function nextSlider() {
    hideSlider()
    if(currentSlide === slider.length - 1) {
        currentSlide = 0
    } else {
        currentSlide++
    }

    showSlider()
}

function prevSlider() {
    hideSlider()
    if(currentSlide === 0) {
        currentSlide = slider.length - 1
    } else {
        currentSlide--
    }

    showSlider()
}

btnNext.addEventListener('click', nextSlider)
btnPrev.addEventListener('click', prevSlider)
let ativo = true

function view_menu(){
    let menu_mobile = document.getElementById("menu-mob")

    if(!ativo){
        menu_mobile.style.display = "none"
        ativo = !ativo
    } else {
        menu_mobile.style.display = "flex"
        ativo = !ativo
    }

    console.log(ativo)


}