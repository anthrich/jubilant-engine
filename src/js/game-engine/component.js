"use strict";
var Component = (function () {
    function Component() {
        if (this.constructor === Component) {
            throw new TypeError("Cannot construct Component instances directly");
        }
        this.gameObject = null;
    }
    Component.prototype.registerGameObject = function (gameObject) {
        this.gameObject = gameObject;
    };
    Component.prototype.update = function (delta) {
        if (!this.gameObject)
            throw { name: "ComponentException", message: "GameObject not registered" };
    };
    return Component;
}());
exports.__esModule = true;
exports["default"] = Component;
