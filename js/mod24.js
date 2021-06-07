let modal24 = document.getElementById("modalpic24");

let img24 = document.getElementById("sumpic24");
let modalImg24 = document.getElementById("img24");
let picinfoText24 = document.getElementById("picinfo24");

img24.onclick = function(){
  modal24.style.display = "block";
  modalImg24.src = this.src;
  picinfoText24.innerHTML = this.alt;
}

let span24 = document.getElementsByClassName("close24")[0];

span24.onclick = function() { 
  modal24.style.display = "none";
}