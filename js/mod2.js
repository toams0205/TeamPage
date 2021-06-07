let modal2 = document.getElementById("modalpic2");

let img2 = document.getElementById("sumpic2");
let modalImg2 = document.getElementById("img02");
let picinfoText2 = document.getElementById("picinfo2");

img2.onclick = function(){
  modal2.style.display = "block";
  modalImg2.src = this.src;
  picinfoText2.innerHTML = this.alt;
}

let span2 = document.getElementsByClassName("close2")[0];

span2.onclick = function() { 
  modal2.style.display = "none";
}