(function () {
  var $pageSliderSum = $('.j-slider-count');
  var $pageSlick = $('.j-news-slider');

  $pageSlick.on('init reInit afterChange', function (event, slick) {
    if (slick.slideCount < 10 ) {
      $pageSliderSum.text('0' + slick.slideCount);
    } else {
      $pageSliderSum.text(slick.slideCount);
    }
  });
  $pageSlick.slick({
    mobileFirst: true,
    infinite: true,
    appendArrows: $('.j-news-slider-controls'),
    prevArrow: '<button class="button news-slider__control news-slider__control--prev"><span class="visually-hidden">Предыдущее фото</span></button>',
    nextArrow: '<button class="button news-slider__control news-slider__control--next"><span class="visually-hidden">Следующее фото</span></button>',
    slidesToShow: 1,
    variableWidth: true,
    centerMode: false,
    speed: 800,
    asNavFor: '.j-modal-slider-nav',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          lazyLoaded: true,
          variableWidth: true,
        }
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 5,
          variableWidth: false,
        }
      }
    ]

  });
})();


