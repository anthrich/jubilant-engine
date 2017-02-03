export default class Vector2 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static sum(vectorA, vectorB) {
    return new Vector2(vectorA.x + vectorB.x, vectorA.y + vectorB.y);
  }

  static subtract(vectorA, vectorB) {
    return new Vector2(vectorA.x - vectorB.x, vectorA.y - vectorB.y);
  }

  static scale(scalar, vector) {
    return new Vector2(vector.x * scalar, vector.y * scalar);
  }

  static distance(vectorA, vectorB) {
    return Vector2.subtract(vectorA, vectorB).getLength();
  }

  static normalise(vector) {
    let length = vector.getLength();
    let newVectorX = 0, newVectorY = 0;
    if(length && vector.x) newVectorX = vector.x / length;
    if(length && vector.y) newVectorY = vector.y / length;
    return new Vector2(newVectorX, newVectorY);
  }

  getLength() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}
