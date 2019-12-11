//// Initial conceptual process...
// Develop Questions
// Create question array const
// Use OOP to create an Object with key:value pairs for Qs/As
// Create class for Question (question, choices, answer)
// Create class for actual trivia question quiz

// MVP process
// Create questions (3-5) - use array - DONE
// Create answers (=) - use array - DONE
// Create Next question button - DONE
// Populate Qs/As using DOM manipulation
// INTRO MODAL WINDOW???
// POPULATE trivia game
//// Questions and Answers divs created into game box (DOM) 
// Create event listeners for answer check and response
// Create answer check - use boolean logic to check answer
// Next question functionality

// Array of the Starter Question Pack
const questions = [
    "How many horses live at Better Farm?",
    "How many pigs live at Better Farm?",
    "How many chickens live at Better Farm?",
    "How many alpacas live at Better Farm?",
    "How many dogs live at Better Farm?",
    "How many bee hives host bees at Better Farm?",
    "How many humans regularly live at Better Farm?"
]

// Array of the the Starter Question Pack Correct Answers
const correctAnswers = [
    2, 
    3,
    25,
    8,
    3,
    1,
    2
]

// let incorrectAnswer = ;

let currentQuestion = document.querySelectorAll(questions[i]);
let correctAnswer = document.querySelectorAll(correctAnswers[i]);
// let incorrectAnswers = 

// STILL NEED: var to create an incorrect answer set of random numbers
// Math.floor(Math.random() * 101);    <- This will generate the integer, not sure how to implement

// STILL NEED: functionality to add correct answers to running score

// Start game button to initialize trivia game board.
const startGame = document.querySelector("#start");

startGame.addEventListener("click", () => {

});

function createQuiz() {
    for (var i = 0; i < Array.length; i +=)
    
}