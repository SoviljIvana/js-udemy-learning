/*****
 * -----Let's build a fun quiz game in the console! -----
 * 
 * 1. Build a function constructor called Question to describe a question. A question should include:
 a) question itself
 b) the answers from which the player can choose the correct one(choose an adequate data structure here, array, object, etc..
 c) correct answer (I would use a number for this)

 2. Create a couple of questions using the constructor

 3. Store them all inside an array
 
 4. Select one random question and log it on the console, together with the possible answers (each question should have a number ) (Hint: write a method for the Question objects for this task).

 5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number  of the correct answer such as you displayed it on Task 4.

 6. Check if the answer is correct and print to the console whether the answer is correct or not (Hint: write another method for this)

 7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that)



 --- Expert level ---

 8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

 9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T 
 call the function from task 8.

 10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I am going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point)

 11. Display the score in the console. Use yet another method for this.
 */

function Question(question, answers, correctAnswer) {
  this.question = question;
  this.answers = answers;
  this.correctAnswer = correctAnswer;
}
var score = 0;

Question.prototype.getQuestion = function () {
  var randomNumber = Math.floor(Math.random() * 4) + 1;
  console.log(randomNumber);
  var correctAns;
  for (i = 0; i < arrayOfQuestions.length; i++) {
    if (randomNumber === i + 1) {
      correctAns = arrayOfQuestions[i].correctAnswer;
      console.log("Question is: " + arrayOfQuestions[i].question);
      console.log(
        "Choose one of the following answers: " + arrayOfQuestions[i].answers
      );
    }
  }
  var answer = prompt("What is your answer?", "write your answer here");
  checkIfAnswerIsGood();
  function checkIfAnswerIsGood() {
    if (answer === correctAns) {
      console.log("Congrats!");
      score += 1;
      firstQuestion.getQuestion();
    } else if (answer === "quit") {
      prompt.stop;
      console.log('Your score is: ' + score);
    } else {
      console.log("Please try again.");
      firstQuestion.getQuestion();
  
    }
  }
};

var firstQuestion = new Question("Who I am? ", ["Ivana", "Jovana"], "Ivana");
var secondQuestion = new Question(
  "Am I doing something smart right now? ",
  ["yes", "no"],
  "yes"
);
var thirdQuestion = new Question(
  "Which of the following is my favourite color? ",
  ["blue", "orange"],
  "blue"
);
var fourthQuestion = new Question(
  "What I want to do? ",
  ["drink beer", "drink wine"],
  "drink wine"
);

var arrayOfQuestions = [
  firstQuestion,
  secondQuestion,
  thirdQuestion,
  fourthQuestion,
];

firstQuestion.getQuestion();
