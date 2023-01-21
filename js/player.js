class Player {
  constructor() {
    this.width = 50;
    this.height = 50;
    this.x = 10;
    this.y = 10;
    this.gravity = 0.2;
    this.velocity = 1;
    this.score = 0;
  }

  draw() {
    this.y += this.velocity;
    image(game.playerImage, this.x, this.y, this.width, this.height);
  }

  moveRight() {
    this.x += 10;
  }

  moveLeft() {
    this.x -= 10;
  }

  moveUp() {
    this.y -= 10;
  }

  moveDown() {
    this.y += 10;
  }
}
