"use strict";
import GameObject from "../game-engine/game-object";

export class Player {
    id : number;
    clientId : string;
    name : string;
    gameObjects : GameObject[];

    /**
     * @param clientId
     * @param name
     */
    constructor(id: number, clientId: string) {
        this.id = id;
        this.clientId = clientId;
        this.gameObjects = Array<GameObject>();
    }

    /**
     * Adds a game object to the player
     *
     * @param obj
     */
    addObject(obj : GameObject)
    {
        this.gameObjects.push(obj)
    }

    /**
     * Adds array of game objects to player.
     *
     * @param objs
     */
    addObjects(objs : GameObject[])
    {
        for(let i in objs) {
            this.addObject(objs[i]);
        }
    }
}
