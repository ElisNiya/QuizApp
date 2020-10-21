const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame(){
startButton.classList.add('hide')
shuffledQuestions = questions.sort(() => Math.random() - .5)
currentQuestionIndex= 0;
questionContainerElement.classList.remove('hide')
setNextQuestion()
}

function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question){
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn');
        if (answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click',selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}
function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while(answerButtonsElement.firstChild){
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}
function selectAnswer(e){
const selectedButton = e.target;
const correct = selectedButton.dataset.correct;
setStatusClass(document.body, correct)
Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
})
if(shuffledQuestions.length > currentQuestionIndex +1) {
    nextButton.classList.remove('hide')
}else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
}
nextButton.classList.remove('hide')
}

function setStatusClass(element,correct){
    clearStatusClass(element)
    if(correct){
        element.classList.add('correct')
    }else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {   question: 'Do you smoke?',
        answers: [
        { text: 'yes', correct: true},
        {text: 'no', correct: true},
        {text: 'sometimes', correct: true}
        ]   
    },
    {   question: 'Do you drink alcohol?',
        answers: [
        { text: 'yes', correct: true},
        { text: 'no', correct: true},
        { text: 'sometimes', correct: true}
        ]   
    },
    {   question: 'Why do we give up on our dreams?',
        answers: [
        { text: 'fear of failure', correct: true},
        { text: 'not smart enough', correct: false}
        ]   
    },
    {   question: 'Choose your three core values',
        answers: [
        { text: 'empathy', correct: true},
        { text: 'courage', correct: true},
        { text: 'integrity', correct: true},
        { text: 'creativity', correct: true},
        { text: 'discipline', correct: true},
        { text: 'self-control', correct: true},
        { text: 'freedom', correct: true},
        { text: 'loyalty', correct: true},
        { text: 'intelligence', correct: true},
        { text: 'gratitude', correct: true},
        { text: 'strength', correct: true},
        { text: 'ambition', correct: true}
        ]   
    },
    {   question: 'Choose 3 that describe you best',
    answers: [
    { text: 'perfectionist', correct: true},
    { text: 'organiser', correct: true},
    { text: 'helper', correct: true},
    { text: 'caretaker', correct: true},
    { text: 'achiever', correct: true},
    { text: 'motivator', correct: true},
    { text: 'artist', correct: true},
    { text: 'romantic', correct: true},
    { text: 'observer', correct: true},
    { text: 'thinker', correct: true},
    { text: 'sceptic', correct: true},
    { text: 'guardian', correct: true},
    { text: 'optimist', correct: true},
    { text: 'entertainer', correct: true},
    { text: 'leader', correct: true},
    { text: 'provider', correct: true},
    { text: 'mediator', correct: true},
    { text: 'peacemaker', correct: true},
    { text: 'adventurer', correct: true}
    ]   
},
]