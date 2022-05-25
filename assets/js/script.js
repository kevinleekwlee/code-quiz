let timerEl = document.getElementById('countdown');
let questionIndex = 0;

let QA = {
    question: "What does DOM mean?",
    choices: ["Decimal Origin Main", "Document Origin Main", "Decimal Object Model", "Document Object Model"],
    correct: 3
};

let QB = {
    question: "What does CSS mean?",
    choices: ["Computer Style Sheet", "Computer Syntax Sheet", "Cascading Style Sheet", "Cascading Syntax Style"],
    correct: 2
};

let QC = {
    question: "What does URL mean?",
    choices: ["Uniform Resource Locator", "Universal Resource Locator", "Universal Resource License", "Uniform Regional Ledger"],
    correct: 0
};

let QD = {
    question: "What does JS mean?",
    choices: ["JavaSuper", "JavaScript", "JavaSource", "JoltScript"],
    correct: 1
};

let masterlist = [];

masterlist.push(QA, QB, QC, QD, QC);

function renderQuestion(q) {

    let questionEl = document.getElementById('question');

    questionEl.textContent = q.question;

    let choicesEl = document.querySelectorAll('.choices');
    let evalEl = document.getElementById('eval');
    
    choicesEl.forEach(function(element,index){
        element.textContent = q.choices[index];

        element.addEventListener('click',function(){
            if(q.correct === index) {
                evalEl.textContent = "Correct!";       
            } else {
                evalEl.textContent = "Wrong!";
            } questionIndex++
            renderQuestion(masterlist[questionIndex]);
        })
    });   
}

renderQuestion(masterlist[questionIndex]);

function countdown() {
    let timeLeft = 75;
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

countdown();