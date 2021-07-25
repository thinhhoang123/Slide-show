var slideIndex = 1;
var slides = document.querySelectorAll(".Slides");
var dots = document.querySelectorAll(".dot");

showSlides(slideIndex);

//prev and next
function plusSlides(n) {
    showSlides(slideIndex += n);
}
//dot
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    if (n > slides.length) {
        slideIndex = 1;
    }    
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (var i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}