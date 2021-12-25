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

var timer = document.getElementById("timer")
var secondsRemaining = 11;

var questionTitle = document.getElementById("question-title")
var questionTitle = document.getElementById("answers")
var answerResponse = document.getElementById("answer-response")

var questions = [ 
    {
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
    
    function showQuestions() {
        questionSection = document.getElementById("questions").hidden = false;
        questionTitle.textContent = questions.questionTitle[0];
    }
    showQuestions()
    
    function startTimer() {
        var timerInterval = setInterval(function() {
            secondsRemaining--;
            timer.textContent = secondsRemaining;
    
            if(secondsLeft === 0) {
                clearInterval(timerInterval);
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