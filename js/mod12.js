let modal12 = document.getElementById("modalpic12");

let img12 = document.getElementById("sumpic12");
let modalImg12 = document.getElementById("img12");
let picinfoText12 = document.getElementById("picinfo12");

img12.onclick = function(){
  modal12.style.display = "block";
  modalImg12.src = this.src;
  picinfoText12.innerHTML = this.alt;
}

let span12 = document.getElementsByClassName("close12")[0];

span12.onclick = function() { 
  modal12.style.display = "none";
}