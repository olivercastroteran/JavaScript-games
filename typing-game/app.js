const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endGameEl = document.getElementById('end-game-container');
const settingsBtn = document.getElementById('settings-btn');
const settings = document.getElementById('settings');
const settingsForm = document.getElementById('settings-form');
const duifficultySelect = document.getElementById('duifficulty');

// List of words
const words = [
  'sigh',
  'oliver',
  'airplane',
  'ball',
  'adriana',
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
text.addEventListener('input', (e) => {
  const insertedText = e.target.value;

  if (insertedText === randomWord) {
    addWordToDOM();
    updateScore();

    // clear field
    e.target.value = '';

    time += 5;
    updateTime();
  }
});
