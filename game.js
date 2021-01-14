const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: 'What does DOM stand for?',
        choice1: 'Document Opinion Model',
        choice2: 'Document Oreo Milk',
        choice3: 'Document Object Model',
        choice4: 'Doctor Object Matrix',
        answer: 3,
    },
    {
        question:
            "What method inserts specified content at the end of the selected elements?",
        choice1: "Append",
        choice2: "Prepend",
        choice3: "Propagate",
        choice4: "Apprehend",
        answer: 1,
    },
    {
        question: "What method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur?",
        choice1: "stop",
        choice2: "preventDefault",
        choice3: "bootstrap",
        choice4: "preventALL",
        answer: 2,
    },
    {
        question: "What method attaches an event handler to the specified element?",
        choice1: "listenUp",
        choice2: "addListen",
        choice3: "areYouListening",
        choice4: "addEventListener",
        answer: 4,
    },
    {
        question: "What property allows you to save key/value pairs in a web browser?",
        choice1: "allStorage",
        choice2: "myStorage",
        choice3: "localStorage",
        choice4: "letsStoreIt",
        answer: 3,
    }
]

const SCORE_POINTS = 10
const MAX_QUESTIONS = 5

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`
    
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()

