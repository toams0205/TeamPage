let modal5 = document.getElementById("modalpic5");

let img5 = document.getElementById("sumpic5");
let modalImg5 = document.getElementById("img05");
let picinfoText5 = document.getElementById("picinfo5");

img5.onclick = function(){
  modal5.style.display = "block";
  modalImg5.src = this.src;
  picinfoText5.innerHTML = this.alt;
}

let span5 = document.getElementsByClassName("close5")[0];

span5.onclick = function() { 
  modal5.style.display = "none";
}