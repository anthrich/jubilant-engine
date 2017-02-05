import Vector2 from './vector2';
import Component from './component';

abstract class GameObject {

  position: Vector2;
  drawPosition: Vector2;
  speed: number;
  components: Array<Component>;

  constructor() {
    this.position = new Vector2(0, 0);
    this.drawPosition = new Vector2(this.position.x, this.position.y);
    this.speed = 100;
    this.components = [];
  }

  addComponent(component) {
      component.registerGameObject(this);
      this.components.push(component);
  }

  update(delta) {
    this.components.forEach((component) => {
      component.update(delta);
    });
  }

  abstract draw();
}

export default GameObject;

