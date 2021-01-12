const question = document.querySelector('#question');
const choices = Array.from(document.querySelector('.choice-text'));
const progText = document.querySelector('#progText');
const scoreText = document.querySelector('#score');
const progBarFull = document.querySelector('#progBarFull');

var currentQuestion = {};
var acceptAnswer = true;
var score = 0;
var questionCounter = 0;
var availableQuestions = [];

var questions = [
    {
        question: 'What does DOM stand for',
        choice1: 'Document Opinion Model',
        choice2: 'Document Oreo Milk',
        choice3: 'Document Object Model',
        choice4: 'Doctor Object Matrix',
        answer: 3,
    },
    {
        question: 'What does DOM stand for',
        choice1: 'Document Opinion Model',
        choice2: 'Document Oreo Milk',
        choice3: 'Document Object Model',
        choice4: 'Doctor Object Matrix',
        answer: 3,
    },
    {
        question: 'What does DOM stand for',
        choice1: 'Document Opinion Model',
        choice2: 'Document Oreo Milk',
        choice3: 'Document Object Model',
        choice4: 'Doctor Object Matrix',
        answer: 3,
    },
    {
        question: 'What does DOM stand for',
        choice1: 'Document Opinion Model',
        choice2: 'Document Oreo Milk',
        choice3: 'Document Object Model',
        choice4: 'Doctor Object Matrix',
        answer: 3,
    },
    {
        question: 'What does DOM stand for',
        choice1: 'Document Opinion Model',
        choice2: 'Document Oreo Milk',
        choice3: 'Document Object Model',
        choice4: 'Doctor Object Matrix',
        answer: 3,
    }
]


