const heroSlides = document.querySelectorAll(".hero-slide");

let currentSlide = 0;
const slideInterval = 8000;

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

showSlide(currentSlide);

setInterval(nextSlide, slideInterval);