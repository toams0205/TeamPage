let modal15 = document.getElementById("modalpic15");

let img15 = document.getElementById("sumpic15");
let modalImg15 = document.getElementById("img15");
let picinfoText15 = document.getElementById("picinfo15");

img15.onclick = function(){
  modal15.style.display = "block";
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

let span15 = document.getElementsByClassName("close15")[0];

span15.onclick = function() { 
  modal15.style.display = "none";
}