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
}

function keyPressed() {
  if (keyCode === 32) {
    game.player.jump();
  }
  if (keyCode === 39) {
    game.player.moveRight();
  }
  if (keyCode === 37) {
    game.player.moveLeft();
  }
  if (keyCode === 38) {
    game.player.moveUp();
  }
  if (keyCode === 40) {
    game.player.moveDown();
  }
}
