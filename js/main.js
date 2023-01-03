$(document).ready(function() {

    $('.sale-main').slick({
        // infinite: true,
        slidesToShow: 1,
        prevArrow: $('.arrows__left'),
        nextArrow: $('.arrows__right'),
    });

    $('.slider-clients').slick({
        slidesToShow: 1,
        prevArrow: $('.arrows__left1'),
        nextArrow: $('.arrows__right2'),
    });


});