//Declaring Variables
let playerTurn = document.querySelector(".display-player");
let resetBtn = document.querySelector("#reset");
let gameOver = false;
let turn = "X";
let player = document.querySelector(".display");
let hideIs = document.querySelector("#hide");
hideIs.getElementsByClassName.color = "green";
document.getElementById("audio").volume = 0.8;

const changeTurn = () => {
  return turn === "X" ? "O" : "X";
};
//Win
const wins = () => {
  let buttons = document.getElementsByClassName("btn");
  checkWins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];
  checkWins.forEach((e) => {
    if (
      buttons[e[0]].innerText === buttons[e[1]].innerText &&
      buttons[e[2]].innerText === buttons[e[1]].innerText &&
      buttons[e[0]].innerText !== ""
    ) {
      document.body.classList.toggle("dark-mode");
      hideIs.innerHTML = `Player <span class="player${turn}">${
        buttons[e[0]].innerText
      }</span> Won `;
      gameOver = true;
    }
  });
};

//Logic of the game
let boxes = document.querySelectorAll(".box");
Array.from(boxes).forEach((box) => {
  box.addEventListener("click", (e) => {
    let span = box.firstElementChild;
    if (span.innerText === "" && !gameOver) {
      checkTurn(span);
      span.innerText = turn;
      wins();
      turn = changeTurn();
      playerTurn.innerText = turn;
    }
  });
});

function checkTurn(span) {
  playerTurn.classList.toggle("playerX");
  if (turn === "X") {
    span.classList.add("playerX");
  } else {
    span.classList.add("playerO");
  }
}

resetBtn.addEventListener("click", () => {
  clearBoxes();
  gameOver = false;
  turn = "X";
  playerTurn.innerText = turn;
  if (!playerTurn.classList.contains("playerX")) {
    playerTurn.classList.add("playerX");
  }
});

function clearBoxes() {
  Array.from(boxes).forEach((box) => {
    let span = box.firstElementChild;
    if (span.classList.contains("playerX")) {
      span.classList.remove("playerX");
    } else if (span.classList.contains("playerO")) {
      span.classList.remove("playerO");
    }
    span.innerText = "";
  });
}
