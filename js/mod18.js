let modal18 = document.getElementById("modalpic18");

let img18 = document.getElementById("sumpic18");
let modalImg18 = document.getElementById("img18");
let picinfoText18 = document.getElementById("picinfo18");

img18.onclick = function(){
  modal18.style.display = "block";
  modalImg18.src = this.src;
  picinfoText18.innerHTML = this.alt;
}

let span18 = document.getElementsByClassName("close18")[0];

span18.onclick = function() { 
  modal18.style.display = "none";
}