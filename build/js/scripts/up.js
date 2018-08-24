$(document).ready(function () {
  var $winH = $(window).height();
  var $scrollT = $(window).scrollTop();
  var $up = $('.up');

  if($scrollT > $winH) {
    $up.fadeIn()
  } else if ($scrollT < $winH){
    $up.fadeOut();
  }

  $(window).on('scroll', function () {
    $scrollT = $(window).scrollTop();
    if($scrollT > $winH) {
      $up.fadeIn()
    } else if ($scrollT < $winH){
      $up.fadeOut();
    }
  });

  $up.on('click', function () {
    $('body,html').animate({scrollTop:0},800);
  });


});
