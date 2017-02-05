import GameObject from './game-object';
import Vector2 from './vector2';
import CircleRenderer from "./circle-renderer";

export default class Circle extends GameObject {

  _circleRenderer: CircleRenderer;
  drawPosition: Vector2;
  radius: number;
  color: string;

  constructor(radius: number, color: string, circleRenderer: CircleRenderer) {
    super();
    this.radius = radius;
    this.color = color;
    this._circleRenderer = circleRenderer;
  }

  draw() {
    this.drawPosition.x = this.position.x;
    this.drawPosition.y = this.position.y;
    this._circleRenderer.setColor(this.color);
    this._circleRenderer.setRadius(this.radius);
    this._circleRenderer.draw(this.drawPosition);
  }
}
