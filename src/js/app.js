"use strict";
require("../css/main.css");
var game_state_1 = require("./game-engine/game-state");
var circle_1 = require("./game-engine/circle");
var movement_component_1 = require("./game-engine/movement-component");
(function () {
    var canvas = document.getElementById('canvas');
    var gameState = new game_state_1["default"](canvas);
    var circle = new circle_1["default"](20, 'blue');
    var playerMovementComponent = new movement_component_1["default"]();
    circle.addComponent(playerMovementComponent);
    gameState.gameObjects.push(circle);
    canvas.addEventListener('mousedown', function (e) {
        playerMovementComponent.targetPosition.x = e.clientX;
        playerMovementComponent.targetPosition.y = e.clientY;
    });
    var drawLoop = function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        gameState.draw();
        window.requestAnimationFrame(drawLoop);
    };
    var updateLoop = function () {
        gameState.update(20);
    };
    drawLoop();
    setInterval(updateLoop, 20);
})();
