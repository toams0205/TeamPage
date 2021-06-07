let modal32 = document.getElementById("modalpic32");

let img32 = document.getElementById("sumpic32");
let modalImg32 = document.getElementById("img32");
let picinfoText32 = document.getElementById("picinfo32");

img32.onclick = function(){
  modal32.style.display = "block";
  modalImg32.src = this.src;
  picinfoText32.innerHTML = this.alt;
}

let span32 = document.getElementsByClassName("close32")[0];

span32.onclick = function() { 
  modal32.style.display = "none";
}