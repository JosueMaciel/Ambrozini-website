const heroSlides = document.querySelectorAll(".hero-slide");

let currentSlide = 0;
const slideInterval = 8000;
let slideTimer = null;

const mobileScreen = window.matchMedia("(max-width: 768px)");

function showSlide(index){

    heroSlides.forEach(slide => {
        slide.classList.remove("active");
    });

    heroSlides[index].classList.add("active");
}

function nextSlide(){

    currentSlide++;

    if(currentSlide >= heroSlides.length){
        currentSlide = 0;
    }

    showSlide(currentSlide);
}

function controlSlider(){

    if(mobileScreen.matches){

        clearInterval(slideTimer);
        slideTimer = null;

        currentSlide = 0;
        showSlide(currentSlide);

        return;
    }

    if(!slideTimer){
        slideTimer = setInterval(nextSlide, slideInterval);
    }
}

showSlide(currentSlide);

controlSlider();

mobileScreen.addEventListener("change", controlSlider);