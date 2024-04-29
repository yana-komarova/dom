
import './styles.css';
import goblinImg from './img/goblin.png';

const gridContainer = document.getElementById('gridContainer');
const goblinImgUrl = goblinImg;
let goblinPosition = { x: 0, y: 0 };

function createRandomPosition() {
  const x = Math.floor(Math.random() * 4);
  const y = Math.floor(Math.random() * 4);
  return { x, y };
}

function moveGoblin() {
  const newPosition = createRandomPosition();
  while (newPosition.x === goblinPosition.x && newPosition.y === goblinPosition.y) {
    newPosition = createRandomPosition();
  }
  const newCell = document.querySelector(`.grid-cell-${newPosition.x}-${newPosition.y}`);
  const goblin = document.querySelector('.goblin');
  goblinPosition = newPosition;
  newCell.appendChild(goblin);
}

function initGame() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const gridCell = document.createElement('div');
      gridCell.classList.add('grid-cell', `grid-cell-${i}-${j}`);
      gridContainer.appendChild(gridCell);
    }
  }

  const goblin = document.createElement('img');
  goblin.setAttribute('src', goblinImgUrl);
  goblin.classList.add('goblin');

  const initialPosition = createRandomPosition();
  const initialCell = document.querySelector(`.grid-cell-${initialPosition.x}-${initialPosition.y}`);
  initialCell.appendChild(goblin);

  setInterval(moveGoblin, 1000);
}

initGame();