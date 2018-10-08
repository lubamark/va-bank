var userOS;    // will either be iOS, Android or unknown
var userOSver; // this is a string, use Number(userOSver) to convert

function getOS( )
{
  var ua = navigator.userAgent;
  var uaindex;

  // determine OS
  if ( ua.match(/iPad/i) || ua.match(/iPod/i) || ua.match(/iPhone/i) )
  {
    userOS = 'iOS';
    uaindex = ua.indexOf( 'OS ' );
  }
  else if ( ua.match(/Android/i) )
  {
    userOS = 'Android';
    uaindex = ua.indexOf( 'Android ' );
  }
  else
  {
    userOS = 'unknown';
  }

  // determine version
  if ( userOS === 'iOS'  &&  uaindex > -1 )
  {
    userOSver = ua.substr( uaindex + 3, 3 ).replace( '_', '.' );
  }
  else if ( userOS === 'Android'  &&  uaindex > -1 )
  {
    userOSver = ua.substr( uaindex + 8, 3 );
  }
  else
  {
    userOSver = 'unknown';
  }
}
getOS();

if(userOS === 'iOS') {
  $('.link-red--arrow').addClass('_ios');
  $('.button--arrow').addClass('_ios');
}
