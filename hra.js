import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';

const gameBoard = [];
const prepareGameBoard = () => {
  for (let i = 0; i < 100; i++) {
    gameBoard.push('_');
  }
};

let currentPlayer = 'circle';

const showCircle = () => {
  const imgCross = document.querySelector('#imgCross');
  imgCross.classList.remove('visible');
  imgCross.classList.add('invisible');
  const imgCircle = document.querySelector('#imgCircle');
  imgCircle.classList.remove('invisible');
  imgCircle.classList.add('visible');
};

const showCross = () => {
  const imgCircle = document.querySelector('#imgCircle');
  imgCircle.classList.remove('visible');
  imgCircle.classList.add('invisible');
  const imgCross = document.querySelector('#imgCross');
  imgCross.classList.remove('invisible');
  imgCross.classList.add('visible');
};

const checkGameState = () => {
  const result = findWinner(gameBoard);
  if(result != null) {
    let endGameNote = '';
    if (result === 'x' || result == 'o') {
      endGameNote = `Vyhrál hráč se symbolem ${result}.`
    }
    else if (result === 'tie') {
      endGameNote = 'Hra skončila nerozhodně.'
    }
    setTimeout(function() {
      alert(endGameNote);
      location.reload();
    }, 100);
  }
};

const onButtonClick = (event) => {
  const button = event.target;
  const buttonIndex = Number(button.id.substring('button'.length));
  if (currentPlayer == 'cross') {
    button.classList.add('board__field--cross');
    gameBoard[buttonIndex] = 'x';
    currentPlayer = 'circle';
    showCircle();
  } else {
    button.classList.add('board__field--circle');
    gameBoard[buttonIndex] = 'o';
    currentPlayer = 'cross';
    showCross();
  }
  button.disabled = true;
  checkGameState();
};

const setAkcionToButtons = () => {
  const table = document.querySelector('.play-table');
  const allButtons = table.querySelectorAll('button');
  allButtons.forEach((button) => {
    button.addEventListener('click', onButtonClick);
  });
};

const initGame = () => {
  setAkcionToButtons();
  prepareGameBoard();
};

const showRestartDialog = (event) => {
  const answer = confirm('Opravdu chcete začít znovu?');
  if (answer == false) {
    event.preventDefault();
  }
};

const buttonRestart = document.querySelector('#buttonRestart');
buttonRestart.addEventListener('click', showRestartDialog);

initGame();
