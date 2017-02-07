import "../../css/main.css";
import MovementComponent from '../game-engine/movement-component';
import GameState from '../game-engine/game-state';
import Circle from './circle';
import CanvasGameStateIntegration from "../game-engine/canvas-integration/canvas-game-state-integration";

class ExampleGameState extends GameState {

  player: Circle;
  playerMovementComponent: MovementComponent;

  constructor() {
    super();
  }

  onGameStateReady() {
    this.player = new Circle(20, 'blue', this.drawableFactory.getCircleRenderer());
    this.playerMovementComponent = new MovementComponent();
    this.player.addComponent(this.playerMovementComponent);
    this.gameObjects.push(this.player);
  }

  onMouseDown(x: number, y: number) {
    this.playerMovementComponent.targetPosition.x = x;
    this.playerMovementComponent.targetPosition.y = y;
  }
}

(() => {
  let canvas = <HTMLCanvasElement>document.getElementById("canvas");
  let gameState = new ExampleGameState();
  let gameStateIntegration = new CanvasGameStateIntegration(canvas, gameState, window);
  gameStateIntegration.initialize();
})();
