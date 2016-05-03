//Map canvas
var mapCanvas = getElementById("divMapCanvas");

//Map options
var mapCentre = new google.maps.LatLng(48.8584, 2.2946);
var mapType = google.maps.MapTypeId.SATELLITE;
var mapOptions = {center: mapCentre, zoom: 15, mapTypeId: mapType};

var mapObject = new google.maps.Map(mapCanvas, mapOptions);

google.maps.event.addEventListener(mapObject, "addMarker", function(event)
{
	callback(args);	
	
	var markerCords = new google.maps.LatLng(event.latLng);
	var markerTitle = getElementById("txtMarkerCaption").value;
	
	var markerOptions = {position: markerCords, title: markerTitle}
	
	var markerObject = new google.maps.Marker(markerOptions);
	markerObject.setMap(mapObject);
});

