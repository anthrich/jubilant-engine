import "../../css/main.css";
import MovementComponent from '../game-engine/movement-component';
import GameState from '../game-engine/game-state';
import Circle from './circle';
import CanvasGameStateIntegration from "../game-engine/canvas-integration/canvas-game-state-integration";
import { Client, Room } from 'colyseus.js';
import {Player} from "./player";

class ExampleGameState extends GameState {

  player: Circle;
  playerMovementComponent: MovementComponent;
  client : Client;
  room : Room<Object>;
  players : Array<Player>;

  constructor() {
    super();
  }

  onGameStateReady() {
    let self = this;
    this.client = new Client('ws://localhost:3553');
    this.room = this.client.join("game_room");
    this.players = Array<Player>();
    
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

      state.players.forEach(newPl => {
        let currentGo = self.players.find(ePl => ePl.id === newPl.id);
        if(!currentGo) self.players.push(newPl);
      })
    });
  
    this.room.onData.add(function(data) {
      console.log(data);
    });

    this.room.onLeave.add(function(a) {
      console.log(a)
    });

    this.room.state.listen("players/:id", "remove", (playerId: number) => {
      let playerLeft = self.players.find(ePl => ePl.id == playerId);

      console.log(playerLeft);
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
