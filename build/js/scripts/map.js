if(document.getElementById('map') != null) {
  console.log (document.getElementById('map'));
  function initMap() {
    var windowWidth = $(window).width();
    var vaBank = {lat: 56.509442, lng: 84.9843211};

    var getCenterMap = function (winWidth) {
      var center;
      if (winWidth > 320 && winWidth <= 767) {
        center = {lat: 56.509442, lng: 84.9843211};
      } else if (winWidth > 767 && winWidth <= 1023) {
        center = {lat: 56.509442, lng: 84.98485};
      } else if (winWidth > 1023 && winWidth <= 1439) {
        center = {lat: 56.509442, lng: 84.9852};
      } else {
        center = {lat: 56.509442, lng: 84.9855};
      }
      return center;
    };
    var centerMap = getCenterMap(windowWidth);

    var map = new google.maps.Map(document.getElementById('map'),
      {
        zoom: 19,
        center: centerMap
      });

    var image = {
      url: 'img/icon/pin-icon.svg',
      size: new google.maps.Size(108, 108),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(54, 54)
    };
    var marker = new google.maps.Marker({position: vaBank, map: map, icon: image});
  }
}





