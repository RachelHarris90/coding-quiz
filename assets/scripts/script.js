// Sections on the page to show/hide based on stage of game
var questionSection = document.getElementById("questions").hidden = true;
var saveScoreSection = document.getElementById("save-scores").hidden = true;
var scoreboardSection = document.getElementById("scoreboard").hidden = true;
var startGameSection = document.getElementById("start-game")
var startButton = document.getElementById("start-button")
var highScoresButton = document.getElementById("high-scores")

var timer = document.getElementById("timer")
var secondsRemaining = 61;

var questionNumber = document.getElementById("question-number")
var questionTitle = document.getElementById("question-title")
var answerOptions = document.getElementById("answer-options")


var highScoresList = document.querySelector("#high-scores-list")
var clearHighScoresList = document.querySelector("#clear-high-scores")
var backToStart = document.querySelector("#back-to-start")

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


var questionIndex = 0;

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

function showQuestions() {
    questionSection = document.getElementById("questions").hidden = false;
    
    // Create variables to use to setup the list of answers
    questionNumber.textContent = questions[questionIndex].questionNumber;
    questionTitle.textContent = questions[questionIndex].questionTitle;
 
    var answer

    // Loop through to add the answers to the list
    for (var i = 0; i < questions[questionIndex].answers.length; i++) {
        var answer = questions[questionIndex].answers[i];

        var li = document.createElement("li");
        li.textContent = answer;

        // Add answers as li's under the ul
        // Add data-index based on the position in the list
        li.setAttribute("class", "answerItem");
        li.setAttribute("data-index", i);
        answerOptions.appendChild(li);
    }
}

// When the start button is clicked, the timer starts and the first question is displayed
function startGame() {
    startGameSection.setAttribute("hidden", true);
    // TODO: Show the questions from the array
    // Run the show questions function
    showQuestions();
    startTimer();
  }
startButton.addEventListener("click", startGame);


function renderHighScores() {
    startGameSection.setAttribute("hidden", true);
    currentScoreSection = document.getElementById("scores").hidden = true;
    questionSection = document.getElementById("questions").hidden = true;
    scoreboardSection = document.getElementById("scoreboard").hidden = false;

    // 
    // getHighScores()

    // TODO: Get these from local storage instead of hard coded
    // Loop through to add the high scores and render in a list
    for (var i = 0; i < highScoresList.length; i++) {

        var li = document.createElement("li");
        li.textContent = highScoresList[i];
        highScoresList.appendChild(li);
    }
};

// TODO: Capture selected answer
function checkAnswer(t) {
    var li = t.target.getAttribute("data-index")
    console.log("The selected answer it: " + li);

    // Check if answer is correct and give feedback on screen
    var answerResponse = document.getElementById("answer-response");

    console.log("The correct answer is: " + questions[questionIndex].correctAnswer)

    if (li == questions[questionIndex].correctAnswer) {
        answerResponse.textContent = "That's right!";
        
    } else {
        answerResponse.textContent = "Sorry, that's not right";
        // TODO: Decriment time based on incorrect answer
    }

    // Remove previous answers
    var answerOptions = document.getElementById("answer-options");
    while (answerOptions.firstChild) {
        answerOptions.removeChild(answerOptions.firstChild);
    }

    // TODO: Fix this where it shows the next question even when there are none
    // If there are more questions, show them
    if (questionIndex < questions.length) {
        questionIndex++;
        showQuestions();
        console.log("Question length is: " + questions.length);
        console.log("Question index is: " + questionIndex);
    // If there are no more questions, go to the high scores page
    } else {
        saveScoreSection = document.getElementById("questions").hidden = false;
        clearInterval(secondsRemaining);
        return;
    };
}

answerOptions.addEventListener("click", checkAnswer);


// TODO: At the end of the game, enter initials and save score
var initialsInput = document.querySelector("#initials");
var scoresForm = document.querySelector("#scores-form")
var submitScore = document.querySelector("#submit-score")
var highScoresList = [];

function getHighScores() {
    var storedScores = JSON.parse(localStorage.getItem("highScoresList"))
    
    if (storedScores !== null) {
        highScoresList = storedScores;
    }
}

function storeScores() {
    localStorage.setItem("highScoresList", JSON.stringify(highScoresList));
}

scoresForm.addEventListener("click", function() {
    
    var initials = initialsInput.value.trim();

    if (initials === "") {
        return;
    }

    highScoresList.push(initials)
    initialsInput.value = "";

    getHighScores(); 
});



// Fetch array from local storage, add to the array and save it to local storage
// Save high score with localStorage.getItem which will give a string




// Navigate to the high scores section
highScoresButton.addEventListener("click", renderHighScores);

// Clear high scores when the option is selected
clearHighScoresList.addEventListener("click", function() {
    highScoresList = [];
})

// Navigate back to start of game if option is selected
backToStart.addEventListener("click", function() {
    startGameSection.setAttribute("hidden", false);
    currentScoreSection.setAttribute("hidden", true);
    questionSection.setAttribute("hidden", true);
    scoreboardSection.setAttribute("hidden", true);
})