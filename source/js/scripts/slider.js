$('.j-slider').slick({
  mobileFirst: true,
  infinite: true,
  appendArrows: $('.j-slider-controls'),
  prevArrow: '<button class="button slider__control slider__control--prev"><span class="visually-hidden">Предыдущее фото</span></button>',
  nextArrow: '<button class="button slider__control slider__control--next"><span class="visually-hidden">Следующее фото</span></button>',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 5,
        centerMode: false,
        variableWidth: true,
        speed: 800,
        lazyLoaded: true,
        adaptiveHeight: true
      }
    },
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 5,
        centerMode: false,
        variableWidth: true,
        speed: 800,
        adaptiveHeight: true
      }
    }
  ]

});
