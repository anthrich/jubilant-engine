import GameObject from './game-object';
import Vector2 from './vector2';

export default class Circle extends GameObject {
  constructor(radius, color) {
    super();
    this.drawPosition = new Vector2(this.position.x, this.position.y);
    this.radius = radius;
    this.color = color;
  }

  draw(canvas) {
    this.drawPosition.x = this.position.x;
    this.drawPosition.y = this.position.y;
    var ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.arc(this.drawPosition.x, this.drawPosition.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}
