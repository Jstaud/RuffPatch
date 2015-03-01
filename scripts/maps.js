function initialize() {
    
    var myLatlng = new google.maps.LatLng(-25.363882,131.044922);
    
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
      title: 'Hello World!'
  });
    
}
google.maps.event.addDomListener(window, 'load', initialize);