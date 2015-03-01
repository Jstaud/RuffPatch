function initialize() {
    
    var myLatlng = new google.maps.LatLng(-25.363882,131.044922);
    var myLatlng2 = new google.maps.LatLng(-25.363882,131.044922);
    var myLatlng3 = new google.maps.LatLng(-25.363882,131.044922);
    var myLatlng4 = new google.maps.LatLng(-25.363882,131.044922);
    
	var mapOptions = {
		center: myLatlng,
		zoom: 4, 
        mapTypeControl: true,
        disableDefaultUI: true
	};
    
    
	var map = new google.maps.Map(document.getElementById('map-canvas'),
		mapOptions);
    
    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'First!'
  });
    
    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Second!'
  });
    
    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Third!'
  });
    
    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Fourth!'
  });
    
}
google.maps.event.addDomListener(window, 'load', initialize);