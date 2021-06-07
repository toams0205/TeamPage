let modal19 = document.getElementById("modalpic19");

let img19 = document.getElementById("sumpic19");
let modalImg19 = document.getElementById("img19");
let picinfoText19 = document.getElementById("picinfo19");

img19.onclick = function(){
  modal19.style.display = "block";
  modalImg19.src = this.src;
  picinfoText19.innerHTML = this.alt;
}

let span19 = document.getElementsByClassName("close19")[0];

span19.onclick = function() { 
  modal19.style.display = "none";
}