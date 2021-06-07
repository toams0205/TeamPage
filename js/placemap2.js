var mapContainer = document.getElementById('cafemap'), 
    mapOption = { 
        center: new kakao.maps.LatLng(37.6467847,126.8926336), 
        level: 8 
    };

var map = new kakao.maps.Map(mapContainer, mapOption); 

var position =  new kakao.maps.LatLng(37.6467847,126.8926336);

var marker = new kakao.maps.Marker({
  position: position
});

marker.setMap(map);

var iwContent = '<div style="padding:5px;">고양 스타필드</div>';

var infowindow = new kakao.maps.InfoWindow({
    content : iwContent
});

kakao.maps.event.addListener(marker, 'mouseover', function() {
    infowindow.open(map, marker);
});


kakao.maps.event.addListener(marker, 'mouseout', function() {
    infowindow.close();
});