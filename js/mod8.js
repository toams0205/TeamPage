let modal8 = document.getElementById("modalpic8");

let img8 = document.getElementById("sumpic8");
let modalImg8 = document.getElementById("img08");
let picinfoText8 = document.getElementById("picinfo8");

img8.onclick = function(){
  modal8.style.display = "block";
  modalImg8.src = this.src;
  picinfoText8.innerHTML = this.alt;
}

let span8 = document.getElementsByClassName("close8")[0];

span8.onclick = function() { 
  modal8.style.display = "none";
}