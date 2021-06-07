let modal3 = document.getElementById("modalpic3");

let img3 = document.getElementById("sumpic3");
let modalImg3 = document.getElementById("img03");
let picinfoText3 = document.getElementById("picinfo3");

img3.onclick = function(){
  modal3.style.display = "block";
  modalImg3.src = this.src;
  picinfoText3.innerHTML = this.alt;
}

let span3 = document.getElementsByClassName("close3")[0];

span3.onclick = function() { 
  modal3.style.display = "none";
}