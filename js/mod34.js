let modal34 = document.getElementById("modalpic34");

let img34 = document.getElementById("sumpic34");
let modalImg34 = document.getElementById("img34");
let picinfoText34 = document.getElementById("picinfo34");

img34.onclick = function(){
  modal34.style.display = "block";
  modalImg34.src = this.src;
  picinfoText34.innerHTML = this.alt;
}

let span34 = document.getElementsByClassName("close34")[0];

span34.onclick = function() { 
  modal34.style.display = "none";
}