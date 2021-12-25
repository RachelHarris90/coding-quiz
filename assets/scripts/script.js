// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score

// Sections on the page to show/hide based on stage of game
var questionSection = document.getElementById("questions").hidden = true;
var currentScoreSection = document.getElementById("scores").hidden = true;
var scoreboardSection = document.getElementById("scoreboard").hidden = true;
var startGameSection = document.getElementById("start-game")
var startButton = document.getElementById("start-button")
var highScoresButton = document.getElementById("high-scores")

var timer = document.getElementById("timer")
var secondsRemaining = 61;

var winCounter = 0;
var lossCounter = 0;

// TODO: Changes these to be created elements as the game is going
// TODO: Remove placeholder names
var highscores = [
    {
        name: "RH",
        score: "3",

    },
    {
        name: "AA",
        score: "2",

    },
    ];

// TODO: Changes these to be created elements as the game is starting
var questionNumber = document.getElementById("question-number")
var questionTitle = document.getElementById("question-title")
var answerOptions = document.getElementById("answer-options")
var answerResponse = document.getElementById("answer-response")

var questions = [ 
    {
        questionNumber: "Question 1",
        questionTitle: "Which is Australia's second largest state by area?",
        answers: [
            "New South Wales",
            "Queensland (correct answer)", 
            "South Australia",
            "Western Australia", 
        ],
        correctAnswer: 1,
    },
    {
        questionNumber: "Question 2",
        questionTitle: "Which is the largest desert in Australia?",
        answers: [
            "Gibson Desert",
            "Great Sandy Desert",  
            "Great Victoria Desert (correct answer)",
            "Simpson Desert", 
        ],
        correctAnswer: 2,
    },
    {
        questionNumber: "Question 3",
        questionTitle: "Which body of water is home to the Great Barrier Reef?",
        answers: [
            "Arafura Sea",
            "Coral sea (correct answer)",  
            "Solomon Sea",
            "Timor sea", 
        ],
        correctAnswer: 1,
    },
    {
        questionNumber: "Question 4",
        questionTitle: "The Ashmore and Cartier Islands are situated in which ocean?",
        answers: [
            "Indian Ocean (correct answer)", 
            "Atlantic Ocean",
            "Pacific Ocean",
            "Southern Ocean", 
        ],
        correctAnswer: 0,
    },
    {
        questionNumber: "Question 5",
        questionTitle: "Which is the most populous of the Torres Strait Islands?",
        answers: [
            "Badu Island", 
            "Horn Island",
            "Murray Island",
            "Thursday Island (correct answer)", 
        ],
        correctAnswer: 3,
    },
  ];

// When the start button is clicked, the timer starts and the first question is displayed
function startGame() {
    startGameSection.setAttribute("hidden", true);
    // TODO: Show the questions from the array
    function showQuestions() {
        questionSection = document.getElementById("questions").hidden = false;
        }
    showQuestions();

    // Loop through questions
    
    function startTimer() {
        var timerInterval = setInterval(function() {
            secondsRemaining--;
            timer.textContent = secondsRemaining;
    
            if (secondsRemaining === 0) {
                clearInterval(timerInterval);
                timer.textContent = "You're out of time 😞"
            }
            // Incriment or decriment score
                // timeleft = timeleft - 10
                // Use minus equals to reduce the time
            // Show next question
        }, 1000);
    }
    startTimer();
  }

startButton.addEventListener("click", startGame)

function viewHighScores() {
    startGameSection.setAttribute("hidden", true);
    currentScoreSection = document.getElementById("scores").hidden = true;
    questionSection = document.getElementById("questions").hidden = true;
    scoreboardSection = document.getElementById("scoreboard").hidden = false;

    
}
highScoresButton.addEventListener("click", viewHighScores)

// Check if the answer selected is correct
// function checkAnswer() {
//     if (answerSelected === questions.answers.correctAnswer) {
//         answerResponse.textContent = "You're right!";
//         // incriment time
//     } else {
//         answerResponse.textContent = "Sorry, that's not right";
//         // show next question
//         // decrement time
//     }
//   };

//   document.getElementById('button').addEventListener("click", checkAnswer(answerSelected));




// TODO: Add high scores to list - refer to 01 Monday / 07 Ins Create Append