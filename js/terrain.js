import { randRange } from "./utils";

class Terrain {
  constructor(start, height, width) {
    this.start = start;
    this.height = height;
    this.width = width;
  }

  getEnd() {
    return this.start + this.width;
  }

  static fromLastTerrain(lastTerrain) {
    const start = this.nextStart(lastTerrain.getEnd());
    const height = this.nextHeight(lastTerrain.height);
    const width = this.nextWidth();
    return new Terrain(start, height, width);
  }

  static nextHeight(lastHeight) {
    return randRange(50, 250);
  }

  static nextStart(lastEnd) {
    return lastEnd + randRange(100, 300);
  }

  static nextWidth() {
    return randRange(300, 800);
  }

  contains(pos) {
    return (
      this.start <= pos[0] && this.getEnd() >= pos[0] && this.height >= pos[1]
    );
  }

  draw(ctx) {
    ctx.fillStyle = "#756";
    ctx.fillRect(this.start, 500 - this.height, this.width, this.height);
  }

  nextState(playerSpeed) {
    this.start -= playerSpeed;
  }
}

export default Terrain;
