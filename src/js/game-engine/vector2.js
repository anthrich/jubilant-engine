"use strict";
var Vector2 = (function () {
    function Vector2(x, y) {
        this.x = x;
        this.y = y;
    }
    Vector2.sum = function (vectorA, vectorB) {
        return new Vector2(vectorA.x + vectorB.x, vectorA.y + vectorB.y);
    };
    Vector2.subtract = function (vectorA, vectorB) {
        return new Vector2(vectorA.x - vectorB.x, vectorA.y - vectorB.y);
    };
    Vector2.scale = function (scalar, vector) {
        return new Vector2(vector.x * scalar, vector.y * scalar);
    };
    Vector2.distance = function (vectorA, vectorB) {
        return Vector2.subtract(vectorA, vectorB).getLength();
    };
    Vector2.normalise = function (vector) {
        var length = vector.getLength();
        var newVectorX = 0, newVectorY = 0;
        if (length && vector.x)
            newVectorX = vector.x / length;
        if (length && vector.y)
            newVectorY = vector.y / length;
        return new Vector2(newVectorX, newVectorY);
    };
    Vector2.prototype.getLength = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    };
    return Vector2;
}());
exports.__esModule = true;
exports["default"] = Vector2;
