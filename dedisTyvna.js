let player = 0;
let bot = 0;
let justClicked = false;

const rock = 1;
const paper = 2;
const scissors = 3;

const rockEL = document.getElementById("rock");
const paperEL = document.getElementById("paper");
const scissorsEL = document.getElementById("scissors");

function playerClick(click) {
  if (justClicked === 0) {
    return;
  }
  player = click;
}
function getRandNumbBeetween(max) {
  return Math.floor(Math.random() * max) + 1;
}
function botClick() {
  bot = getRandNumbBeetween(3);
}
function clicked(element) {
  playerClick(element);
  botClick();
  result();
}
function result(element) {
  if (justClicked === 0) {
    return;
  }
  if (player == bot) {
    console.log("Draw");
  } else if (bot > player) {
    console.log("bot won");
  } else {
    console.log("player won");
  }
}

paperEL.addEventListener("click", function () {
  clicked(paper);
  justClicked = true;
});
rockEL.addEventListener("click", function () {
  clicked(rock);
  justClicked = true;
});
scissorsEL.addEventListener("click", function () {
  clicked(scissors);
  justClicked = true;
});
