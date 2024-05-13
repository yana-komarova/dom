import Goblin from "./Goblin.js";

const gameContainer = document.getElementById("game-container");

const goblin = new Goblin(gameContainer);

goblin.show();

setInterval(() => {
  goblin.move();
}, 1000);