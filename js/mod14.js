let modal14 = document.getElementById("modalpic14");

let img14 = document.getElementById("sumpic14");
let modalImg14 = document.getElementById("img14");
let picinfoText14 = document.getElementById("picinfo14");

img14.onclick = function(){
  modal14.style.display = "block";
  modalImg14.src = this.src;
  picinfoText14.innerHTML = this.alt;
}

let span14 = document.getElementsByClassName("close14")[0];

span14.onclick = function() { 
  modal14.style.display = "none";
}