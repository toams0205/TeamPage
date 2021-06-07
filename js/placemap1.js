var mapContainer = document.getElementById('foodmap'), 
    mapOption = { 
        center: new kakao.maps.LatLng(37.634778,126.8287099), 
        level: 8 
    };

var map = new kakao.maps.Map(mapContainer, mapOption); 

var position =  new kakao.maps.LatLng(37.634778,126.8287099);

var marker = new kakao.maps.Marker({
  position: position
});

marker.setMap(map);

var iwContent = '<div style="padding:5px;">화정역</div>';

var infowindow = new kakao.maps.InfoWindow({
    content : iwContent
});

kakao.maps.event.addListener(marker, 'mouseover', function() {
    infowindow.open(map, marker);
});


kakao.maps.event.addListener(marker, 'mouseout', function() {
    infowindow.close();
});