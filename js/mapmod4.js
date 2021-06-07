var modal = document.getElementById("mapmodal");
	var btn = document.getElementById("mapopen4");
	var span = document.getElementsByClassName("close")[0];
	btn.onclick = function() {
		modal.style.display = "block";
		var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(37.711061, 126.901915), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };
var map = new kakao.maps.Map(mapContainer, mapOption);
var markerPosition  = new kakao.maps.LatLng(37.711061, 126.901915); 
var marker = new kakao.maps.Marker({
    position: markerPosition
});
marker.setMap(map);

function relayout(){
	map.layout
}
	}

	span.onclick = function() {
		modal.style.display = "none";
	}
	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}