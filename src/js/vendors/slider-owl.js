import $ from 'jquery';
import 'owl.carousel';

$(document).ready(function () {

    //Инициализация слайдера owl-carousel в секции slider
    var owlSlider = $("#slider");
    owlSlider.owlCarousel({
        items: 1,
        loop: true,
        smartSpeed: 800,
        nav: false,
        dots: true,
        lazyLoad: true,
        // responsive: {
        //     1: {
        //         items: 1,
        //     },
        //     600: {
        //         items: 2,
        //     },
        //     1010: {
        //         items: 3,
        //     },
        //     1450: {
        //         dots: false,
        //     },
        // }
    });

    owlSlider.owlCarousel();

    $("#slider__arrow-left").click(function () {
        owlSlider.trigger("prev.owl.carousel");
    });
    $("#slider__arrow-rigth").click(function () {
        owlSlider.trigger("next.owl.carousel");
    });
});
