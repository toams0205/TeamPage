var modal14 = document.getElementById("mapmodal14");
	var btn = document.getElementById("mapopen14");
	var span = document.getElementsByClassName("close")[0];
	btn.onclick = function() {
		modal14.style.display = "block";
		var mapContainer = document.getElementById('map2'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(37.711061, 126.901915), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };
var map2 = new kakao.maps.Map(mapContainer, mapOption);
var markerPosition  = new kakao.maps.LatLng(37.711061, 126.901915); 
var marker = new kakao.maps.Marker({
    position: markerPosition
});
marker.setMap(map2);

function relayout(){
	map2.layout
}
	}

	span.onclick = function() {var modalmap2 = document.getElementById("mapmodal2");
	var btn = document.getElementById("mapopen14");
	var span = document.getElementsByClassName("close")[0];
	btn.onclick = function() {
		modalmap2.style.display = "block";
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
		modalmap2.style.display = "none";
	}
	window.onclick = function(event) {
		if (event.target == modalmap2) {
			modalmap2.style.display = "none";
		}
	}
		modal14.style.display = "none";
	}
	window.onclick = function(event) {
		if (event.target == modal14) {
			modal14.style.display = "none";
		}
	}