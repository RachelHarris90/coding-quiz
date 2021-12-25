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
var scoresSection = document.getElementById("scores").hidden = true;
var scoreboardSection = document.getElementById("scoreboard").hidden = true;
var startGameSection = document.getElementById("start-game")
var startButton = document.getElementById("start-button")

var timer = document.getElementById("timer")
var secondsRemaining = 10;


// Do I need any of this? Should I use setAttribute instead?
// var questionTitle1 = document.getElementById('#question-title');
// var answerA1 = document.getElementById('#answerA');
// var answerB1 = document.getElementById('#answerB');
// var answerC1 = document.getElementById('#answerC');
// var answerD1 = document.getElementById('#answerD');

var questions = [ 
    {
        questionTitle: "Which is Australia's second largest state by area?",
        answerA: "New South Wales", 
        answerB: "Queensland (correct answer)", 
        answerC: "South Australia",
        answerD: "Western Australia", 
    },
    {
        questionTitle: "Which is the largest desert in Australia?",
        answerA: "Gibson Desert", 
        answerB: "Great Sandy Desert", 
        answerC: "Great Victoria Desert (correct answer)",
        answerD: "Simpson Desert", 
    },
    {
        questionTitle: "Which body of water is home to the Great Barrier Reef?",
        answerA: "Arafura Sea", 
        answerB: "Coral sea (correct answer)", 
        answerC: "Solomon Sea",
        answerD: "Timor sea", 
    },
    {
        questionTitle: "The Ashmore and Cartier Islands are situated in which ocean?",
        answerA: "Atlantic Ocean", 
        answerB: "Indian Ocean (correct answer)", 
        answerC: "Pacific Ocean",
        answerD: "Southern Ocean", 
    },
    {
        questionTitle: "Which is the most populous of the Torres Strait Islands?",
        answerA: "Badu Island", 
        answerB: "Horn Island", 
        answerC: "Murray Island",
        answerD: "Thursday Island (correct answer)", 
    },
  ];

// Timer function
function startTimer() {
    var TimerInterval = setInterval(function() {
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

startButton.addEventListener("click", startTimer());

function startGame() {
    questionSection.setAttribute("hidden", false);
    startGameSection.setAttribute("hidden", true);
    // start the timer
  }

startButton.addEventListener("click", startGame());





// Show the question

// function hideScores() {
    
// }


// function startTimer() {

// }

// use minus equals to reduce the time
