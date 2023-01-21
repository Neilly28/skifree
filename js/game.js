class Game {
  constructor() {
    this.player = new Player();
    // this.obstacle = new Obstacle();
    this.playerImage;
    this.skiLeft;
    this.skiRight;
    this.obstacles = [];
    this.treeImage;
  }

  preload() {
    this.playerImage = loadImage("./assets/skidown.png");
    this.skiLeft = loadImage("./assets/skileft.png");
    this.skiRight = loadImage("./assets/skiright.png");
    this.treeImage = loadImage("./assets/tree.png");
  }

  drawGrid() {
    background("white");
    stroke(51);
    strokeWeight(4);
    rect(0, 0, 600, 600);
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

    // Filter the coins which are out of the canvas or had a collision
    // We need an arrow function here, so that "this" has the right context (of the game object)
    this.obstacles = this.obstacles.filter((obstacle) => {
      console.log(this);

      if (obstacle.x < 0 - obstacle.width) {
        return false;
      } else {
        return true;
      }
    });

    // this.obstacles.forEach((obstacle) => {
    //   if (obstacle.collision(this.player)) {
    //     frameRate(0);
    //     this.draw();
    //   }
    // });
  }
}
