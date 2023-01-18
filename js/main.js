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

//scrolling
$("#sec-1").click(function() {
    $('html, body').animate({
        scrollTop:        $("#one").offset().top-66
    }, 1000);
 return false;
});

$("#sec-2").click(function() {
    $('html, body') .animate({
        scrollTop:        $("#two").offset().top-112
    }, 1000);
 return false;
});

$("#sec-3").click(function() {
    $(' html,body') .animate({
        scrollTop:        $("#three").offset().top-112
    }, 1000);
 return false;
});

