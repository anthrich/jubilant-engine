import GameObject from "./game-object";
abstract class GameState {

  gameObjects: Array<GameObject>;
  onDrawStart: Function;

  constructor() {
    this.gameObjects = [];
  }

  update(delta: number) {
    this.gameObjects.forEach((go) => {
      go.update(delta);
    });
  }

  draw() {
    this.gameObjects.forEach((go) => {
      go.draw();
    });
  }

  onMouseDown(x: number, y: number) {

  }
}

export default GameState;
