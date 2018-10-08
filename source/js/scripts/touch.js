var $links =  $('a');
$links.addClass('mobile');

if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {

  console.log('this is a touch device');
} else {
 $links.addClass('mobile');
  console.log('this is not a touch device');
}
