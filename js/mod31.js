let modal31 = document.getElementById("modalpic31");

let img31 = document.getElementById("sumpic31");
let modalImg31 = document.getElementById("img31");
let picinfoText31 = document.getElementById("picinfo31");

img31.onclick = function(){
  modal31.style.display = "block";
  modalImg31.src = this.src;
  picinfoText31.innerHTML = this.alt;
}

let span31 = document.getElementsByClassName("close31")[0];

span31.onclick = function() { 
  modal31.style.display = "none";
}