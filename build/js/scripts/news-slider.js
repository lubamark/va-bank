(function () {
  var $pageSliderSum = $('.j-slider-count');
  var $pageSlick = $('.j-news-slider');
  // клонируем слайды
  var $sliderFor = $('.j-modal-slider-for');
  var $sliderNav = $('.j-modal-slider-nav');
  $slideImages = $('.news-slider__item').find('img');

  $slideImages.each(function () {
    var $img = $(this).clone();
    $img.appendTo($sliderFor).wrap('<div class="modal-slider-for__item"></div>');
  });
  $slideImages.each(function () {
    var $img = $(this).clone();
    $img.appendTo($sliderNav).wrap('<div class="modal-slider-nav__item"></div>');
  });

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


  var indexSlide;
  //забираем номер слайда из ссылки
  $('.j-slider-link').on('click', function () {
    indexSlide = $(this).attr('href') - 1;
    console.log(indexSlide);
  });

  var $modalSliderI = $('.j-modal-slider-current');
  var $modalSliderSum = $('.j-modal-slider-quantity');

  $sliderNav.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;

    if (i < 10) {
      $modalSliderI.text('0' + i);
    } else {
      $modalSliderI.text(i);
    }

    if (slick.slideCount < 10 ) {
      $modalSliderSum.text('0' + slick.slideCount);
    } else {
      $modalSliderSum.text(slick.slideCount);
    }


  });

  $sliderFor.slick({
    initialSlide: indexSlide,
    mobileFirst: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: $sliderNav
  });
  $sliderNav.slick({
    initialSlide: indexSlide,
    mobileFirst: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: $sliderFor,
    centerMode: true,
    focusOnSelect: true,
    variableWidth: false,
    appendArrows: $('.j-modal-slider-controls'),
    prevArrow: '<button class="button modal-slider__control modal-slider__control--prev"><span class="visually-hidden">Предыдущее фото</span></button>',
    nextArrow: '<button class="button modal-slider__control modal-slider__control--next"><span class="visually-hidden">Следующее фото</span></button>',
  });

})();



