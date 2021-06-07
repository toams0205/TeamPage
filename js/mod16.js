let modal16 = document.getElementById("modalpic16");

let img16 = document.getElementById("sumpic16");
let modalImg16 = document.getElementById("img16");
let picinfoText16 = document.getElementById("picinfo16");

img16.onclick = function(){
  modal16.style.display = "block";
  modalImg16.src = this.src;
  picinfoText16.innerHTML = this.alt;
}

let span16 = document.getElementsByClassName("close16")[0];

span16.onclick = function() { 
  modal16.style.display = "none";
}