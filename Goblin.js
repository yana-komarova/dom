class Goblin {
    constructor(gameContainer) {
      this.gameContainer = gameContainer;
      this.goblinElement = document.createElement("div");
      this.goblinElement.classList.add("goblin");
      this.currentCell = null;
    }
  
    show() {
      this.generateRandomCell();
      this.currentCell.appendChild(this.goblinElement);
    }
  
    move() {
      this.generateRandomCell();
  
      if (this.currentCell === this.nextCell) {
        this.move();
      } else {
        this.currentCell.removeChild(this.goblinElement);
        this.nextCell.appendChild(this.goblinElement);
        this.currentCell = this.nextCell;
      }
    }
  
    generateRandomCell() {
      const cells = Array.from(this.gameContainer.children);
      this.nextCell = cells[Math.floor(Math.random() * cells.length)];
    }
  }