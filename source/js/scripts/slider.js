(function () {
  var $indexSliderI = $('.j-current-photo');
  var $indexSliderSum = $('.j-all-photos');
  var $indexSlick = $('.j-slider');
  var $indexSlidesCount = $indexSlick.find('>li').length;

  $indexSlick.on('init reInit', function (event, slick, currentSlide, nextSlide) {
    $indexSlick.find('[data-slick-index="'+0+'"]').addClass('_active');
  });

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

  $indexSlick.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    if(currentSlide === nextSlide){
      $indexSlick.find('[data-slick-index="'+nextSlide+'"]').addClass('_active');
    }
    else{
      if(currentSlide === 0 && nextSlide === ($indexSlidesCount-1)){
        $indexSlick.find('[data-slick-index="'+nextSlide+'"]').addClass('_active');
        $indexSlick.find('[data-slick-index="-1"]').addClass('_active');
        $indexSlick.find('[data-slick-index="'+currentSlide+'"]').removeClass('_active');
      }
      else
      if(currentSlide === ($indexSlidesCount-1) && nextSlide === 0){
        $indexSlick.find('[data-slick-index="'+nextSlide+'"]').addClass('_active');
        $indexSlick.find('[data-slick-index="'+$indexSlidesCount+'"]').addClass('_active');
      }
      else
      if(nextSlide > currentSlide){
        $indexSlick.find('[data-slick-index="'+nextSlide+'"]').addClass('_active');
      }
      else{
        $indexSlick.find('[data-slick-index="'+nextSlide+'"]').addClass('_active');
        $indexSlick.find('[data-slick-index="'+currentSlide+'"]').removeClass('_active');
      }
    }
  });
  $indexSlick.on('afterChange', function (event, slick, currentSlide, nextSlide) {
    $indexSlick.find('[data-slick-index="'+(currentSlide+1)+'"]').removeClass('_active');
    $indexSlick.find('[data-slick-index="'+(currentSlide+2)+'"]').removeClass('_active');
    $indexSlick.find('[data-slick-index="'+(currentSlide+3)+'"]').removeClass('_active');
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
          speed: 600,
          lazyLoaded: true,
          infinite: false,
          adaptiveHeight: false
        }
      },
      {
        breakpoint: 1439,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          variableWidth: true,
          speed: 600,
          lazyLoaded: true,
          infinite: false,
          adaptiveHeight: false
        }
      }
    ]
  });


})();

