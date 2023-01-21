class Player {
  constructor() {
    this.width = 20;
    this.height = 30;
    this.x = 10;
    this.y = 10;
    this.gravity = 0.2;
    this.velocity = 0;
    this.score = 0;
  }

  draw() {
    this.y += this.velocity;
    image(game.playerImage, this.x, this.y, this.width, this.height);
  }

  moveRight() {
    this.x += 1;
    image(game.skiRight, this.x, this.y, this.width, this.height);
  }

  moveLeft() {
    this.x -= 1;
    image(game.skiLeft, this.x, this.y, this.width, this.height);
  }

  moveUp() {
    this.y -= 10;
  }

  moveDown() {
    this.y += 10;
  }
}
