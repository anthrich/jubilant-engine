import "../css/main.css";
import GameState from './game-engine/game-state';
import Circle from './game-engine/circle';
import MovementComponent from './game-engine/movement-component';

(() => {
  let canvas = <HTMLCanvasElement>document.getElementById('canvas');
  let gameState = new GameState(canvas);
  let circle = new Circle(20, 'blue');
  let playerMovementComponent = new MovementComponent();
  circle.addComponent(playerMovementComponent);
  gameState.gameObjects.push(circle);

  canvas.addEventListener('mousedown', (e) => {
    playerMovementComponent.targetPosition.x = e.clientX;
    playerMovementComponent.targetPosition.y = e.clientY;
  });

  let drawLoop = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    gameState.draw();
    window.requestAnimationFrame(drawLoop);
  }

  let updateLoop = () => {
    gameState.update(20);
  };


  drawLoop();
  setInterval(updateLoop, 20);
})();
