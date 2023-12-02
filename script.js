"strict";

const btn = document.querySelector(".btn");
let msg = document.querySelector("h1");
const diceImg1 = document.querySelectorAll("img")[0];
const diceImg2 = document.querySelectorAll("img")[1];

btn.addEventListener("click", function () {
  let randomNumber1 = Math.floor(Math.random() * 6) + 1;
  let randomNumber2 = Math.floor(Math.random() * 6) + 1;

  diceImg1.src = `images/dice${randomNumber1}.png`;

  diceImg2.src = `images/dice${randomNumber2}.png`;

  if (randomNumber1 > randomNumber2) {
    msg.textContent = "player 1 wins";
  } else if (randomNumber1 < randomNumber2) {
    msg.textContent = "player 2 wins";
  } else if (randomNumber1 === randomNumber2) {
    msg.textContent = "DRAW!!!";
  }
});
