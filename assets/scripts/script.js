// Sections on the page to show/hide based on stage of game
var questionSection = document.getElementById("questions").hidden = true;
var currentScoreSection = document.getElementById("scores").hidden = true;
var scoreboardSection = document.getElementById("scoreboard").hidden = true;
var startGameSection = document.getElementById("start-game")
var startButton = document.getElementById("start-button")
var highScoresButton = document.getElementById("high-scores")

var timer = document.getElementById("timer")
var secondsRemaining = 61;

var questionNumber = document.getElementById("question-number")
var questionTitle = document.getElementById("question-title")
var answerOptions = document.getElementById("answer-options")
var answerResponse = document.getElementById("answer-response")

var highScoresList = document.querySelector("#high-scores-list")
var clearHighScoresList = document.querySelector("#clear-high-scores")

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

// TODO: Remove placeholder names
var highScoresArray = ["RH - 54", "LR - 32"];

// When the start button is clicked, the timer starts and the first question is displayed
function startGame() {
    startGameSection.setAttribute("hidden", true);
    // TODO: Show the questions from the array
    function showQuestions() {
        questionSection = document.getElementById("questions").hidden = false;
        
        // Create variables to use to setup the list of answers
        var questionIndex = 0;
        questionNumber.textContent = questions[questionIndex].questionNumber;
        questionTitle.textContent = questions[questionIndex].questionTitle;
     
        var answer

        // Loop through to add the answers to the list
        for (var i = 0; i < questions[questionIndex].answers.length; i++) {
            var answer = questions[questionIndex].answers[i];

            var button = document.createElement("button");
            button.textContent = answer;

            // Add answers as li's under the ul
            answerOptions.appendChild(button);
            button.setAttribute("class", "answerItem");
        }
    }
    // Run the show questions function
    showQuestions();
    
function startTimer() {
    var timerInterval = setInterval(function() {
        secondsRemaining--;
        timer.textContent = secondsRemaining;

        // TODO: When time runs out, go to end of the game
        if (secondsRemaining === 0) {
            clearInterval(timerInterval);
            timer.textContent = "You're out of time 😞"
        }
    }, 1000);
}
    startTimer();
  }
startButton.addEventListener("click", startGame);

// TODO: Capture selected answer
// var selectedAnswer = document.querySelector(".answerItem");

// TODO: Check if the selected answer is correct
// function showSelectedAnwer() {
//     var selectedAnswer = button.value;
//     answerResponse.textContent = selectedAnswer;
// }

// answerResponse.addEventListener("click", showSelectedAnwer);

// // Check if the answer selected is correct
// selectedAnswer.addEventListener("click", function checkAnswer() {
//     if (selectedAnswer === questions[questionIndex].correctAnswer) {
//         answerResponse.textContent = "You're right!";
//         // incriment time
//     } else {
//         answerResponse.textContent = "Sorry, that's not right";
//         // show next question
//         // decrement time
//     }
//   });


// TODO: At the end of the game, enter initials and save score
// Fetch array from local storage, add to the array and save it to local storage
// Store in an array by concatenating initials and score [IN - 34]
// Save high score with localStorage.getItem which will give a string


function renderHighScores() {
    startGameSection.setAttribute("hidden", true);
    currentScoreSection = document.getElementById("scores").hidden = true;
    questionSection = document.getElementById("questions").hidden = true;
    scoreboardSection = document.getElementById("scoreboard").hidden = false;

    // TODO: Get these from local storage instead of hard coded
    // Loop through to add the high scores and render in a list
    for (var i = 0; i < highScoresArray.length; i++) {

        var li = document.createElement("li");
        li.textContent = highScoresArray[i];
        highScoresList.appendChild(li);
        
    }
}

highScoresButton.addEventListener("click", renderHighScores());


clearHighScoresList.addEventListener("click", function() {
    highScoresList = [];
})
