import GameObject from "./game-object";
export default class GameState {

  gameObjects: Array<GameObject>;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;

  constructor(canvas: HTMLCanvasElement) {
    if (!canvas) throw new TypeError("GameStates require a canvas");
    this.gameObjects = [];
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
  }

  update(delta: number) {
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
