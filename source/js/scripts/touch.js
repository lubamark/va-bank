var $links =  $('a');
$links.addClass('mobile');

if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
  $links.addClass('mobile');
} else {
  $links.removeClass('mobile');
}
