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
    });

    owlSlider.owlCarousel();

    $("#slider__arrow-left").click(function () {
        owlSlider.trigger("prev.owl.carousel");
    });
    $("#slider__arrow-rigth").click(function () {
        owlSlider.trigger("next.owl.carousel");
    });

    $('.owl-dot').attr('aria-label', 'Переключение слайда');
});
