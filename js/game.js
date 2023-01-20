class Game {
  constructor() {
    this.player = new Player();
    this.obstacle = new Obstacle();
    this.playerImage;
    this.treeImage;
    this.obstacles = [];
  }

  preload() {
    this.playerImage = loadImage("./assets/skier.png");
    this.treeImage = loadImage("./assets/tree.png");
  }

  drawGrid() {
    background("white");
  }

  draw() {
    clear();
    this.drawGrid();
    this.player.draw();

    if (frameCount % 90 === 0) {
      this.obstacles.push(new Obstacle(this.treeImage));
    }

    // Draw the obstacles
    this.obstacles.forEach(function (obstacle) {
      obstacle.draw();
    });
  }
}
