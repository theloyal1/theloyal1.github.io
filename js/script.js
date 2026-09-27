const menuToggle = document.getElementById("menu-toggle");
const sidebar = document.querySelector(".sidebar");
const hamburger = document.querySelector(".hamburger-menu");
const menuLinks = document.querySelectorAll(".sidebar a");

// Fecha ao clicar em um item
menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        menuToggle.checked = false;
    });
});

// Fecha ao clicar fora da sidebar e do hamburger
document.addEventListener("click", (event) => {
    if (menuToggle.checked && !sidebar.contains(event.target) && !hamburger.contains(event.target)) {
        menuToggle.checked = false;
    }
});

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