import * as keyCodes from "./keyCodes";

class Input {
  constructor() {
    this.keyDownHandler = this.keyDownHandler.bind(this);
    this.keyUpHandler = this.keyUpHandler.bind(this);
    this.isPressed = {
      right: false,
      left: false,
      space: false
    };
  }

  attachHandlers() {
    document.addEventListener("keydown", this.keyDownHandler, false);
    document.addEventListener("keyup", this.keyUpHandler, false);
  }

  keyDownHandler(e) {
    switch (e.keyCode) {
      case keyCodes.RIGHT:
        this.isPressed.right = true;
        break;
      case keyCodes.LEFT:
        this.isPressed.left = true;
        break;
      case keyCodes.SPACE:
        this.isPressed.space = true;
        break;
    }
  }

  keyUpHandler(e) {
    switch (e.keyCode) {
      case keyCodes.RIGHT:
        this.isPressed.right = false;
        break;
      case keyCodes.LEFT:
        this.isPressed.left = false;
        break;
      case keyCodes.SPACE:
        this.isPressed.space = false;
        break;
    }
  }

  removeHandlers() {
    document.removeEventListener("keydown", this.keyDownHandler);
    document.removeEventListener("keyup", this.keyUpHandler);
  }
}

export default Input;
