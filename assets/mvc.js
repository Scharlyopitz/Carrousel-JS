// Données de l'applications, indexs
const Model = {
    slides : [
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
    ],
    currentSlide: 0,
    
    // Appels aux API afin de remplir les tableaux de données
    init: ()=>{}
}

// Lien entre le model et la vue
const Controller = {
    init: ()=>{
        Model.init()
        View.init()
        Controller.handler()
    },
    handler: ()=>{
        for(let arrow in View.arrows){
            View.arrows[arrow].addEventListener('mousedown', function(){
                arrow == 'left' ?  Model.currentSlide-- : Model.currentSlide++
                if(Model.currentSlide == Model.slides.length){Model.currentSlide= 0}
                if(Model.currentSlide < 0){Model.currentSlide= 3}
                View.update()
            })
        }
    }
}

// Manipulation du DOM
const View = {
    slide: null,
    arrows: {
        left: null,
        right: null
    },
    dots: null,
    text: null,

    init: ()=>{
        View.slide = document.querySelector('#slide')
        View.arrows.left = document.querySelector('.arrow_left')
        View.arrows.right = document.querySelector('.arrow_right')
        View.dots = document.querySelectorAll('.dot')
        View.text = document.querySelector('#text')
        View.update()
    },
    update: ()=>{
        View.dots.forEach(function(dot){
            dot.classList.remove('dot_selected')
        })
        View.slide.src = Model.slides[Model.currentSlide].image
        View.text.innerHTML = Model.slides[Model.currentSlide].tagLine
        View.dots[Model.currentSlide].classList.add('dot_selected')
    }
}

Controller.init()