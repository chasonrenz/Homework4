const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContatinerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffleQuestions, currentQuestionIndex;

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    startButton.classList.add('hide')
    shuffleQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContatinerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffleQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
            (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    nextButton.classList.remove('hide')
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'Which is better, Apple or Microsoft',
        answers: [
            { text: 'Apple', correct: true },
            { text: 'Microsoft', correct: false }
        ]
    },
    {
        question: 'What is the hardest UT bootcamp subject to master',
        answers: [
            { text: 'GitHub', correct: true },
            { text: 'jQuery', correct: false },
            { text: 'Bootstrap', correct: false },
            { text: 'Whatever Tariq is doing?', correct: true }
        ]
    },

    {
        question: 'Are you losing your mind working full time and taking this program?',
        answers: [
            { text: 'No way!', correct: false },
            { text: 'Mango', correct: true },
            { text: 'Worth it if we can work for google eventually', correct: true },
            { text: 'Starting my new book called: The Legend of Zoloft', correct: true }
        ]
    },
    {
        question: 'When backing up your IT software, what is the best provider to use?',
        answers: [
            { text: 'Verkada', correct: false },
            { text: 'Veeam', correct: true },
            { text: 'Veritas', correct: false },
            { text: 'Tom Cruise in ~Cocktail~', correct: false }
        ]
    },
    {
        question: 'Oh no! A Virus! And I dont mean corona. What EPP software are you going to use?',
        answers: [
            { text: 'Crowdstrike', correct: false },
            { text: 'Sophos', correct: true },
            { text: 'Sentinel One', correct: false },
            { text: 'A Troll who lives under your data bridge', correct: false }
        ]
    },
    {
        question: 'What popular Austin landmark was featured in a 1980s Elvis movie?',
        answers: [
            { text: 'Stubbs BBQ', correct: false },
            { text: 'Highway 35', correct: false },
            { text: 'Matties', correct: true },
            { text: 'Barbarella', correct: false }
        ]
    },
]