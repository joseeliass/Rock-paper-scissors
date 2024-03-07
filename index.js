let score = document.getElementById("score");
let result = document.getElementById("result");
let aiImg = document.getElementById("aiImg");
let container = document.getElementById("container");
let sc = 0;
score.textContent = sc;
function CreateImage(name) {
  let pcTurn = parseInt(Math.random() * 3);

  if (pcTurn == 0) {
    //0 for rock
    aiImg.innerHTML =
      "<img src = 'icons/rockicon.png' height='200' width = '200'>";
    container.style.backgroundColor = "pink";
  } else if (pcTurn == 1) {
    // 1 for paper
    aiImg.innerHTML =
      "<img src = 'icons/papericon.png' height='200' width = '200' >";
    container.style.backgroundColor = "cornflowerblue";
  } // 2 for scissor
  else {
    aiImg.innerHTML =
      "<img src = 'icons/scissoricon.png' height='200' width = '200'>";
    container.style.backgroundColor = "darkkhaki";
  }

  if (pcTurn == 0 && name == "rock") {
    result.textContent = " Rock vs Rock Tie!";
  } else if (pcTurn == 1 && name == "rock") {
    result.textContent = "Rock vs Paper You Lost!";
  } else if (pcTurn == 2 && name == "rock") {
    result.textContent = "Rock vs Scissor You Win!";
    sc++;
    score.textContent = sc;
  } else if (pcTurn == 0 && name == "paper") {
    result.textContent = "Paper vs Rock You Win!";
    sc++;
    score.textContent = sc;
  } else if (pcTurn == 1 && name == "paper") {
    result.textContent = "Paper vs Paper Tie!";
  } else if (pcTurn == 2 && name == "paper") {
    result.textContent = "Paper vs Scissor You Lost!";
  } else if (pcTurn == 0 && name == "scissor") {
    result.textContent = "Scissor vs rock You Lost!";
  } else if (pcTurn == 1 && name == "scissor") {
    result.textContent = "Scissor vs Paper You Win!";
    sc++;
    score.textContent = sc;
  } else {
    result.textContent = "Scissor vs Scissor Tie!";
  }
}

function Restart() {
  score.textContent = 0;
  aiImg.innerHTML = "";
}
