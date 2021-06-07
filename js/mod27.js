let modal27 = document.getElementById("modalpic27");

let img27 = document.getElementById("sumpic27");
let modalImg27 = document.getElementById("img27");
let picinfoText27 = document.getElementById("picinfo27");

img27.onclick = function(){
  modal27.style.display = "block";
  modalImg27.src = this.src;
  picinfoText27.innerHTML = this.alt;
}

let span27 = document.getElementsByClassName("close27")[0];

span27.onclick = function() { 
  modal27.style.display = "none";
}