let modal33 = document.getElementById("modalpic33");

let img33 = document.getElementById("sumpic33");
let modalImg33 = document.getElementById("img33");
let picinfoText33 = document.getElementById("picinfo33");

img33.onclick = function(){
  modal33.style.display = "block";
  modalImg33.src = this.src;
  picinfoText33.innerHTML = this.alt;
}

let span33 = document.getElementsByClassName("close33")[0];

span33.onclick = function() { 
  modal33.style.display = "none";
}