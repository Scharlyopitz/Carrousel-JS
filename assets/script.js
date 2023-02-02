// Tableau avec les slides
const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>" 
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Balise image correspondant à l'image principale du slider
const slide = document.querySelector('#slide');

// Index du slide courant
let currentSlide = 0;

// Flêches
const arrowLeft = document.querySelector('.arrow_left')
const arrowRight = document.querySelector('.arrow_right')

// Dots
const dots = document.querySelectorAll('.dot');

// Initialisation de la première slide
slide.src = slides[currentSlide].image

dots[currentSlide].classList.add('dot_selected')

// Evenement au click de la flêche droite
arrowRight.addEventListener('mousedown', function(){
	currentSlide++
	if(currentSlide == slides.length){
		currentSlide= 0;
	}
	text.innerHTML = slides[currentSlide].tagLine
	slide.src = slides[currentSlide].image
	dots.forEach(function(dot){
		dot.classList.remove('dot_selected')
	})
	dots[currentSlide].classList.add('dot_selected')
})


// Balise text correspondant au texte principal de la slide
const text = document.querySelector('#text')

// Initialisation du text
text.innerHTML = slides[currentSlide].tagLine

// Evenement au click de la fleche gauche
arrowLeft.addEventListener('mousedown', function(){
	currentSlide--
	if(currentSlide < 0){
		currentSlide= 3;
	}
	text.innerHTML = slides[currentSlide].tagLine
	slide.src = slides[currentSlide].image
	dots.forEach(function(dot){
		dot.classList.remove('dot_selected')
	})
	dots[currentSlide].classList.add('dot_selected')
})


