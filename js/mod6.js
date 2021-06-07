let modal6 = document.getElementById("modalpic6");

let img6 = document.getElementById("sumpic6");
let modalImg6 = document.getElementById("img06");
let picinfoText6 = document.getElementById("picinfo6");

img6.onclick = function(){
  modal6.style.display = "block";
  modalImg6.src = this.src;
  picinfoText6.innerHTML = this.alt;
}

let span6 = document.getElementsByClassName("close6")[0];

span6.onclick = function() { 
  modal6.style.display = "none";
}