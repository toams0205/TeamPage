let modal29 = document.getElementById("modalpic29");

let img29 = document.getElementById("sumpic29");
let modalImg29 = document.getElementById("img29");
let picinfoText29 = document.getElementById("picinfo29");

img29.onclick = function(){
  modal29.style.display = "block";
  modalImg29.src = this.src;
  picinfoText29.innerHTML = this.alt;
}

let span29 = document.getElementsByClassName("close29")[0];

span29.onclick = function() { 
  modal29.style.display = "none";
}