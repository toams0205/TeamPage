let modal10 = document.getElementById("modalpic10");

let img10 = document.getElementById("sumpic10");
let modalImg10 = document.getElementById("img10");
let picinfoText10 = document.getElementById("picinfo10");

img10.onclick = function(){
  modal10.style.display = "block";
  modalImg10.src = this.src;
  picinfoText10.innerHTML = this.alt;
}

let span10 = document.getElementsByClassName("close10")[0];

span10.onclick = function() { 
  modal10.style.display = "none";
}