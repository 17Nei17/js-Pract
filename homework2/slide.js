	
var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;

function nextSlide() {
    goToSlide(currentSlide+1);
}
function previousSlide() {
    goToSlide(currentSlide-1);
}
function goToSlide(n) {
    slides[currentSlide].className = 'slide';
    currentSlide = (n+slides.length)%slides.length;
    slides[currentSlide].className = 'slide showing';
}

var button3 = document.querySelector ('#next')
button3.addEventListener("click", nextSlide);

var button4 = document.querySelector ('#previous')
button4.addEventListener("click", previousSlide);

