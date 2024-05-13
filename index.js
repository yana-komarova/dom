
import React from 'react';
import ReactDOM from 'react-dom';
import Goblin from './Goblin';
import Player from './Player';
import Game from './Game';

const container = document.getElementById('container');
const points = [
  { x: 25, y: 25 },
  { x: 50, y: 25 },
  { x: 75, y: 25 },
  { x: 25, y: 50 },
  { x: 50, y: 50 },
  { x: 75, y: 50 },
  { x: 25, y: 75 },
  { x: 50, y: 75 },
  { x: 75, y: 75 },
];

const goblin = new Goblin(container, points);
const player = new Player(container);
const game = new Game(goblin, player);

game.start();