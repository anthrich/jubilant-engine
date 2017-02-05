import Vector2 from "./vector2";

interface CircleRenderer {
    setRadius (radius: number);
    setColor (color: string);
    draw (position: Vector2);
}

export default CircleRenderer;
