(function () {


  $('.j-tab-nav-slider').slick({
    mobileFirst: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: false,
    adaptiveHeight: true,
    fade: true,
    arrows: false,
    customPaging : function(slider, i) {
      var slide = $(slider.$slides[i]).find('.tabs-list__item');
      return "<span class=\"tabs-menu__link\">" + slide.attr('data-text') + "</span>";
    },
    dots: true,
    dotsClass: 'tabs-menu',
    appendDots: '.j-tab-for-slider',
    infinite: false,
    swipe: false,
  });
})();

