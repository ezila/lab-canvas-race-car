let car;
let obstacles;
let gameover;
let points;

const ctx = document.querySelector('canvas').getContext('2d');
const W = ctx.canvas.width;
const H = ctx.canvas.height;

function draw() {
  // Iteration 1: road drawing
  ctx.fillStyle = "green";
  ctx.fillRect(0, 0, 1000, 1600);
  
  ctx.fillStyle = "grey";
  ctx.fillRect(50, 0, 900, 1600);

  ctx.fillStyle = "white";
  ctx.fillRect(70, 0, 20, 1600);
  ctx.fillRect(910, 0, 20, 1600);
  
  ctx.beginPath();
  ctx.lineWidth = 10;
  ctx.strokeStyle = "white";
  ctx.setLineDash([50, 40]);
  ctx.moveTo(500, 0);
  ctx.lineTo(500, 1600);
  ctx.stroke();
  ctx.closePath();

  // Iteration 2: car drawing
  car.draw();

  // Iteration #4: obstacles

  // TODO

  //
  // Iteration #5: collisions
  //

  // TODO

  //
  // Iteration #6: points
  //

  // TODO

}

document.onkeydown = function (e) {
  if (!car) return;
  
  switch (e.keyCode) {
    case 37: // left arrow
      car.moveLeft();
      break;
    case 39: // right arrow
      car.moveRight();
      break;
  }
};

let frames = 0;
function animLoop() {
  frames++;

  draw();
  
  if (!gameover) {
    requestAnimationFrame(animLoop);
  }
}

function startGame() {
  car = new Car;

  requestAnimationFrame(animLoop);
}

document.getElementById("start-button").onclick = function() {
  startGame();
};

// auto-start
startGame();