let modal11 = document.getElementById("modalpic11");

let img11 = document.getElementById("sumpic11");
let modalImg11 = document.getElementById("img11");
let picinfoText11 = document.getElementById("picinfo11");

img11.onclick = function(){
  modal11.style.display = "block";
  modalImg11.src = this.src;
  picinfoText11.innerHTML = this.alt;
}

let span11 = document.getElementsByClassName("close11")[0];

span11.onclick = function() { 
  modal11.style.display = "none";
}