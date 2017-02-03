export default class Component {
  constructor() {
    if (this.constructor === Component) {
      throw new TypeError("Cannot construct Component instances directly");
    }
    this.gameObject = null;
  }

  registerGameObject(gameObject) {
    this.gameObject = gameObject;
  }

  update(delta) {
    if(!this.gameObject) throw { name: "ComponentException", message: "GameObject not registered" }
  }
}
