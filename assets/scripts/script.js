// Sections on the page to show/hide based on stage of game
var questionSection = document.getElementById("questions").hidden = true;
var saveScoreSection = document.getElementById("save-scores").hidden = true;
var scoreboardSection = document.getElementById("scoreboard").hidden = true;
var startGameSection = document.getElementById("start-game")
var startButton = document.getElementById("start-button")
var highScoresButton = document.getElementById("high-scores")

// Element and starting time for the timer
var timer = document.getElementById("timer")
var secondsRemaining = 61;

// Elements for the question and answers
var questionNumber = document.getElementById("question-number")
var questionTitle = document.getElementById("question-title")
var answerOptions = document.getElementById("answer-options")

// Elements for high scores section
var highScoresDisplay = document.querySelector("#high-scores-display")
var clearHighScoresList = document.querySelector("#clear-high-scores")
var backToStart = document.querySelector("#back-to-start")

// To add a new score 
var finalScore = document.querySelector("#final-score")
var newScore
var initialsInput = document.querySelector("#initials");
var scoresForm = document.querySelector("#scores-form")
var submitScore = document.querySelector("#submit-score")

// Array of high scores to be populated as the game is being played
var highScoresList = [];

// Array of questions with their answers
var questions = [ 
    {
        questionNumber: "Question 1",
        questionTitle: "Which is Australia's second largest state by area?",
        answers: [
            "New South Wales",
            "Queensland", 
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
            "Great Victoria Desert",
            "Simpson Desert", 
        ],
        correctAnswer: 2,
    },
    {
        questionNumber: "Question 3",
        questionTitle: "Which body of water is home to the Great Barrier Reef?",
        answers: [
            "Arafura Sea",
            "Coral sea",  
            "Solomon Sea",
            "Timor sea", 
        ],
        correctAnswer: 1,
    },
    {
        questionNumber: "Question 4",
        questionTitle: "The Ashmore and Cartier Islands are situated in which ocean?",
        answers: [
            "Indian Ocean", 
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
            "Thursday Island", 
        ],
        correctAnswer: 3,
    },
  ];


// Get high scores from local storage to show when going to high scores page
var questionIndex = 0;

function getHighScores() {
    var storedScores = JSON.parse(localStorage.getItem("highScoresList"))
    
    if (storedScores !== null) {
        highScoresList = storedScores;
    }
}

// Function to render high scores page and list out all scores
function renderHighScores() {
    startGameSection.setAttribute("hidden", true);
    questionSection = document.getElementById("questions").hidden = true;
    scoreboardSection = document.querySelector("#scoreboard").hidden = false;
    
    getHighScores();

    // Loop through to add the high scores and render in a list
    for (var i = 0; i < highScoresList.length; i++) {

        var li = document.createElement("li");
        li.textContent = highScoresList[i];
        highScoresDisplay.appendChild(li);
    }
}


// Function to start the clock that will be called when the game starts
function startTimer() {
    var timerInterval = setInterval(function() {
        secondsRemaining--;
        timer.textContent = secondsRemaining;

        // When time runs out, go to end of the game
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

        // Create li's to display the answers in
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
    // Run the show questions function
    showQuestions();
    // Start the timer as the game starts
    startTimer();
    // Get the high scores to be able to add to later
    getHighScores();
  }
startButton.addEventListener("click", startGame);

// Capture selected answer
function checkAnswer(t) {
    // Find out answer item was selected
    var li = t.target.getAttribute("data-index")
    console.log("The selected answer it: " + li);

    // Check if answer is correct and give feedback on screen
    var answerResponse = document.getElementById("answer-response");

    console.log("The correct answer is: " + questions[questionIndex].correctAnswer)

    // Give feedback based on whether question was correct or incorrect
    if (li == questions[questionIndex].correctAnswer) {
        answerResponse.textContent = "That's right!";
        
    } else {
        answerResponse.textContent = "Sorry, that's not right";

        // Decrement time if the answer is incorrect
        timerDecrement = 10;
        secondsRemaining = (secondsRemaining - timerDecrement--);
    }

    // Remove previous answers
    var answerOptions = document.getElementById("answer-options");
    while (answerOptions.firstChild) {
        answerOptions.removeChild(answerOptions.firstChild);
    }

    // If there are more questions, show them
    if (questionIndex+1 < questions.length) {
        questionIndex++;
        showQuestions();
        console.log("Question length is: " + questions.length);
        console.log("Question index is: " + questionIndex);
    // If there are no more questions, go to the page to enter initials and stop timer
    } else {
        var questionSection = document.getElementById("questions").hidden = true;
        var saveScoreSection = document.getElementById("save-scores").hidden = false;

        newScore = secondsRemaining
        finalScore.textContent = "Your final score is " + newScore;

        timer.textContent = "Game complete!";
        clearInterval(secondsRemaining);
    }
}
answerOptions.addEventListener("click", checkAnswer);

// Add score after completing the game
scoresForm.addEventListener("click", function() {
    
    var initials = initialsInput.value.trim();

    if (initials === "") {
        return;
    }

    // Add the initials and score into local storage
    highScoresList.push(initials + "-" + newScore);
    initialsInput.value = "";

    localStorage.setItem("highScoresList", JSON.stringify(highScoresList));

    // Refresh the high scores list with the newly added score
    getHighScores();
});

// Navigate to the high scores section 
highScoresButton.addEventListener("click", renderHighScores);

// Clear high scores when the option is selected
clearHighScoresList.addEventListener("click", function(event) {
    event.preventDefault();
    localStorage.clear(highScoresList); 
})

// Navigate back to home page if option is selected
backToStart.addEventListener("click", function() {
    startGameSection.setAttribute("hidden", false);
    currentScoreSection.setAttribute("hidden", true);
    questionSection.setAttribute("hidden", true);
    scoreboardSection.setAttribute("hidden", true);
})