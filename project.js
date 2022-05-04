const question = document.getElementById('question');
const options = Array.from(document.querySelectorAll('.choice-text')); //To obtain a NodeList of all of the <p> elements in the document: 'choice-text' for all questions. resource:developer Mozilla//
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        choice1: "<script>",
        choice2: "<js>",
        choice3: "<scripting>",
        choice4: "<a>",
        answer: 1,
    },
    {
        question:
        "JavaScript is a ___ -side programming language.",
        choice1: "Client",
        choice2: "Server",
        choice3: "Both",
        choice4:"None",
        answer: 3,
    },
    {
        question: "Which of the following will write the message “Hello DataFlair!” in an alert box?",
        choice1: "alertBox(“Hello DataFlair!”);",
        choice2: "alert(Hello DataFlair!);",
        choice3: "msgAlert(“Hello DataFlair!”);",
        choice4: "alert(“Hello DataFlair!”);",
        answer: 4,
    },
    {
        question: "How do you find the minimum of x and y using JavaScript?",
        choice1: " min(x,y);",
        choice2: " Math.min(xy)",
        choice3: " Math.min(x,y)",
        choice4: " min(xy);",
        answer: 3,
    },
    {
        question: "Which of the following statement will throw an error?",
        choice1: " var fun = function bar{ } ",
        choice2: "var fun = function bar( ){ }" ,
        choice3: "function fun( ){ } ",
        choice4: "const fun = function bar( ){ }",
        answer: 1,
    },

    {
        question: "If the value of x is 40, then what is the output of the following program :(x % 10 == 0)? console.log(“Divisible by 10”) : console.log(“Not divisible by 10”);?",
        choice1: " Not divisible by 10 ",
        choice2: " Divisible by 10" ,
        choice3: " ReferenceError",
        choice4: " None of the above",
        answer: 2,
    },

    {
        question: "Which are the correct “if” statements to execute certain code if “x” is equal to 2?",
        choice1: " if(x = 2) ",
        choice2: " if(x == 2)" ,
        choice3: " if(x != 2 ) ",
        choice4: " if(x 2)",
        answer:2 ,
    },
    {
        question: "What will the code return : Boolean(3 < 7)?",
        choice1: "SyntaxError ",
        choice2: "False" ,
        choice3: " True",
        choice4: " NaN",
        answer: 3,
    },
    {
        question: "Which of the following function of Array object extracts a section of an array and returns a new array?",
        choice1: "reverse() ",
        choice2: "shift()" ,
        choice3: "slice() ",
        choice4: "some()",
        answer: 3,
    },
    {
        question: "If Button is clicked .......Event Handler is invoked.",
        choice1: "OnSubmit()",
        choice2: "OnLoad()" ,
        choice3: "Onclick() ",
        choice4: "onHandle()",
        answer: 3,
    },

]

const SCORE_POINTS = 20
const MAX_QUESTIONS = 10

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions] // Inserting the elements of question array into available question via spread syntax
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {

     return window.location.assign('projectend.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    
    const questionsList= Math.floor(Math.random() * availableQuestions.length)//random questions
    currentQuestion = availableQuestions[questionsList]
    question.innerText = currentQuestion.question  //referenced a couple of times throughout the script

   //to execute a choice  function once for each array element=> current question and choice
    options.forEach(choice => {
        const number = choice.dataset['number'] // initialize the value in the HTML tag. dataset converts the set value into a string value.
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsList, 1) //The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. To access part of an array without modifying it//
// questionList and 1 represent the index of items in availableQuestions array//
    acceptingAnswers = true
}

// //to execute a 'choice' function once for each array element with if statement to evalute if the answer is true or false.
options.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) 
        
        return
       acceptingAnswers = false
       
       const selectedChoice = e.target
       const selectedAnswer = selectedChoice.dataset['number']//// initialize the value in the HTML tag. dataset converts the set value into a string value.

        let evaluateQa = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect' //conditional (ternary) operator condition followed by a question mark (?), then an expression to execute if the condition is truth followed by a colon (:), and finally the expression to execute if the condition is false.

        if(evaluateQa === 'correct') {
            addToScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(evaluateQa)

 setTimeout(() => {
            selectedChoice.parentElement.classList.remove(evaluateQa)
            getNewQuestion()

        }, 1000) // set the time in seconds to move to next question once the choice has been selected.//
    })
})

addToScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()