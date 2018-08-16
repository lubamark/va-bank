'use strict';

$(document).ready(function () {
  var menuLink = $('.j-menu-link');
  var menuHandler = $('.j-menu-button');
  var windowWidth = $(window).width();
  var closeMenu = function () {
    menuHandler.removeClass('_opened');
    $('body').removeClass('_menu');
  };
  var toggleMenu = function () {
    menuHandler.toggleClass('_opened');
    $('body').toggleClass('_menu');
  };

  closeMenu();

  menuHandler.on('click', function () {
    toggleMenu();
  });
  menuLink.on('click', function () {
    closeMenu();
  })




   var menuClick =  function(win) {
    if (win < 1024) {

    }
  };

  $(window).resize(function () {
    windowWidth = $(window).width();
    menuClick(windowWidth);
  });
});


