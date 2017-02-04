import GameObject from './game-object';
import Vector2 from './vector2';

export default class Circle extends GameObject {

  drawPosition: Vector2;
  radius: number;
  color: string;

  constructor(radius: number, color: string) {
    super();
    this.radius = radius;
    this.color = color;
  }

  draw(canvas: HTMLCanvasElement) {
    this.drawPosition.x = this.position.x;
    this.drawPosition.y = this.position.y;
    let ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.arc(this.drawPosition.x, this.drawPosition.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}
