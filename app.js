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

	let geocoder = new google.maps.Geocoder();

	// will put marker on the page where initial Lat Long Coordinates are
	let marker = new google.maps.Marker({
		position: myLatLng,
		map: map,
		title: 'Hello World!'
	});

	$('button').on('click', (e) => {

		// stop the page from refreshing on click
		e.preventDefault();

		// grab inputs from the page
		let latitude = document.getElementById('latitude').value;
		let longitude = document.getElementById('longitude').value;
		let zoom = document.getElementById('zoom').value;
		let newLatLng = {lat: latitude, lng: longitude};

		// show us that the inputs are correct
		console.log('Button Clicked! Latitude: ' + latitude + ' Longitude: ' + longitude + ' Zoom: ' + zoom);

		geocodeAddress(geocoder, map)

	})
}


//PUT A PIN ON THE MAP AT THE USER'S ADDRESS
function geocodeAddress(geocoder, map) {

	//Grab user input and format it in a way that can be run against the chicago API
	let latitude = document.getElementById('latitude').value;
	let longitude = document.getElementById('longitude').value;
	let zoom = document.getElementById('zoom').value;
	let newLatLng = {lat: parseFloat(latitude), lng: parseFloat(longitude)};

	//Takes the address and formats it in a way that googlemaps can work with
	geocoder.geocode({'location': newLatLng}, function(results, status) {
    	if (status === 'OK') {
      		if (results[0]) {
        		map.setZoom(11);
        		var marker = new google.maps.Marker({
          		position: newLatLng,
          		map: map
        		});
      		} else {
        		window.alert('No results found');
      			}
    	} else {	
      	window.alert('Geocoder failed due to: ' + status);
    }
  });
}

// Form Handling	
