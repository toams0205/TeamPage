let modal25 = document.getElementById("modalpic25");

let img25 = document.getElementById("sumpic25");
let modalImg25 = document.getElementById("img25");
let picinfoText25 = document.getElementById("picinfo25");

img25.onclick = function(){
  modal25.style.display = "block";
  modalImg25.src = this.src;
  picinfoText25.innerHTML = this.alt;
}

let span25 = document.getElementsByClassName("close25")[0];

span25.onclick = function() { 
  modal25.style.display = "none";
}