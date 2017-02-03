export default class GameState {
  constructor(canvas) {
    if (!canvas) throw new TypeError("GameStates require a canvas");
    this.gameObjects = [];
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
  }

  update(delta) {
    this.gameObjects.forEach((go) => {
      go.update(delta);
    });
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.gameObjects.forEach((go) => {
      go.draw(this.canvas);
    });
  }
}
