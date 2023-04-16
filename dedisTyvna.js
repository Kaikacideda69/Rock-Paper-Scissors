let player = 0;
let bot = 0;
let justClicked = false;

const rock = 1;
const paper = 2;
const scissors = 3;
let score = 0;
const rockEL = document.getElementById("rock");
const paperEL = document.getElementById("paper");
const scissorsEL = document.getElementById("scissors");
const scoreEL = document.querySelector(".score");

function playerClick(click) {
  if (justClicked === 0) {
    return;
  }
  player = click;
}
function botClick() {
  const randNum = Math.floor(Math.random() * 3) + 1;
  bot = randNum;
}
function scoreUpdate() {
  if (player > bot) {
    score++;
    scoreEL.textContent = score;
  } else if (player < bot) {
    score--;
    scoreEL.textContent = score;
    if (score < 1) {
      score = 0;
      scoreEL.textContent = score;
    }
  }
}
function clicked(element) {
  playerClick(element);
  botClick();
  result();
  scoreUpdate();
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
