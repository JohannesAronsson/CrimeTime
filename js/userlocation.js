$(document).ready(function(){
   map.setView([59.314838, 18.069763], 10);

    var userLocation = L.divIcon({html: "<img src='https://dl.dropboxusercontent.com/u/4077265/CRIME/img/marker.png'>"});
    var user = L.marker([0, 0], {icon: userLocation}).addTo(map);
    L.mapbox.tileLayer('http://a.tiles.mapbox.com/v3/lisenm.map-0r6yxgzt.json', {
        maxZoom: 18
    }).addTo(map);

    navigator.geolocation.watchPosition(function(data) {
        console.log("this should be working")
        var lat = data['coords']['latitude'];
        var lng = data['coords']['longitude'];
        var newLatLng = new L.LatLng(lat, lng);

        map.setView(new L.LatLng(lat, lng), 14);
        
        user.setLatLng(newLatLng);

    
    }, function(e){console.log(e)});
});
