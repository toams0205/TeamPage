let modal36 = document.getElementById("modalpic36");

let img36 = document.getElementById("sumpic36");
let modalImg36 = document.getElementById("img36");
let picinfoText36 = document.getElementById("picinfo36");

img36.onclick = function(){
  modal36.style.display = "block";
  modalImg36.src = this.src;
  picinfoText36.innerHTML = this.alt;
}

let span36 = document.getElementsByClassName("close36")[0];

span36.onclick = function() { 
  modal36.style.display = "none";
}