class Terrain {
  constructor(height, start, end) {
    this.height = height;
    this.start = start;
    this.end = end;
  }

  draw(ctx) {
    ctx.fillStyle = "#756";
    ctx.fillRect(this.start, 500 - this.height, this.end, 500);
  }

  nextState() {}
}

export default Terrain;
