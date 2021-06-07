let modal20 = document.getElementById("modalpic20");

let img20 = document.getElementById("sumpic20");
let modalImg20 = document.getElementById("img20");
let picinfoText20 = document.getElementById("picinfo20");

img20.onclick = function(){
  modal20.style.display = "block";
  modalImg20.src = this.src;
  picinfoText20.innerHTML = this.alt;
}

let span20 = document.getElementsByClassName("close20")[0];

span20.onclick = function() { 
  modal20.style.display = "none";
}