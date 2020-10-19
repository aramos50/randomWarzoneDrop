





function randomizerDrop(){

var randomPix= [
  "images/dam1.png","images/airport.png","images/bloccamp.png","images/boneyard.png",
  "images/bunkerbridge.png","images/bunkercodes.png","images/downtown.png",
  "images/farm.png","images/graveyard-torsc.png","images/hills.png","images/hospital.png",
  "images/lumber.png","images/military.png","images/park.png","images/port.png","images/prison.png",
  "images/promeast.png","images/promwest.png","images/quarry.png","images/riverside.png",
  "images/stadium.png","images/storage.png","images/superstore.png","images/train.png","images/tv.png"];
var randomNum = Math.floor(Math.random() *randomPix.length);
document.getElementById("pic").src = randomPix[randomNum];
if ( randomPix[randomNum]==="images/dam1.png"){
  document.querySelector("h2").innerHTML = "Dam";
}
else if (randomPix[randomNum]==="images/airport.png"){
  document.querySelector("h2").innerHTML ="Airport";
}
else if(randomPix[randomNum]==="images/bloccamp.png"){
  document.querySelector("h2").innerHTML ="Bloc 14,15, and Camp";
}
else if(randomPix[randomNum]==="images/boneyard.png"){
  document.querySelector("h2").innerHTML ="Boneyard";
}
else if(randomPix[randomNum]==="images/bunkerbridge.png"){
  document.querySelector("h2").innerHTML ="Bunker Bridge";
}
else if(randomPix[randomNum]==="images/bunkercodes.png"){
  document.querySelector("h2").innerHTML ="Any Bunker with Access Code";
}
else if(randomPix[randomNum]==="images/downtown.png"){
  document.querySelector("h2").innerHTML ="Downtown";
}
else if(randomPix[randomNum]==="images/farm.png"){
  document.querySelector("h2").innerHTML ="Farmland";
}
else if(randomPix[randomNum]==="images/graveyard-torsc.png"){
  document.querySelector("h2").innerHTML ="Graveyard and Torsc Bloc";
}
else if(randomPix[randomNum]==="images/hills.png"){
  document.querySelector("h2").innerHTML ="Hills";
}
else if(randomPix[randomNum]==="images/hospital.png"){
  document.querySelector("h2").innerHTML ="Hospital";
}
else if(randomPix[randomNum]==="images/lumber.png"){
  document.querySelector("h2").innerHTML ="Lumber";
}
else if(randomPix[randomNum]==="images/military.png"){
  document.querySelector("h2").innerHTML ="Military";
}
else if(randomPix[randomNum]==="images/park.png"){
  document.querySelector("h2").innerHTML ="Park";
}
else if(randomPix[randomNum]==="images/port.png"){
  document.querySelector("h2").innerHTML ="Port";
}
else if(randomPix[randomNum]==="images/prison.png"){
  document.querySelector("h2").innerHTML ="Prison";
}
else if(randomPix[randomNum]==="images/promeast.png"){
  document.querySelector("h2").innerHTML ="Promenade East";
}
else if(randomPix[randomNum]==="images/promwest.png"){
  document.querySelector("h2").innerHTML ="Promenade West";
}
else if(randomPix[randomNum]==="images/quarry.png"){
  document.querySelector("h2").innerHTML ="Quarry";
}
else if(randomPix[randomNum]==="images/riverside.png"){
  document.querySelector("h2").innerHTML ="Riverside";
}
else if(randomPix[randomNum]==="images/stadium.png"){
  document.querySelector("h2").innerHTML ="Stadium";
}
else if(randomPix[randomNum]==="images/storage.png"){
  document.querySelector("h2").innerHTML ="Storage Town";
}
else if(randomPix[randomNum]==="images/superstore.png"){
  document.querySelector("h2").innerHTML ="Superstore";
}
else if(randomPix[randomNum]==="images/train.png"){
  document.querySelector("h2").innerHTML ="Train Station";
}
else if(randomPix[randomNum]==="images/tv.png"){
  document.querySelector("h2").innerHTML ="TV Station";
}
else{document.querySelector("h2").innerHTML = "";}
}
