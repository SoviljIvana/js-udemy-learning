/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game


CHALLENGE
Change the game to follow these rules:
1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/


//declaration and definition of variables
var firstPlayerGlobalScore,
  secondPlayerGlobalScore,
  firstPlayerCurrentScore,
  secondPlayerCurrentScore;
firstPlayerCurrentScore = 0;
secondPlayerCurrentScore = 0;
firstPlayerGlobalScore = 0;
secondPlayerGlobalScore = 0;
refresh();

/***
 * On click roll button, players get number between 1 and 6
 */
document.querySelector(".btn-roll").addEventListener("click", function () {
  var randomNumber = Math.floor(Math.random() * 6) + 1;
  if (document.querySelector(".player-0-panel").classList.contains("active")) {
    if (firstPlayerGlobalScore >= 20 || secondPlayerGlobalScore >= 20) {
      if (firstPlayerGlobalScore >= 20 ){
        document.getElementById("name-0").textContent = "Winner";
      }else if(secondPlayerGlobalScore >= 20){
        document.getElementById("name-1").textContent = "Winner";
      }
      document.querySelector(".player-0-panel").classList.remove("active");
      document.querySelector(".player-1-panel").classList.remove("active");
      document.querySelector(".btn-roll").style.display = "none";
      document.querySelector(".btn-hold").style.display = "none";
    } else {
      if (randomNumber === 1) {
        document.querySelector(".dice").src = "dice-" + randomNumber + ".png";
        document.querySelector(".dice").style.display = "block";
        document.getElementById("current-0").textContent = "0";
        firstPlayerCurrentScore = 0;
        nextPlayer();
      } else {
        document.querySelector(".dice").src = "dice-" + randomNumber + ".png";
        document.querySelector(".dice").style.display = "block";
        firstPlayerCurrentScore += randomNumber;
        document.getElementById(
          "current-0"
        ).textContent = firstPlayerCurrentScore;
      }
    }
  } else {
    if (secondPlayerGlobalScore >= 20 || firstPlayerGlobalScore >= 20) {
      if (firstPlayerGlobalScore >= 20 ){
        document.getElementById("name-0").textContent = "Winner";
      }else if(secondPlayerGlobalScore >= 20){
        document.getElementById("name-1").textContent = "Winner";
      }
      document.querySelector(".player-0-panel").classList.remove("active");
      document.querySelector(".player-1-panel").classList.remove("active");
      document.querySelector(".btn-roll").style.display = "none";
      document.querySelector(".btn-hold").style.display = "none";
    }  else {
      if (randomNumber === 1) {
        document.querySelector(".dice").src = "dice-" + randomNumber + ".png";
        document.querySelector(".dice").style.display = "block";
        document.getElementById("current-1").textContent = "0";
        secondPlayerCurrentScore = 0;
        nextPlayer();
      } else {
        document.querySelector(".dice").src = "dice-" + randomNumber + ".png";
        document.querySelector(".dice").style.display = "block";
        secondPlayerCurrentScore += randomNumber;
        document.getElementById(
          "current-1"
        ).textContent = secondPlayerCurrentScore;
      }
    }
  }
});

/****
 * On click hold button, players can set current score to global score
 *  like sum with previous global score
 */
document.querySelector(".btn-hold").addEventListener("click", function () {
  if (document.querySelector(".player-0-panel").classList.contains("active")) {
    firstPlayerGlobalScore += firstPlayerCurrentScore;
    document.getElementById("score-0").textContent = firstPlayerGlobalScore;
    document.getElementById("current-0").textContent = "0";
    document.querySelector(".dice").style.display = "none";
    firstPlayerCurrentScore = 0;
    nextPlayer();
  } else {
    secondPlayerGlobalScore += secondPlayerCurrentScore;
    document.getElementById("score-1").textContent = secondPlayerGlobalScore;
    document.getElementById("current-1").textContent = "0";
    document.querySelector(".dice").style.display = "none";
    secondPlayerCurrentScore = 0;
    nextPlayer();
  }
});

/***
 * Function for switching players
 */
function nextPlayer() {
  if (document.querySelector(".player-0-panel").classList.contains("active")) {
    if (document.getElementById("current-0").textContent === "0") {
      document.querySelector(".dice").style.display = "none";
      document.querySelector(".player-0-panel").classList.remove("active");
      document.querySelector(".player-1-panel").classList.toggle("active");
    }
  } else {
    if (document.getElementById("current-0").textContent === "0") {
      document.querySelector(".dice").style.display = "none";
      document.querySelector(".player-0-panel").classList.toggle("active");
      document.querySelector(".player-1-panel").classList.remove("active");
    }
  }
}

/**
 * On click button new game all results are 0 (both players)
 */
document.querySelector(".btn-new").addEventListener("click", function () {
  refresh();
  firstPlayerCurrentScore,
    secondPlayerCurrentScore,
    firstPlayerGlobalScore,
    secondPlayerGlobalScore = 0;
  document.querySelector(".dice").style.display = "block";
  document.querySelector(".btn-roll").style.display = "block";
  document.querySelector(".btn-hold").style.display = "block";
});

/**
 * Refresh function set all scores to be 0 and delete dice
 */
function refresh() {
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";
  document.querySelector(".dice").style.display = "none";
}

