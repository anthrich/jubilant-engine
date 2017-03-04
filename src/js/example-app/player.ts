"use strict";
import GameObject from "../game-engine/game-object";
import Circle from "./circle";

export class Player {
    id : number;
    color : string;
    clientId : string;
    name : string;
    gameObjects : GameObject[];

    /**
     * @param clientId
     * @param name
     */
    constructor(id: number, color:string, clientId: string) {
        this.id = id;
        this.color = color;
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

    stylizeObjects()
    {
        this.gameObjects
            .filter(go => go instanceof Circle)
            .forEach(go => {
                let cGo = go as Circle;
                cGo.setOutlineColor(this.color);
            });
    }
}
