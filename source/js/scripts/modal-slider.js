(function () {
  var $modalSliderI = $('.j-modal-slider-current');
  var $modalSliderSum = $('.j-modal-slider-quantity');
  var $modalSlick = $('.j-modal-slider-nav');

  $modalSlick.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
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


  $('.j-modal-slider-for').slick({
    mobileFirst: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.j-modal-slider-nav'
  });
  $modalSlick.slick({
    mobileFirst: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.j-modal-slider-for',
    centerMode: true,
    focusOnSelect: true,
    variableWidth: false,
    appendArrows: $('.j-modal-slider-controls'),
    prevArrow: '<button class="button modal-slider__control modal-slider__control--prev"><span class="visually-hidden">Предыдущее фото</span></button>',
    nextArrow: '<button class="button modal-slider__control modal-slider__control--next"><span class="visually-hidden">Следующее фото</span></button>',
  });
})();





