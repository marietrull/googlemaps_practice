console.log('JS file for Google Maps Practice')

// Declare empty variable to store the map
var map;
function initMap() {
	// create a new map with it's enter at specified lat/long
	// give the map a zoom of 8
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: -34.397, lng: 150.644},
		zoom: 8
	});
}