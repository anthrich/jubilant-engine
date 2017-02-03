import Vector2 from './vector2';
import Component from './component';

export default class GameObject {

  position: Vector2;
  speed: number;
  components: Array<Component>;

  constructor() {
    if (this.constructor === GameObject) {
      throw new TypeError("Cannot construct GameObject instances directly");
    }

    this.position = new Vector2(0, 0);
    this.speed = 100;
    this.components = [];
  }

  addComponent(component) {
    if(component instanceof Component) {
      component.registerGameObject(this);
      this.components.push(component);
    } else {
      throw { name: "GameObjectException", message: "addComponent must specify a Component object" }
    }
  }

  update(delta) {
    this.components.forEach((component) => {
      component.update(delta);
    });
  }

  draw(canvas) {}
}
