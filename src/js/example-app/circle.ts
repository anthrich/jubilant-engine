import GameObject from '../game-engine/game-object';
import CircleRenderer from "../game-engine/circle-renderer";

export default class Circle extends GameObject {

  _circleRenderer: CircleRenderer;
  radius: number;
  color: string;

  constructor(id: string, radius: number, color: string, circleRenderer: CircleRenderer) {
    super(id);
    this.radius = radius;
    this.color = color;
    circleRenderer.setColor(this.color);
    circleRenderer.setRadius(this.radius);
    this.addDrawable(circleRenderer);
  }
}
