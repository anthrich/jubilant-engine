"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var component_1 = require("./component");
var vector2_1 = require("./vector2");
var MovementComponent = (function (_super) {
    __extends(MovementComponent, _super);
    function MovementComponent() {
        var _this = _super.call(this) || this;
        _this.targetPosition = new vector2_1["default"](0, 0);
        return _this;
    }
    MovementComponent.prototype.registerGameObject = function (gameObject) {
        _super.prototype.registerGameObject.call(this, gameObject);
        this.targetPosition.x = gameObject.position.x;
        this.targetPosition.y = gameObject.position.y;
    };
    MovementComponent.prototype.update = function (delta) {
        var distance = vector2_1["default"].distance(this.gameObject.position, this.targetPosition);
        var movementThisUpdate = this.gameObject.speed / 1000 * delta;
        if (distance < movementThisUpdate) {
            this.gameObject.position.x = this.targetPosition.x;
            this.gameObject.position.y = this.targetPosition.y;
            return;
        }
        var subtract = vector2_1["default"].subtract(this.targetPosition, this.gameObject.position);
        var direction = vector2_1["default"].normalise(subtract);
        this.gameObject.position = vector2_1["default"].sum(this.gameObject.position, vector2_1["default"].scale(movementThisUpdate, direction));
    };
    return MovementComponent;
}(component_1["default"]));
exports.__esModule = true;
exports["default"] = MovementComponent;
