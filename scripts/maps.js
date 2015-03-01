var directionsService = new google.maps.DirectionsService();
var directionsDisplay = new google.maps.DirectionsRenderer();

function initialize() {

    var myLatlng = new google.maps.LatLng(-25.363882, 131.044922);
    var myLatlng2 = new google.maps.LatLng(-25.363882, 121.044622);
    var myLatlng3 = new google.maps.LatLng(-25.363882, 111.044922);
    var myLatlng4 = new google.maps.LatLng(-25.363882, 101.044922);


    var mapOptions = {
        center: myLatlng,
        minZoom: 4,
        maxZomm: 16,
        zoom: 8,
        mapTypeControl: true
            //        disableDefaultUI: true
    };


    var map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);

    directionsDisplay.setMap(map);

    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'First!'
    });

    var marker = new google.maps.Marker({
        position: myLatlng2,
        map: map,
        title: 'Second!'
    });

    var marker = new google.maps.Marker({
        position: myLatlng3,
        map: map,
        title: 'Third!'
    });

    var marker = new google.maps.Marker({
        position: myLatlng4,
        map: map,
        title: 'Fourth!'
    });

    calcRoute();


}

function calcRoute() {
    var haight = new google.maps.LatLng(37.7699298, -122.4469157);
    var oceanBeach = new google.maps.LatLng(37.7683909618184, -122.51089453697205);


    var polylineOptionsActual = new google.maps.Polyline({
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 10
    });
    
//    
    directionsDisplay.setOptions({polylineOptions: polylineOptionsActual}); 
   
    
    var request = {
        origin: haight,
        destination: oceanBeach,
        travelMode: google.maps.TravelMode.DRIVING
    };

    directionsService.route(request, function (result, status) {
        if (status === google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(result);
        }
    });
}

google.maps.event.addDomListener(window, 'load', initialize);