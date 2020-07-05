const game = () => {
  let pScore = 0;
  let cScore = 0;

  // Start the Game
  const startGame = () => {
    const playBtn = document.querySelector('.intro button');
    const introScreen = document.querySelector('.intro');
    const match = document.querySelector('.match');

    playBtn.addEventListener('click', () => {
      introScreen.classList.add('fadeOut');
      match.classList.add('fadeIn');
    });
  };

  // Play Match
  const playMatch = () => {
    const options = document.querySelectorAll('.options button');
    const playerHand = document.querySelector('.player-hand');
    const computerHand = document.querySelector('.computer-hand');

    // Computer Options
    const computerOptions = ['rock', 'paper', 'scissors'];

    options.forEach((option) => {
      option.addEventListener('click', function () {
        // the computer choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];

        // Call compare hands/choices
        console.log(`player: ${this.innerHTML}`, `computer: ${computerChoice}`);
        compareHands(this.innerHTML, computerChoice);
      });
    });
  };

  // compare player and computer choices
  const compareHands = (playerChoice, computerChoice) => {
    // Update Text
    const winner = document.querySelector('.winner');
    if (playerChoice === computerChoice) {
      winner.textContent = 'It is a tie';
      return;
    }

    // Choose rock
    if (playerChoice === 'rock') {
      if (computerChoice === 'scissors') {
        winner.textContent = 'Player Wins';
        return;
      } else {
        winner.textContent = 'Compuer Wins';
        return;
      }
    }

    // Choose paper
    if (playerChoice === 'paper') {
      if (computerChoice === 'scissors') {
        winner.textContent = 'Computer Wins';
        return;
      } else {
        winner.textContent = 'Player Wins';
        return;
      }
    }

    // Choose scissors
    if (playerChoice === 'scissors') {
      if (computerChoice === 'paper') {
        winner.textContent = 'Player Wins';
        return;
      } else {
        winner.textContent = 'Compuer Wins';
        return;
      }
    }
  };

  // Call all the inner functions
  startGame();
  playMatch();
};

// Start the game
game();
