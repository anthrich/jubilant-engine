import CircleRenderer from "./game-engine/circle-renderer";
import Vector2 from "./game-engine/vector2";

class CanvasCircleRenderer implements CircleRenderer {

  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private radius : number;
  private color : string;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
  }

  setRadius(radius: number) {
    this.radius = radius;
  }

  setColor(color: string) {
    this.color = color;
  }

  draw(position: Vector2) {
    this.ctx.beginPath();
    this.ctx.arc(position.x, position.y, this.radius, 0, Math.PI * 2, true);
    this.ctx.closePath();
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
  }

}

export default CanvasCircleRenderer;
