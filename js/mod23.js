let modal23 = document.getElementById("modalpic23");

let img23 = document.getElementById("sumpic23");
let modalImg23 = document.getElementById("img23");
let picinfoText23 = document.getElementById("picinfo23");

img23.onclick = function(){
  modal23.style.display = "block";
  modalImg23.src = this.src;
  picinfoText23.innerHTML = this.alt;
}

let span23 = document.getElementsByClassName("close23")[0];

span23.onclick = function() { 
  modal23.style.display = "none";
}