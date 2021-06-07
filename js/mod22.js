let modal22 = document.getElementById("modalpic22");

let img22 = document.getElementById("sumpic22");
let modalImg22 = document.getElementById("img22");
let picinfoText22 = document.getElementById("picinfo22");

img22.onclick = function(){
  modal22.style.display = "block";
  modalImg22.src = this.src;
  picinfoText22.innerHTML = this.alt;
}

let span22 = document.getElementsByClassName("close22")[0];

span22.onclick = function() { 
  modal22.style.display = "none";
}