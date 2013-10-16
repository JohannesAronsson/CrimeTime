$(document).ready(function(){
		var map = L.mapbox.map('map', 'lisenm.map-0r6yxgzt');
		var json=null;

		var placeListRef =new Firebase("https://sooooofoooooo.firebaseio.com/");
		placeListRef.on('child_added', function(snapshot){
			var placeData = snapshot.val();	
			console.log(placeData.Latitude+","+placeData.Longitud);
			createMarker(placeData);
		


		});

		function createMarker(properties) {
			var marker = L.marker([properties.Latitude,properties.Longitud]).addTo(map);
			marker.bindPopup(properties.name).openPopup();
		};






});

