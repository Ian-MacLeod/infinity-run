import { rangeOverlap } from "./utils";

class GameObject {
  constructor(pos, width, height) {
    this.pos = pos;
    this.width = width;
    this.height = height;
  }

  collision(other) {
    // Value returned in the form [x, y] represents how for this object wouild
    // have to move in the x or y direction to no longer overlap with other
    const horizontalOverlap = rangeOverlap(
      this.getHorizontalRange(),
      other.getHorizontalRange()
    );
    const verticalOverlap = rangeOverlap(
      this.getVerticalRange(),
      other.getVerticalRange()
    );
    return [horizontalOverlap, verticalOverlap];
  }

  getHorizontalRange() {
    return [this.getLeft(), this.getRight()];
  }

  getVerticalRange() {
    return [this.getTop(), this.getBottom()];
  }

  getTop() {
    return this.pos[1];
  }

  getRight() {
    return this.pos[0] + this.width;
  }

  getBottom() {
    return this.pos[1] + this.height;
  }

  getLeft() {
    return this.pos[0];
  }
}

export default GameObject;
