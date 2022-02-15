//cross  button
const btnCross = document.getElementById("btnCross");
const btnZero = document.getElementById("btnZero");
const retry = document.querySelector(".retry");
const retryContainer = document.querySelector(".retry_container");
const player = document.querySelector(".player");
const start = document.querySelector(".start");
const game = document.querySelector(".game");
const Player_namex = document.querySelector(".Player_namex");
const Player_name0 = document.querySelector(".Player_name0");

//input button
let input_btn_1 = document.getElementById("input_btn1");
let input_btn_2 = document.getElementById("input_btn2");
let input_btn_3 = document.getElementById("input_btn3");
let input_btn_4 = document.getElementById("input_btn4");
let input_btn_5 = document.getElementById("input_btn5");
let input_btn_6 = document.getElementById("input_btn6");
let input_btn_7 = document.getElementById("input_btn7");
let input_btn_8 = document.getElementById("input_btn8");
let input_btn_9 = document.getElementById("input_btn9");
let input = "0";

retry.addEventListener("click", function (e) {
  input_btn_1.textContent = "";
  input_btn_2.textContent = "";
  input_btn_3.textContent = "";
  input_btn_4.textContent = "";
  input_btn_5.textContent = "";
  input_btn_6.textContent = "";
  input_btn_7.textContent = "";
  input_btn_8.textContent = "";
  input_btn_9.textContent = "";
  input = "0";
  player.style.opacity = "100";
  player.innerHTML = "Wait for 2 seconds...";
  game.style.opacity = "0";
  setTimeout(() => {
    player.style.opacity = "100";
    player.innerHTML = "Player 1 turn !";
    game.style.opacity = "100";
  }, 2000);
});

//winning function
const renderPlayer1Won = function () {
  setTimeout(() => {
    player.style.fontSize = "40px";
    player.innerHTML = ` &#127942;------ PLAYER 1 WON -----&#127942;`;
    player.style.opacity = "100";
    game.style.opacity = "0";
  }, 200);
};

const renderPlayer2Won = function () {
  setTimeout(() => {
    player.style.fontSize = "40px";
    player.innerHTML = ` &#127942;------ PLAYER 2 WON -----&#127942;`;
    player.style.opacity = "100";
    game.style.opacity = "0";
  }, 200);
};

const left_147_win = function () {
  //condition for player 1 win
  if (
    input_btn_1.textContent === "0" &&
    input_btn_4.textContent === "0" &&
    input_btn_7.textContent === "0"
  ) {
    renderPlayer2Won();
  }

  //condition for player 2 win
  if (
    input_btn_1.textContent === "❌" &&
    input_btn_4.textContent === "❌" &&
    input_btn_7.textContent === "❌"
  ) {
    renderPlayer1Won();
  }
};

const top_123_win = function () {
  //condition for player 1 win
  if (
    input_btn_1.textContent === "0" &&
    input_btn_2.textContent === "0" &&
    input_btn_3.textContent === "0"
  ) {
    renderPlayer2Won();
  }

  //condition for player 2 win
  if (
    input_btn_1.textContent === "❌" &&
    input_btn_2.textContent === "❌" &&
    input_btn_3.textContent === "❌"
  ) {
    renderPlayer1Won();
  }
};

const diagonal_357_win = function () {
  //condition for player 1 win
  if (
    input_btn_3.textContent === "0" &&
    input_btn_5.textContent === "0" &&
    input_btn_7.textContent === "0"
  ) {
    renderPlayer2Won();
  }

  //condition for player 2 win
  if (
    input_btn_3.textContent === "❌" &&
    input_btn_5.textContent === "❌" &&
    input_btn_7.textContent === "❌"
  ) {
    renderPlayer1Won();
  }
};

const diagonal_159_win = function () {
  //condition for player 1 win
  if (
    input_btn_1.textContent === "0" &&
    input_btn_5.textContent === "0" &&
    input_btn_9.textContent === "0"
  ) {
    renderPlayer2Won();
  }

  //condition for player 2 win
  if (
    input_btn_1.textContent === "❌" &&
    input_btn_5.textContent === "❌" &&
    input_btn_9.textContent === "❌"
  ) {
    renderPlayer1Won();
  }
};

const top_middle_258_win = function () {
  //condition for player 1 win
  if (
    input_btn_2.textContent === "0" &&
    input_btn_5.textContent === "0" &&
    input_btn_8.textContent === "0"
  ) {
    renderPlayer2Won();
  }

  //condition for player 2 win
  if (
    input_btn_2.textContent === "❌" &&
    input_btn_5.textContent === "❌" &&
    input_btn_8.textContent === "❌"
  ) {
    renderPlayer1Won();
  }
};

const right_369_win = function () {
  //condition for player 1 win
  if (
    input_btn_3.textContent === "0" &&
    input_btn_6.textContent === "0" &&
    input_btn_9.textContent === "0"
  ) {
    renderPlayer2Won();
  }

  //condition for player 2 win
  if (
    input_btn_3.textContent === "❌" &&
    input_btn_6.textContent === "❌" &&
    input_btn_9.textContent === "❌"
  ) {
    renderPlayer1Won();
  }
};

const top_middle_456_win = function () {
  //condition for player 1 win
  if (
    input_btn_4.textContent === "0" &&
    input_btn_5.textContent === "0" &&
    input_btn_6.textContent === "0"
  ) {
    renderPlayer2Won();
  }

  //condition for player 2 win
  if (
    input_btn_4.textContent === "❌" &&
    input_btn_5.textContent === "❌" &&
    input_btn_6.textContent === "❌"
  ) {
    renderPlayer1Won();
  }
};

const bottom_789_win = function () {
  //condition for player 1 win
  if (
    input_btn_7.textContent === "0" &&
    input_btn_8.textContent === "0" &&
    input_btn_9.textContent === "0"
  ) {
    renderPlayer2Won();
  }

  //condition for player 2 win
  if (
    input_btn_7.textContent === "❌" &&
    input_btn_8.textContent === "❌" &&
    input_btn_9.textContent === "❌"
  ) {
    renderPlayer1Won();
  }
};

const toggleInputValue = function () {
  if (input === "❌") {
    input = "0";
    player.innerHTML = "Player 1 turn";
  } else {
    input = "❌";
    player.innerHTML = "Player 2 turn";
  }
};
//input listener
start.addEventListener("click", function (e) {
  game.style.opacity = "100";
  player.style.opacity = "100";
  retryContainer.style.opacity = "100";
  start.style.opacity = "0";
  Player_name0.style.opacity = "100";
  Player_namex.style.opacity = "100";
});

input_btn_1.addEventListener("click", function (e) {
  toggleInputValue();

  if (
    (input_btn_1.textContent === "0" && input === "❌") ||
    (input_btn_1.textContent === "❌" && input === "0")
  ) {
    player.innerHTML = "Not a valid move !";
  } else {
    input_btn_1.textContent = input;
    console.log();
  }

  left_147_win();
  top_123_win();
  diagonal_357_win();
  diagonal_159_win();
});
input_btn_2.addEventListener("click", function (e) {
  toggleInputValue();

  if (
    (input_btn_2.textContent === "0" && input === "❌") ||
    (input_btn_2.textContent === "❌" && input === "0")
  ) {
    player.innerHTML = "Not a valid move !";
  } else {
    input_btn_2.textContent = input;
    console.log();
  }

  top_middle_258_win();
  top_123_win();
});
input_btn_3.addEventListener("click", function (e) {
  toggleInputValue();
  if (
    (input_btn_3.textContent === "0" && input === "❌") ||
    (input_btn_3.textContent === "❌" && input === "0")
  ) {
    player.innerHTML = "Not a valid move !";
  } else {
    input_btn_3.textContent = input;
    console.log();
  }

  right_369_win();
  top_123_win();
});
input_btn_4.addEventListener("click", function (e) {
  toggleInputValue();
  if (
    (input_btn_4.textContent === "0" && input === "❌") ||
    (input_btn_4.textContent === "❌" && input === "0")
  ) {
    player.innerHTML = "Not a valid move !";
  } else {
    input_btn_4.textContent = input;
    console.log();
  }

  left_147_win();
  top_middle_456_win();
});
input_btn_5.addEventListener("click", function (e) {
  toggleInputValue();
  if (
    (input_btn_5.textContent === "0" && input === "❌") ||
    (input_btn_5.textContent === "❌" && input === "0")
  ) {
    player.innerHTML = "Not a valid move !";
  } else {
    input_btn_5.textContent = input;
    console.log();
  }

  top_middle_258_win();
  top_middle_456_win();
  diagonal_159_win();
  diagonal_357_win();
});
input_btn_6.addEventListener("click", function (e) {
  toggleInputValue();
  if (
    (input_btn_6.textContent === "0" && input === "❌") ||
    (input_btn_6.textContent === "❌" && input === "0")
  ) {
    player.innerHTML = "Not a valid move !";
  } else {
    input_btn_6.textContent = input;
    console.log();
  }

  right_369_win();
  top_middle_456_win();
});
input_btn_7.addEventListener("click", function (e) {
  toggleInputValue();
  if (
    (input_btn_7.textContent === "0" && input === "❌") ||
    (input_btn_7.textContent === "❌" && input === "0")
  ) {
    player.innerHTML = "Not a valid move !";
  } else {
    input_btn_7.textContent = input;
    console.log();
  }

  left_147_win();
  bottom_789_win();
  diagonal_357_win();
});
input_btn_8.addEventListener("click", function (e) {
  toggleInputValue();
  if (
    (input_btn_8.textContent === "0" && input === "❌") ||
    (input_btn_8.textContent === "❌" && input === "0")
  ) {
    player.innerHTML = "Not a valid move !";
  } else {
    input_btn_8.textContent = input;
    console.log();
  }
  top_middle_258_win();
  bottom_789_win();
});
input_btn_9.addEventListener("click", function (e) {
  toggleInputValue();
  if (
    (input_btn_9.textContent === "0" && input === "❌") ||
    (input_btn_9.textContent === "❌" && input === "0")
  ) {
    player.innerHTML = "Not a valid move !";
  } else {
    input_btn_9.textContent = input;
    console.log();
  }
  right_369_win();
  bottom_789_win();
  diagonal_159_win();
});
