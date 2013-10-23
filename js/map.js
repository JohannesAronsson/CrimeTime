$(document).ready(function(){
		var map = L.mapbox.map('map', 'lisenm.map-0r6yxgzt');
		 brottsLayer = L.mapbox.markerLayer()
	var data;	

	// $.ajax({
	//     type: "GET",
	//     url: "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20xml%20where%20url%3D'http%3A%2F%2Fwww.brottsplatskartan.se%2Fapi.php%3Faction%3DgetEvents%26period%3D10080'&format=json&diagnostics=true&callback=",
	//     dataType: "json",
 //    	success: getbrottsData
 //    });	
	var url = "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20xml%20where%20url%3D'http%3A%2F%2Fwww.brottsplatskartan.se%2Fapi.php%3Faction%3DgetEvents%26period%3D10080'&format=json&diagnostics=true&callback="
	$.getJSON(url, getbrottsData);

	function getbrottsData (data) {
		
		features = [];
		for (var i = 0; i < data.query.results.events.event.length; i++) {
			var brott = data.query.results.events.event[i];
			features.push({
    			// this feature is in the GeoJSON format: see geojson.org
    			// for the full specification
    			type: 'Feature',
    			geometry: {
    			    type: 'Point',
    			    // coordinates here are in longitude, latitude order because
    			    // x, y is the standard for GeoJSON and many formats
    			    coordinates: [brott.lng, brott.lat]
    			},
    			properties: {
    			    title: brott.title, 
    			    title: brott.date,
    			    description: brott.text,
    			    // one can customize markers by adding simplestyle properties
    			    // http://mapbox.com/developers/simplestyle/
    			    'marker-size': 'small',
    			    'marker-color': '#000',
    			    'marker-symbol': 'baseball'
    			}
			});
		}
		console.log(features)
		brottsLayer.setGeoJSON({ 
			type: 'FeatureCollection', 
			features: features
		});
		brottsLayer.addTo(map);


		
		// $(json).find(json[0].result).each(function() {
  //       $("#xmlTest").append($(this).attr("title") + "<br />");
  //   });

	}







});

