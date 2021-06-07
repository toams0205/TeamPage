let modal35 = document.getElementById("modalpic35");

let img35 = document.getElementById("sumpic35");
let modalImg35 = document.getElementById("img35");
let picinfoText35 = document.getElementById("picinfo35");

img35.onclick = function(){
  modal35.style.display = "block";
  modalImg35.src = this.src;
  picinfoText35.innerHTML = this.alt;
}

let span35 = document.getElementsByClassName("close35")[0];

span35.onclick = function() { 
  modal35.style.display = "none";
}