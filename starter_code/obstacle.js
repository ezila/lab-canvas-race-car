function random(from, to) {
  return from+Math.randon()*(to-from);
}

class Obstacle {
  constructor() {
    this.w = random(0, 800);
    this.h = 50;
    this.x = random(50, 950);
    this.y = 0;
  }

  draw() {
    ctx.fillRect();
  }

  hits(car) {
    // TODO
  }
}