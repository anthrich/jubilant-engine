import GameObject from "./game-object";

abstract class Component {

  gameObject: GameObject;

  registerGameObject(gameObject: GameObject) {
    this.gameObject = gameObject;
  }

  abstract update(delta: number);
}

export default Component;
