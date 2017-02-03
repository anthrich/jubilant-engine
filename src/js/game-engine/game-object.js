"use strict";
var vector2_1 = require("./vector2");
var component_1 = require("./component");
var GameObject = (function () {
    function GameObject() {
        if (this.constructor === GameObject) {
            throw new TypeError("Cannot construct GameObject instances directly");
        }
        this.position = new vector2_1["default"](0, 0);
        this.speed = 100;
        this.components = [];
    }
    GameObject.prototype.addComponent = function (component) {
        if (component instanceof component_1["default"]) {
            component.registerGameObject(this);
            this.components.push(component);
        }
        else {
            throw { name: "GameObjectException", message: "addComponent must specify a Component object" };
        }
    };
    GameObject.prototype.update = function (delta) {
        this.components.forEach(function (component) {
            component.update(delta);
        });
    };
    GameObject.prototype.draw = function (canvas) { };
    return GameObject;
}());
exports.__esModule = true;
exports["default"] = GameObject;
