function initialize(){
  var getLat = document.querySelector("#lat").innerHTML;
  var getLong = document.querySelector("#long").innerHTML;
  console.log(getLat);
  var lat = parseFloat(getLat);
  console.log(lat);
  var long = parseFloat(getLong);

  var evtLocation = new google.maps.LatLng(lat,long);

  var displayMap = {
  center : evtLocation,
  zoom : 14,
  mapTypeId : google.maps.MapTypeId.ROADMAP
  };

  var map = new google.maps.Map(document.getElementById("map"), displayMap);

  var mapMarker = {
    url:'http://www.goughmap.org/_a/cms_page_media/29/red_marker_1.png'
  }

  var marker = new google.maps.Marker({
    position: evtLocation,
    map: map,
    icon: mapMarker
  });

  marker.setMap(displayMap);
}

google.maps.event.addDomListener(window, 'load', initialize);
