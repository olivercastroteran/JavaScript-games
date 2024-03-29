const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endGameEl = document.getElementById('end-game-container');
const settingsBtn = document.getElementById('settings-btn');
const settings = document.getElementById('settings');
const settingsForm = document.getElementById('settings-form');
const difficultySelect = document.getElementById('difficulty');

// List of words
const words = [
  'sigh',
  'oliver',
  'airplane',
  'ball',
  'pies',
  'juice',
  'bad',
  'north',
  'street',
  'higgs',
  'gold',
  'silver',
  'drag',
  'win',
  'superficial',
  'supercalifragilistico',
  'love',
  'word',
  'funny',
  'admit',
  'dark',
  'react',
  'javascript',
  'melissa',
];

// Init word, score and time
let randomWord;
let score = 0;
let time = 10;

// set difficulty to value in LS or medium
let difficulty =
  localStorage.getItem('difficulty') !== null
    ? localStorage.getItem('difficulty')
    : 'medium';

// Set difficulty select value
difficultySelect.value =
  localStorage.getItem('difficulty') !== null
    ? localStorage.getItem('difficulty')
    : 'medium';

// focus on text on start
text.focus();

// Start counting down
const timeInterval = setInterval(updateTime, 1000);

// Generate random word from array
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

// Add word to DOM
function addWordToDOM() {
  randomWord = getRandomWord();
  word.innerHTML = randomWord;
}

// Update score
function updateScore() {
  score++;
  scoreEl.innerHTML = score;
}

// Update time
function updateTime() {
  time--;
  timeEl.innerHTML = time + 's';

  if (time === 0) {
    clearInterval(timeInterval);
    // end game
    gameOver();
  }
}

// Game over - show end screen
function gameOver() {
  endGameEl.innerHTML = `
    <h1>Time run out</h1>
    <p>Your final score is: ${score}</p>
    <button 
      style="border: 1px solid #fff; padding: 10px 20px;" 
      onclick="location.reload()">
        Reload
    </button>
  `;

  endGameEl.style.display = 'flex';
}

addWordToDOM();

// Event listeners

// typing
text.addEventListener('input', (e) => {
  const insertedText = e.target.value;

  if (insertedText === randomWord) {
    addWordToDOM();
    updateScore();

    // clear field
    e.target.value = '';

    //time += 5;

    if (difficulty === 'hard') {
      time += 2;
    } else if (difficulty === 'medium') {
      time += 3;
    } else {
      time += 5;
    }

    updateTime();
  }
});

// settings btn click
settingsBtn.addEventListener('click', () => settings.classList.toggle('hide'));

// Settings select
settingsForm.addEventListener('change', (e) => {
  difficulty = e.target.value;
  localStorage.setItem('difficulty', difficulty);
});
