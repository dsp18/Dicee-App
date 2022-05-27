
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var imgSrc1 = "images/dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", imgSrc1);


var randomnumber2 = Math.floor(Math.random() * 6) + 1;

var imgSrc2 = "images/dice" + randomnumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", imgSrc2);

if (randomNumber1 > randomnumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins !! Refresh Again";
}else {
  document.querySelector("h1").innerHTML = "Player 2 Wins !! Refresh Again";
}
