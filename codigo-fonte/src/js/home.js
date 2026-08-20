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

const gallerySlider = document.querySelector(".gallery-slider");
const galleryButtonPrev = document.querySelector(".gallery-button-prev");
const galleryButtonNext = document.querySelector(".gallery-button-next");


function galleryNext(){

    const firstImage = gallerySlider.firstElementChild;

    gallerySlider.appendChild(firstImage);
}


function galleryPrev(){

    const lastImage = gallerySlider.lastElementChild;

    gallerySlider.insertBefore(
        lastImage,
        gallerySlider.firstElementChild
    );
}


if(mobileScreen.matches){

    const galleryImages = gallerySlider.querySelectorAll(".gallery-image");

    const randomIndex = Math.floor(Math.random() * galleryImages.length);

    for(let i = 0; i < randomIndex; i++){

        const firstImage = gallerySlider.firstElementChild;

        gallerySlider.appendChild(firstImage);
    }
}

galleryButtonNext.addEventListener("click", galleryNext);
galleryButtonPrev.addEventListener("click", galleryPrev);