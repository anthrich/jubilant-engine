import "../../css/main.css";
import MovementComponent from '../game-engine/movement-component';
import GameState from '../game-engine/game-state';
import Circle from './circle';
import CanvasGameStateIntegration from "../game-engine/canvas-integration/canvas-game-state-integration";
import * as Colyseus from 'colyseus.js';
import {Client} from "colyseus.js";
import {Room} from "colyseus.js";

class ExampleGameState extends GameState {

  player: Circle;
  playerMovementComponent: MovementComponent;
  client : Client;
  room : Room<Object>;

  constructor() {
    super();
  }

  onGameStateReady() {
    this.player = new Circle(20, 'blue', this.drawableFactory.getCircleRenderer());
    this.gameObjects.push(this.player);
    this.client = new Colyseus.Client('ws://localhost:3553');

    this.room = this.client.join("game_room");
    let self = this;
    this.room.onJoin.add(function() {
      console.log(self.client.id, "joined", self.room.name);
    });

    this.room.onUpdate.add(function(state) {
      let newGameObject = state.gameObjects.find(go => go.clientId == self.client.id);
      self.player.position.x = newGameObject.x;
      self.player.position.y = newGameObject.y;
    })
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
