console.log('JS file for Google Maps Practice')

// Declare empty variable to store the map
let map;
let latitude = 41.8781;
let longitude = -87.6298;
let zoom = 10;
let myLatLng = {lat: latitude, lng: longitude}

function initMap() {
	// create a new map with it's enter at specified lat/long
	// give the map a zoom of 8
	map = new google.maps.Map(document.getElementById('map'), {
		center: myLatLng,
		zoom: zoom
	});

	// will put marker on the page where initial Lat Long Coordinates are
	var marker = new google.maps.Marker({
		position: myLatLng,
		map: map,
		title: 'Hello World!'
	});
}


$('button').on('click', (e) => {

	// stop the page from refreshing on click
	e.preventDefault();

	// grab inputs from the page
	let latitude = document.getElementById('latitude').value;
	let longitude = document.getElementById('longitude').value;
	let zoom = document.getElementById('zoom').value;

	// show us that the inputs are correct
	console.log('Button Clicked! Latitude: ' + latitude + ' Longitude: ' + longitude + ' Zoom: ' + zoom);
	
	// place marker based on user's input

	// 41.8781, lng: -87.6298

	initMap();

	var marker = new google.maps.Marker({
		position: myLatLng,
		map: map,
		title: 'Hello World!'
	});

})

// Form Handling	
