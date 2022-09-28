$(document).ready(function () {
  //carousel
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

  //tabs
  $('ul.catalog__tabs').on(
    'click',
    'li:not(.catalog__tab_active)',
    function () {
      $(this)
        .addClass('catalog__tab_active')
        .siblings()
        .removeClass('catalog__tab_active')
        .closest('div.container')
        .find('div.catalog__content')
        .removeClass('catalog__content_active')
        .eq($(this).index())
        .addClass('catalog__content_active');
    }
  );

  //slider
  function toggleSlide(item) {
    $(item).each(function (i) {
      $(this).on('click', function (e) {
        e.preventDefault();
        $('.catalog-item__content')
          .eq(i)
          .toggleClass('catalog-item__content_active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      });
    });
  }
  toggleSlide('.catalog-item__link');
  toggleSlide('.catalog-item__back');

  //Modal window
  $('[data-modal1=consultation]').on('click', function () {
    $('.overlay, #consultation').fadeIn('slow');
  });

  //close

  $('.modal1__close').on('click', function () {
    $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
  });

  //mini button
  $('.button_mini').on('click', function () {
    $('.overlay,  #order').fadeIn('slow');
  });

  $('.button_mini').each(function (i) {
    $(this).on('click', function () {
      $('#order .modal1__descr').text(
        $('.catalog-item__subtitle').eq(i).text()
      );
      $('.overlay,  #order').fadeIn('slow');
    });
  });

  //valid form

  function validateForms(form) {
    $(form).validate({
      rules: {
        name: 'required',
        phone: 'required',
        email: { required: true, email: true },
      },
      messages: {
        name: 'Пожалуйста, введите свое имя',
        phone: 'Пожалуста, введите номер телефона',
        email: {
          required: 'Нам нужна ваша почта, чтобы связаться с Вами',
          email: 'Введите верный адрес почты',
        },
      },
    });
  }
  validateForms('#consultation-form');
  validateForms('#consultation form');
  validateForms('#order form');
  //mask for number
  $('input[name=phone').mask('+7(999)999-99-99');

  //
  $('form').submit(function (e) {
    e.preventDefault();

    if (!$(this).valid()) {
      return;
    }

    $.ajax({
      type: 'POST',
      url: 'mailer/smart.php',
      data: $(this).serialize(),
    }).done(function () {
      $(this).find('input').val('');

      $('#consultation, #order').fadeOut('slow');
      $('.overlay, #thanks').fadeIn('slow');
      $('form').trigger('reset');
    });
    return false;
  });

  //smoth scroll page up to

  $(window).scroll(function () {
    if ($(this).scrollTop() > 1600) {
      $('.pageup').fadeIn('slow');
    } else {
      $('.pageup').fadeOut('slow');
    }
  });

  $('a[href^="#"').on('click', function () {
    const _href = $(this).attr('href');

    $('html, body').animate({
      scrollTop: $(_href).offset().top + 'px',
    });
    return false;
  });
});

//slider tiny
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
