$(document).ready(function(){
 $('.comments__slider.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        navText: ["<img src='images/preview.svg'>","<img src='images/slider_next.svg'>"],
        // autoplay: true,
        autoplayTimeout: 5000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            },
            1400:{
                items:1
            }
        }
    })
    
})
