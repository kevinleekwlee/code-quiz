//Declaring the global variables I will be using throughout this application. 

let timerEl = document.getElementById('countdown');
let evalEl = document.getElementById('eval');
let scoreEl = document.getElementById('score');
let questionIndex = 0;
let score = 0;
let timeLeft = 75;

//My question and answer sets are provided as arrays. The correct answer is indicated by the index number. 

let QA = {
    question: "What does DOM mean? (1 of 7)",
    choices: ["Decimal Origin Main", "Document Origin Main", "Decimal Object Model", "Document Object Model"],
    correct: 3
};

let QB = {
    question: "What does CSS mean? (2 of 7)",
    choices: ["Computer Style Sheet", "Computer Syntax Sheet", "Cascading Style Sheet", "Cascading Syntax Style"],
    correct: 2
};

let QC = {
    question: "What does URL mean? (3 of 7)",
    choices: ["Uniform Resource Locator", "Universal Resource Locator", "Universal Resource License", "Uniform Regional Ledger"],
    correct: 0
};

let QD = {
    question: "What does JS mean? (4 of 7)",
    choices: ["JavaSuper", "JavaScript", "JavaSource", "JoltScript"],
    correct: 1
};

let QE = {
    question: "What does md mean in an README.md? (5 of 7)",
    choices: ["MarkDown", "Mode", "Modern", "MoreDocument"],
    correct: 0
};

let QF = {
    question: "What does VS mean in VS Code? (6 of 7)",
    choices: ["Visual Screen", "Vortex Storm", "Visual Studio", "Vision Store"],
    correct: 2
};

let QG = {
    question: "What does API mean? (7 of 7)",
    choices: ["App Planning Interaction", "Auto Powerful Internet", "Application Programming Interface", "Apple Project Inc"],
    correct: 2
};

// My question and answer arrays are then pushed to a masterlist array so that I could navigate through the questions as the user answers them. 

let masterlist = [];

masterlist.push(QA, QB, QC, QD, QE, QF, QG);

// Calling the renderQuestion function with the questionIndex of my masterlist. It starts at 0 and will run through the other questions via event listening. 

renderQuestion(masterlist[questionIndex]);

// Countdown indicates how much time is left. 

function countdown() {
    let timeInterval = setInterval(function() {
        if (timeLeft > 0) {
        timerEl.textContent = 'Time: ' + timeLeft;
        timeLeft--;
        } else {
            timerEl.textContent = 'Time is up!';
            clearInterval(timeInterval);
        }
    }, 1000);
}

// Calling the countdown function. 

countdown();

// These if statements indicate whether an answer is correct or wrong. It tallys the total score and also penalizes the time by 10 seconds whenever an answer is wrong. 

function clickEvent(event){
    let question = masterlist[questionIndex];
    let correctAnswer = question.correct;
    let selectedAnswer = event.target.dataset.index;

    if(correctAnswer == selectedAnswer) {
        evalEl.textContent = "Correct!";
        score = score + 1
        scoreEl.textContent = 'Total Score: ' + score;
    } else {
        evalEl.textContent = "Wrong!";
        scoreEl.textContent = 'Total Score: ' + score;
        timeLeft = timeLeft - 10;
    }

// Passes onto the next question in the masterlist sequence. 

    questionIndex++
    renderQuestion(masterlist[questionIndex]);
}

// Populates the new question and new answer selections into the buttons. 

function renderQuestion(q) {

    let questionEl = document.getElementById('question');

    questionEl.textContent = q.question;

    let choicesEl = document.querySelectorAll('.choices');
    
    choicesEl.forEach(function(element,index){
        element.textContent = q.choices[index];

        element.removeEventListener('click',clickEvent);
        element.addEventListener('click',clickEvent);
    });   
}

// Incomplete work in progress, this section would have been the local storage for the high scores page. 

var leaderboard = document.querySelector("#leaderboard");
var highscore = localStorage.getItem("highscore");

localStorage.setItem("highscore", 10);

leaderboard.textContent = highscore;