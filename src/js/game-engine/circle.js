"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var game_object_1 = require("./game-object");
var vector2_1 = require("./vector2");
var Circle = (function (_super) {
    __extends(Circle, _super);
    function Circle(radius, color) {
        var _this = _super.call(this) || this;
        _this.drawPosition = new vector2_1["default"](_this.position.x, _this.position.y);
        _this.radius = radius;
        _this.color = color;
        return _this;
    }
    Circle.prototype.draw = function (canvas) {
        this.drawPosition.x = this.position.x;
        this.drawPosition.y = this.position.y;
        var ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.arc(this.drawPosition.x, this.drawPosition.y, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
    };
    return Circle;
}(game_object_1["default"]));
exports.__esModule = true;
exports["default"] = Circle;
