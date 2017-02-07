import GameObject from '../game-engine/game-object';
import CircleRenderer from "../game-engine/circle-renderer";

export default class Circle extends GameObject {

  _circleRenderer: CircleRenderer;
  radius: number;
  color: string;

  constructor(radius: number, color: string, circleRenderer: CircleRenderer) {
    super();
    this.radius = radius;
    this.color = color;
    circleRenderer.setColor(this.color);
    circleRenderer.setRadius(this.radius);
    this.addDrawable(circleRenderer);
  }
}
