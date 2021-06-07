let modal26 = document.getElementById("modalpic26");

let img26 = document.getElementById("sumpic26");
let modalImg26 = document.getElementById("img26");
let picinfoText26 = document.getElementById("picinfo26");

img26.onclick = function(){
  modal26.style.display = "block";
  modalImg26.src = this.src;
  picinfoText26.innerHTML = this.alt;
}

let span26 = document.getElementsByClassName("close26")[0];

span26.onclick = function() { 
  modal26.style.display = "none";
}