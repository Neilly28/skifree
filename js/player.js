class Player {
  constructor(col, row) {
    this.col = 0;
    this.row = 0;
  }

  draw() {
    image(game.playerImage, this.col, this.row, 50, 50);
  }

  moveRight() {
    this.col += 100;
  }

  moveLeft() {
    this.col -= 100;
  }

  moveUp() {
    this.row -= 100;
  }

  moveDown() {
    this.row += 100;
  }
}
