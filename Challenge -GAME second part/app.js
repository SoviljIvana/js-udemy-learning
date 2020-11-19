/*
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
var sumOfRundomNumbers = 0;
var maxScore = 20;
refresh();

/***
 * On click roll button, players get number between 1 and 6
 */
document.querySelector(".btn-roll").addEventListener("click", function () {
  var randomNumber = Math.floor(Math.random() * 6) + 1;
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  console.log(randomNumber, randomNumber1);
  if (document.querySelector(".player-0-panel").classList.contains("active")) {
    if (firstPlayerGlobalScore >= maxScore || secondPlayerGlobalScore >= maxScore) {
      if (firstPlayerGlobalScore >= maxScore ){
        document.getElementById("name-0").textContent = "Winner";
      }else if(secondPlayerGlobalScore >= maxScore){
        document.getElementById("name-1").textContent = "Winner";
      }
      document.querySelector(".player-0-panel").classList.remove("active");
      document.querySelector(".player-1-panel").classList.remove("active");
      document.querySelector(".btn-roll").style.display = "none";
      document.querySelector(".btn-hold").style.display = "none";
    } else {
      if (randomNumber === 1 || randomNumber1 === 1) {
        document.querySelector(".dice").src = "dice-" + randomNumber + ".png";
        document.querySelector(".dice").style.display = "block";
        document.querySelector(".dice1").src = "dice-" + randomNumber1 + ".png";
        document.querySelector(".dice1").style.display = "block";
        document.getElementById("current-0").textContent = "0";
        firstPlayerCurrentScore = 0;
        alert('The player looses his current score when one of them is a 1. Sorry!');
        nextPlayer();

      }else if(randomNumber === 6 && randomNumber1 === 6) {
        document.querySelector(".dice").src = "dice-" + randomNumber + ".png";
        document.querySelector(".dice").style.display = "block";
        document.querySelector(".dice1").src = "dice-" + randomNumber1 + ".png";
        document.querySelector(".dice1").style.display = "block";
        document.getElementById("current-0").textContent = "0";
        firstPlayerGlobalScore = 0;
        firstPlayerCurrentScore = 0;
        document.getElementById("score-0").textContent = "0";
        document.getElementById("current-0").textContent = "0";
        nextPlayer();
      }else {
        document.querySelector(".dice").src = "dice-" + randomNumber + ".png";
        document.querySelector(".dice").style.display = "block";
        document.querySelector(".dice1").src = "dice-" + randomNumber1 + ".png";
        document.querySelector(".dice1").style.display = "block";
        sumOfRundomNumbers = randomNumber + randomNumber1;
        firstPlayerCurrentScore += sumOfRundomNumbers;
        document.getElementById(
          "current-0"
        ).textContent = firstPlayerCurrentScore;
      }
    }
  } else {
    if (secondPlayerGlobalScore >= maxScore || firstPlayerGlobalScore >= maxScore) {
      if (firstPlayerGlobalScore >= maxScore ){
        document.getElementById("name-0").textContent = "Winner";
      }else if(secondPlayerGlobalScore >= maxScore){
        document.getElementById("name-1").textContent = "Winner";
      }
      document.querySelector(".player-0-panel").classList.remove("active");
      document.querySelector(".player-1-panel").classList.remove("active");
      document.querySelector(".btn-roll").style.display = "none";
      document.querySelector(".btn-hold").style.display = "none";
    }  else {
      if (randomNumber === 1 || randomNumber1 === 1){
        document.querySelector(".dice").src = "dice-" + randomNumber + ".png";
        document.querySelector(".dice").style.display = "block";
        document.querySelector(".dice1").src = "dice-" + randomNumber1 + ".png";
        document.querySelector(".dice1").style.display = "block";
    
        secondPlayerCurrentScore = 0;
        alert('The player looses his current score when one of them is a 1. Sorry!');

        nextPlayer();
        document.getElementById("current-1").textContent = "0";
      } else if(randomNumber === 6 && randomNumber1 === 6) {
        document.querySelector(".dice").src = "dice-" + randomNumber + ".png";
        document.querySelector(".dice").style.display = "block";
        document.querySelector(".dice1").src = "dice-" + randomNumber1 + ".png";
        document.querySelector(".dice1").style.display = "block";
        document.getElementById("current-0").textContent = "0";
        secondPlayerGlobalScore = 0;
        secondPlayerCurrentScore = 0;
        document.getElementById("current-1").textContent = "0";
        nextPlayer();
      } else {
        document.querySelector(".dice").src = "dice-" + randomNumber + ".png";
        document.querySelector(".dice").style.display = "block";
        document.querySelector(".dice1").src = "dice-" + randomNumber1 + ".png";
        document.querySelector(".dice1").style.display = "block";
        sumOfRundomNumbers = randomNumber + randomNumber1;
        secondPlayerCurrentScore += sumOfRundomNumbers;
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
    document.querySelector(".dice1").style.display = "none";
    firstPlayerCurrentScore = 0;
    nextPlayer();
  } else {
    secondPlayerGlobalScore += secondPlayerCurrentScore;
    document.getElementById("score-1").textContent = secondPlayerGlobalScore;
    document.getElementById("current-1").textContent = "0";
    document.querySelector(".dice").style.display = "none";
    document.querySelector(".dice1").style.display = "none";
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
      document.querySelector(".dice1").style.display = "none";
      document.querySelector(".player-0-panel").classList.remove("active");
      document.querySelector(".player-1-panel").classList.toggle("active");
    }
  } else {
    if (document.getElementById("current-0").textContent === "0") {
      document.querySelector(".dice").style.display = "none";
      document.querySelector(".dice1").style.display = "none";
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
  firstPlayerCurrentScore = 0,
    secondPlayerCurrentScore = 0,
    firstPlayerGlobalScore = 0,
    secondPlayerGlobalScore = 0;
  document.querySelector(".dice").style.display = "none";
  document.querySelector(".dice1").style.display = "none";
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
  document.querySelector(".dice1").style.display = "none";

}

document.querySelector('.max-score').addEventListener('click', function(){
  var x = document.getElementById("myInput").value;
  maxScore = x;

})








