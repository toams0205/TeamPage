var mapContainer = document.getElementById('lafemap'), 
    mapOption = { 
        center: new kakao.maps.LatLng(37.6614886,126.7658605), 
        level: 8 
    };

var map = new kakao.maps.Map(mapContainer, mapOption); 

var position =  new kakao.maps.LatLng(37.6614886,126.7658605);

var marker = new kakao.maps.Marker({
  position: position
});

marker.setMap(map);

var iwContent = '<div style="padding:5px;">라페스타</div>';

var infowindow = new kakao.maps.InfoWindow({
    content : iwContent
});

kakao.maps.event.addListener(marker, 'mouseover', function() {
    infowindow.open(map, marker);
});


kakao.maps.event.addListener(marker, 'mouseout', function() {
    infowindow.close();
});