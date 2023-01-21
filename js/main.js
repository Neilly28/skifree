const game = new Game();

// Load game assets
function preload() {
  game.preload();
}

// Setup game
function setup() {
  createCanvas(600, 600);
  //   canvas.parent("canvas");
}

function draw() {
  game.draw();
  this.playerInput();
}

function playerInput() {
  if (keyIsDown(RIGHT_ARROW)) {
    game.player.moveRight();
  }
  if (keyIsDown(LEFT_ARROW)) {
    game.player.moveLeft();
  }
  if (keyIsDown(UP_ARROW)) {
    game.player.moveUp();
  }
  if (keyIsDown(DOWN_ARROW)) {
    game.player.moveDown();
  }
}
