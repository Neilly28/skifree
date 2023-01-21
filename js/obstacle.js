class Obstacle {
  constructor(image) {
    this.image = image;

    this.x = (Math.random() * height) / 2.5;
    this.y = 600;
    this.width = 50;
    this.height = 50;
    this.velocity = 1;
  }

  draw() {
    // this.x += this.velocity;
    this.y -= this.velocity;
    image(game.treeImage, this.x, this.y, this.width, this.height);
  }

  collision(playerInfo) {
    // // console.log("collision")

    // Get the middle of the obstacle
    let obstacleX = this.x + this.width / 2;
    let obstacleY = this.y + this.height / 2;

    // Get the middle of the player
    let playerX = playerInfo.x + playerInfo.width / 2;
    let playerY = playerInfo.y + playerInfo.height / 2;

    // dist(x1, y1, x2, y2) returns the distance between the objects
    if (dist(obstacleX, obstacleY, playerX, playerY) > 25) {
      // console.log(dist);
      return false;
      // } else {
      //   // Increment the score
      //   playerInfo.score += 100;

      //   // 	// Update score in dem DOM
      //   document.querySelector("#score span").innerText = playerInfo.score;
      //   return true;
    } else {
      // console.log(dist);
      return true;
    }
  }
}
