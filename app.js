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

// Form Handling	
$('button').on('click', (e) => {

	// stop the page from refreshing on click
	e.preventDefault();

	// grab inputs from the page
	const latitude = document.getElementById('latitude').value;
	const longitude = document.getElementById('longitude').value;
	const zoom = document.getElementById('zoom').value;

	// show us that the inputs are correct
	console.log('Button Clicked! Latitude: ' + latitude + ' Longitude: ' + longitude + ' Zoom: ' + zoom);
})