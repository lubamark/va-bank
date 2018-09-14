if(document.getElementById('map') != null) {
  function initMap() {
    var windowWidth = $(window).width();
    var vaBank = {lat: 56.4729615, lng: 85.0482247};


    var getCenterMap = function (winWidth) {
      var center;
      if (winWidth > 320 && winWidth <= 768) {
        center = vaBank;
      } else if (winWidth > 768 && winWidth <= 1024) {
        center = {lat: vaBank.lat, lng: (vaBank.lng + 0.0015289)};
      } else if (winWidth > 1024 && winWidth <= 1440) {
        center = {lat: vaBank.lat, lng: (vaBank.lng + 0.0022789)};
      } else {
        center = {lat: vaBank.lat, lng: (vaBank.lng + 0.0023789)};
      }
      return center;
    };

    var centerMap = getCenterMap(windowWidth);

    var map = new google.maps.Map(document.getElementById('map'),
      {
        zoom: 18,
        center: centerMap
      });

    var image = {
      url: '/local/templates/vabank/img/icon/pin-icon.svg',
      size: new google.maps.Size(108, 108),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(54, 54)
    };
    var marker = new google.maps.Marker({position: vaBank, map: map, icon: image});
  }
}





