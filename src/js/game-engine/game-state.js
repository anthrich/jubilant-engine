"use strict";
var GameState = (function () {
    function GameState(canvas) {
        if (!canvas)
            throw new TypeError("GameStates require a canvas");
        this.gameObjects = [];
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
    }
    GameState.prototype.update = function (delta) {
        this.gameObjects.forEach(function (go) {
            go.update(delta);
        });
    };
    GameState.prototype.draw = function () {
        var _this = this;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.gameObjects.forEach(function (go) {
            go.draw(_this.canvas);
        });
    };
    return GameState;
}());
exports.__esModule = true;
exports["default"] = GameState;
