let modal28 = document.getElementById("modalpic28");

let img28 = document.getElementById("sumpic28");
let modalImg28 = document.getElementById("img28");
let picinfoText28 = document.getElementById("picinfo28");

img28.onclick = function(){
  modal28.style.display = "block";
  modalImg28.src = this.src;
  picinfoText28.innerHTML = this.alt;
}

let span28 = document.getElementsByClassName("close28")[0];

span28.onclick = function() { 
  modal28.style.display = "none";
}