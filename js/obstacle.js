class Obstacle {
  constructor(image) {
    this.image = image;
    this.width = 50;
    this.height = 50;
    this.x = (Math.random() * 600) / 2.5;
    this.y = 600;
    this.velocity = 1;
  }

  draw() {
    // this.x += this.velocity;
    this.y -= this.velocity;
    image(game.treeImage, this.x, this.y, this.width, this.height);
  }
}
