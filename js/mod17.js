let modal17 = document.getElementById("modalpic17");

let img17 = document.getElementById("sumpic17");
let modalImg17 = document.getElementById("img17");
let picinfoText17 = document.getElementById("picinfo17");

img17.onclick = function(){
  modal17.style.display = "block";
  modalImg17.src = this.src;
  picinfoText17.innerHTML = this.alt;
}

let span17 = document.getElementsByClassName("close17")[0];

span17.onclick = function() { 
  modal17.style.display = "none";
}