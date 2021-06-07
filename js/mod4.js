let modal4 = document.getElementById("modalpic4");

let img4 = document.getElementById("sumpic4");
let modalImg4 = document.getElementById("img04");
let picinfoText4 = document.getElementById("picinfo4");

img4.onclick = function(){
  modal4.style.display = "block";
  modalImg4.src = this.src;
  picinfoText4.innerHTML = this.alt;
}

let span4 = document.getElementsByClassName("close4")[0];

span4.onclick = function() { 
  modal4.style.display = "none";
}