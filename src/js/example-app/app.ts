import "../../css/main.css";
import MovementComponent from '../game-engine/movement-component';
import GameState from '../game-engine/game-state';
import Circle from '../game-engine/circle';
import CanvasCircleRenderer from "../game-engine/canvas-integration/canvas-circle-renderer";
import CanvasGameStateIntegration from "../game-engine/canvas-integration/canvas-game-state-integration";

class ExampleGameState extends GameState {
  constructor() {
    super();
    let circle = new Circle(20, 'blue', new CanvasCircleRenderer(canvas));
    let playerMovementComponent = new MovementComponent();
    circle.addComponent(playerMovementComponent);
    this.gameObjects.push(circle);
  }
}

(() => {
  let canvas = <HTMLCanvasElement>document.getElementById("canvas");
  let gameState = new ExampleGameState();
  let gameStateIntegration = new CanvasGameStateIntegration(canvas, gameState, window);
  gameStateIntegration.initialize();
})();
