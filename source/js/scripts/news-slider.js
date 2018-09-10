(function () {
  var $pageSliderSum = $('.j-slider-count');
  var $pageSlick = $('.j-news-slider');
  // клонируем слайды
  var $sliderFor = $('.j-modal-slider-for');
  var $sliderNav = $('.j-modal-slider-nav');
  var $slideImages = $pageSlick.find('img');
  var $slideHrefs = $pageSlick.find('a');

  $slideHrefs.each(function () {
    var img = '<img src="' + $(this).attr('href') + '" alt="" width="489" height="332">';
    var slide = '<div class="modal-slider-for__item">' + img + '</div>';
    $sliderFor.append(slide);

  });
  $slideImages.each(function () {
    var $img = $(this).clone();
    $img.appendTo($sliderNav).wrap('<div class="modal-slider-nav__item"></div>');
  });

  //слайдер страницы
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

  //модальные слайдеры

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
    slickGoTo: 4,
    mobileFirst: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: $sliderNav
  });
  $sliderNav.slick({
    slickGoTo: 4,
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


  //переход по ссылке

  $('.j-slider-link').on('click', function () {
    var slideIndex = $(this).attr('data-index');
    $sliderNav.slick('slickGoTo', slideIndex - 1);
    $sliderFor.slick('slickGoTo', slideIndex - 1);
  });

})();



