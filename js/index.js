var grid = document.querySelector(".grid");
var score = 0;
var scoreElement = document.querySelector(".score");
interval = 3000;

function quicker() {
  if (score % 500 == 0) {
    interval /= 2;
  }
}

function moveRene() {
  var newMoleIndice = Math.floor(grid.children.length * Math.random());
  grid.children[newMoleIndice].classList.add("mole");
  function removeRene() {
    grid.children[newMoleIndice].classList.remove("mole");
  }
  setTimeout(removeRene,interval);
}

setInterval(moveRene, interval);

grid.addEventListener("click", hitTheMole);

function hitTheMole(event) {
  var target = event.target;
  if (target.classList.contains("mole")) {
    target.classList.remove("mole");
    incrementScore();
    quicker();
  }
}



function incrementScore() {
  score = score + 100;
  scoreElement.innerText = score;
}