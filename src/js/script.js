$(document).ready(function () {
  $('.carousel__inner').slick({
    speed: 1200,
    slidesToShow: 1,
    // adaptiveHeight: true,
    // autoplay: true,
    // autoplaySpeed: 2000,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="icons/chevron-left-solid.png"</button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="icons/chevron-right-solid.png"</button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  });
});

// var slider = tns({
//   container: '.carousel__inner',
//   items: 1,
//   slideBy: 'page',
//   autoplay: false,
//   controlsText: [
//     'img src="icons/chevron-left-solid.png',
//     'img src="icons/chevron-right-solid.png',
//   ],
// });
