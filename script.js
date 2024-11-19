function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: {lat: 36.369361, lng: -94.223722}
  });

  var locations = [
    {"lat": 36.369361, "lng": -94.223722},
    {"lat": -26.363, "lng": 132.044},
    {"lat": -27.363, "lng": 133.044}
  ];

  locations.forEach(function(location) {
    var marker = new google.maps.Marker({
      position: {lat: location.lat, lng: location.lng},
      map: map
    });
  });
}