$(document).ready(function(){
   map.setView([59.314838, 18.069763], 14);

    var userLocation = L.divIcon({className: 'you',iconSize: [7, 7]});
    var user = L.marker([0, 0], {icon: userLocation}).addTo(map);
    L.mapbox.tileLayer('http://a.tiles.mapbox.com/v3/lisenm.map-0r6yxgzt.json', {
        maxZoom: 18
    }).addTo(map);

    navigator.geolocation.watchPosition(function(data) {
        console.log("this shuold be working")
        var lat = data['coords']['latitude'];
        var lng = data['coords']['longitude'];
        var newLatLng = new L.LatLng(lat, lng);

        map.setView(new L.LatLng(lat, lng), 16);
        
        user.setLatLng(newLatLng);

    
    }, function(e){console.log(e)});
});