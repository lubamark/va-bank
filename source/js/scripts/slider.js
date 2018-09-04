(function () {
  var $indexSliderI = $('.j-current-photo');
  var $indexSliderSum = $('.j-all-photos');
  var $indexSlick = $('.j-slider');

  $indexSlick.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;

    if (i < 10) {
      $indexSliderI.text('0' + i);
    } else {
      $indexSliderI.text(i);
    }

    if (slick.slideCount < 10 ) {
      $indexSliderSum.text('0' + slick.slideCount);
    } else {
      $indexSliderSum.text(slick.slideCount);
    }
  });


  $indexSlick.slick({
    mobileFirst: true,
    infinite: true,
    slidesToShow: 1,
    appendArrows: $('.j-slider-controls'),
    prevArrow: '<button class="button slider__control slider__control--prev"><span class="visually-hidden">Предыдущее фото</span></button>',
    nextArrow: '<button class="button slider__control slider__control--next"><span class="visually-hidden">Следующее фото</span></button>',
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToscroll: 1,
          centerMode: false,
          variableWidth: true,
          speed: 800,
          lazyLoaded: true,
          adaptiveHeight: false
        }
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          centerMode: false,
          variableWidth: true,
          speed: 800,
          lazyLoaded: true,
          adaptiveHeight: false
        }
      }
    ]
  });


})();

