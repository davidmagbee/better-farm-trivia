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


// Array of Starter Q/A Objects
const questions = [
    {
       question: "How many horses live at Better Farm?",
       correct: 2, 
       answerPool: [0, 2, 4, 5]
    },
    {
        question: "How many pigs live at Better Farm?",
        correct: 3, 
        answerPool: [2, 3, 4, 5]
     },
     {
        question: "How many chickens live at Better Farm?",
        correct: 25, 
        answerPool: [2, 13, 25, 42]
     },
     {
        question: "How many alpacas live at Better Farm?",
        correct: 8, 
        answerPool: [4, 6, 8, 12]
     },
     {
        question: "How many dogs live at Better Farm?",
        correct: 3, 
        answerPool: [0, 2, 3, 4]
     },
     {
        question: "How many bee hives host bees at Better Farm?",
        correct: 1, 
        answerPool: [0, 1, 3, 5]
     },
     {
        question: "How many humans regularly live at Better Farm?",
        correct: 2, 
        answerPool: [2, 3, 4, 5]
     },
]

// Start game button to initialize trivia game board.
const startGame = document.querySelector("#start");
const nextQuestion = document.querySelector("#next");
let questionBox = document.querySelector(".question");
let answersBox = document.querySelector(".answers");


let randomQuestion = Math.floor(Math.random() * questions.length)
let currentQuestion = questions[randomQuestion];

startGame.addEventListener("click", populateQuery());

function populateQuery() {
    let question = currentQuestion.question
    console.log(question)
    questionBox.textContent = question
    let answers = currentQuestion.answerPool
    console.log(answers)
    answers.forEach((el) => {
        console.log(el)
        let possAnswer = document.createElement("div")
        possAnswer.textContent = el
        possAnswer.className = "answer-pool"
        console.log(possAnswer)
        answersBox.appendChild(possAnswer)
    })
};

// populateQuery();

// function populateAnswers() {
//     for (var i = 0; i < Array.length; i += 1) {

//     }
// };

// function checkAnswer() {
//     if () {

//     }
// };

// nextQuestion.addEventListener("click", () => {

// });

// STILL NEED: functionality to add correct answers to running score
// Event Listener for correct answer 'click'
//// include alert for correct answer
//// tally score to score div (not yet created)