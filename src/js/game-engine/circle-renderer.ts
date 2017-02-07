import Drawable from "./drawable";

interface CircleRenderer extends Drawable{
    setRadius (radius: number);
    setColor (color: string);
}

export default CircleRenderer;
