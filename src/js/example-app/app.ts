import "../../css/main.css";
import MovementComponent from '../game-engine/movement-component';
import GameState from '../game-engine/game-state';
import Circle from './circle';
import CanvasGameStateIntegration from "../game-engine/canvas-integration/canvas-game-state-integration";
import { Client, Room } from 'colyseus.js';
import GameObject from "../game-engine/game-object";

class ExampleGameState extends GameState {

  player: Circle;
  playerMovementComponent: MovementComponent;
  client : Client;
  room : Room<Object>;

  constructor() {
    super();
  }

  onGameStateReady() {
    let self = this;
    this.client = new Client('ws://localhost:3553');
    this.room = this.client.join("game_room");
    
    let addNewGameObject = (newObject) => {
      let newGo = new Circle(newObject.id, 20, 'red', self.drawableFactory.getCircleRenderer());
      self.gameObjects.push(newGo);
      if(newObject.id == self.client.id) self.player = newGo;
      return newGo;
    }

    this.room.onUpdate.add(function(state) {
      state.gameObjects.forEach(newGo => {
        let currentGo = self.gameObjects.find(eGo => eGo.id === newGo.id);
        if(!currentGo) currentGo = addNewGameObject(newGo);
        currentGo.setPosition(newGo.position);
      })
    });
  
    this.room.onData.add(function(data) {
      console.log(data);
    });
  }

  onMouseDown(x: number, y: number) {
    this.room.send({ "x": x, "y": y });
  }
}

(() => {
  let canvas = <HTMLCanvasElement>document.getElementById("canvas");
  let gameState = new ExampleGameState();
  let gameStateIntegration = new CanvasGameStateIntegration(canvas, gameState, window);
  gameStateIntegration.initialize();
})();
