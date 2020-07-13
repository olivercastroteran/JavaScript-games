const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerBtns = document.getElementById('answer-btns');
let shuffledQuestions, currentQuestionIndex;

startBtn.addEventListener('click', startGame);
nextBtn.addEventListener('click', () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function startGame() {
  startBtn.classList.add('hide');
  questionContainer.classList.remove('hide');

  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;

  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }

    button.addEventListener('click', selectAnswer);
    answerBtns.appendChild(button);
  });
}

function resetState() {
  clearStatusClass(document.body);
  nextBtn.classList.add('hide');
  while (answerBtns.firstChild) {
    answerBtns.removeChild(answerBtns.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const correct = selectedBtn.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerBtns.children).forEach((btn) => {
    setStatusClass(btn, btn.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextBtn.classList.remove('hide');
  } else {
    startBtn.innerText = 'Restart';
    startBtn.classList.remove('hide');
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add('correct');
  } else {
    element.classList.add('wrong');
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
}

const questions = [
  {
    question: 'What is 2 + 2 ?',
    answers: [
      { text: '4', correct: true },
      { text: '1', correct: false },
      { text: '2', correct: false },
      { text: 'i', correct: false },
    ],
  },
  {
    question: 'What is 1 + 2 ?',
    answers: [
      { text: '4', correct: false },
      { text: '1', correct: false },
      { text: '3', correct: true },
      { text: 'i', correct: false },
    ],
  },
  {
    question: 'What is 2 + 2 * 2 ?',
    answers: [
      { text: '4', correct: false },
      { text: '1', correct: false },
      { text: '2', correct: false },
      { text: '6', correct: true },
    ],
  },
];
