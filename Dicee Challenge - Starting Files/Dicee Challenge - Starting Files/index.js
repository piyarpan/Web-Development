// random number generation

var randomNumber1 = Math.random();
randomNumber1 = (randomNumber1*6);
randomNumber1 = Math.floor(randomNumber1);
randomNumber1 = randomNumber1+1;


 // random dice img

 var randomDiceImage = "dice" + randomNumber1 + ".png";

//adding dice img source

var randomImageSource = "images/" + randomDiceImage;

//changing image1

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

// For 2nd image

var randomNumber2 = Math.floor(Math.random()*6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//Conditions

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML="Player 1 wins";
}
else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML="Player 2 wins";
}
else{
  document.querySelector("h1").innerHTML="Draw";
}
