var $links =  $('a');
$links.addClass('_mobile');

if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
  $links.addClass('_mobile');
} else {
  $links.removeClass('_mobile');
}
git
