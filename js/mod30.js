let modal30 = document.getElementById("modalpic30");

let img30 = document.getElementById("sumpic30");
let modalImg30 = document.getElementById("img30");
let picinfoText30 = document.getElementById("picinfo30");

img30.onclick = function(){
  modal30.style.display = "block";
  modalImg30.src = this.src;
  picinfoText30.innerHTML = this.alt;
}

let span30 = document.getElementsByClassName("close30")[0];

span30.onclick = function() { 
  modal30.style.display = "none";
}