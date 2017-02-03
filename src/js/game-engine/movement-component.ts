import Component from './component';
import Vector2 from './vector2';

export default class MovementComponent extends Component {

  targetPosition: Vector2;

  constructor() {
    super();
    this.targetPosition = new Vector2(0,0);
  }

  registerGameObject(gameObject) {
    super.registerGameObject(gameObject);
    this.targetPosition.x = gameObject.position.x;
    this.targetPosition.y = gameObject.position.y;
  }

  update(delta) {
    let distance = Vector2.distance(this.gameObject.position, this.targetPosition);
    let movementThisUpdate = this.gameObject.speed / 1000 * delta;

    if(distance < movementThisUpdate) {
      this.gameObject.position.x = this.targetPosition.x;
      this.gameObject.position.y = this.targetPosition.y;
      return;
    }

    let subtract = Vector2.subtract(this.targetPosition, this.gameObject.position);
    let direction = Vector2.normalise(subtract);
    this.gameObject.position = Vector2.sum(this.gameObject.position, Vector2.scale(movementThisUpdate, direction));
  }
}
