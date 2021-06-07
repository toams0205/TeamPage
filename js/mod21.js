let modal21 = document.getElementById("modalpic21");

let img21 = document.getElementById("sumpic21");
let modalImg21 = document.getElementById("img21");
let picinfoText21 = document.getElementById("picinfo21");

img21.onclick = function(){
  modal21.style.display = "block";
  modalImg21.src = this.src;
  picinfoText21.innerHTML = this.alt;
}

let span21 = document.getElementsByClassName("close21")[0];

span21.onclick = function() { 
  modal21.style.display = "none";
}