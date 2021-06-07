let modal1 = document.getElementById("modalpic1");

let img1 = document.getElementById("sumpic1");
let modalImg1 = document.getElementById("img01");
let picinfoText1 = document.getElementById("picinfo1");

img1.onclick = function(){
  modal1.style.display = "block";
  modalImg1.src = this.src;
  picinfoText1.innerHTML = this.alt;
}

let span1 = document.getElementsByClassName("close1")[0];

span1.onclick = function() { 
  modal1.style.display = "none";
}