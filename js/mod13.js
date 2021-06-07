let modal13 = document.getElementById("modalpic13");

let img13 = document.getElementById("sumpic13");
let modalImg13 = document.getElementById("img13");
let picinfoText13 = document.getElementById("picinfo13");

img13.onclick = function(){
  modal13.style.display = "block";
  modalImg13.src = this.src;
  picinfoText13.innerHTML = this.alt;
}

let span13 = document.getElementsByClassName("close13")[0];

span13.onclick = function() { 
  modal13.style.display = "none";
}