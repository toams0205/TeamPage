let modal7 = document.getElementById("modalpic7");

let img7 = document.getElementById("sumpic7");
let modalImg7 = document.getElementById("img07");
let picinfoText7 = document.getElementById("picinfo7");

img7.onclick = function(){
  modal7.style.display = "block";
  modalImg7.src = this.src;
  picinfoText7.innerHTML = this.alt;
}

let span7 = document.getElementsByClassName("close7")[0];

span7.onclick = function() { 
  modal7.style.display = "none";
}