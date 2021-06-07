let modal9 = document.getElementById("modalpic9");

let img9 = document.getElementById("sumpic9");
let modalImg9 = document.getElementById("img09");
let picinfoText9 = document.getElementById("picinfo9");

img9.onclick = function(){
  modal9.style.display = "block";
  modalImg9.src = this.src;
  picinfoText9.innerHTML = this.alt;
}

let span9 = document.getElementsByClassName("close9")[0];

span9.onclick = function() { 
  modal9.style.display = "none";
}