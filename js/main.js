$(document).ready(function() {

    new WOW().init();

    $('.sale-main').slick({
        slidesToShow: 2,
        prevArrow: $('.arrows__left'),
        nextArrow: $('.arrows__right'),
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
                
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
              }
            }  
        ]
    });

    // $('.sale-main').slick({
    //     dots: false,
    //     slidesToShow: 2,
    //     slidesToScroll: 1,
    //     centerMode: true,
    //     centerPadding: '30px',
    //     responsive: [{
    //         breakpoint: 767,
    //         settings:{
    //             slidesToShow: 1,
    //             slidesToScroll: 1,
    //             adaptiveHeight: false
    //         }
            
    //     }
    // ],

    // prevArrow: $('.arrows__left'),
    // nextArrow: $('.arrows__right'),
    // // dots: true,
    // // infinite: false,
    // // speed: 300,
    // // slidesToShow: 4,
    // // slidesToScroll: 4,
    // // responsive: [
    // //   {
    // //     breakpoint: 1024,
    // //     settings: {
    // //       slidesToShow: 3,
    // //       slidesToScroll: 3,
    // //       infinite: true,
    // //       dots: true
    // //     }
    // //   },
    // //   {
    // //     breakpoint: 600,
    // //     settings: {
    // //       slidesToShow: 2,
    // //       slidesToScroll: 2
    // //     }
    // //   },
    // //   {
    // //     breakpoint: 480,
    // //     settings: {
    // //       slidesToShow: 1,
    // //       slidesToScroll: 1
    // //     }
    // //   }
    // //   // You can unslick at a given breakpoint now by adding:
    // //   // settings: "unslick"
    // //   // instead of a settings object
    // // ]
    // });

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

