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
    const hands = document.querySelectorAll('.hands img');

    hands.forEach((hand) => {
      hand.addEventListener('animationend', function () {
        this.style.animation = '';
      });
    });

    // Computer Options
    const computerOptions = ['rock', 'paper', 'scissors'];

    options.forEach((option) => {
      option.addEventListener('click', function () {
        // the computer choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];

        setTimeout(() => {
          // Call compare hands/choices
          compareHands(this.textContent, computerChoice);

          // Update Images
          playerHand.src = `./assets/${this.textContent}.png`;
          computerHand.src = `./assets/${computerChoice}.png`;

          setTimeout(() => {
            playerHand.src = `./assets/rock.png`;
            computerHand.src = `./assets/rock.png`;
          }, 2000);
        }, 2000);

        // Animations
        playerHand.style.animation = 'shakePlayer 2s ease';
        computerHand.style.animation = 'shakeComputer 2s ease';
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
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = 'Compuer Wins';
        cScore++;
        updateScore();
        return;
      }
    }

    // Choose paper
    if (playerChoice === 'paper') {
      if (computerChoice === 'scissors') {
        winner.textContent = 'Computer Wins';
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = 'Player Wins';
        pScore++;
        updateScore();
        return;
      }
    }

    // Choose scissors
    if (playerChoice === 'scissors') {
      if (computerChoice === 'paper') {
        winner.textContent = 'Player Wins';
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = 'Compuer Wins';
        cScore++;
        updateScore();
        return;
      }
    }
  };

  // Update Score
  const updateScore = () => {
    const playerScore = document.querySelector('.player-score p');
    const computerScore = document.querySelector('.computer-score p');

    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  // Call all the inner functions
  startGame();
  playMatch();
};

// Start the game
game();
