require("../css/main.css");

class GameState {
  constructor(canvas) {
    if (!canvas) throw new TypeError("GameStates require a canvas");
    this.gameObjects = [];
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
  }

  update(delta) {
    this.gameObjects.forEach((go) => {
      go.update(delta);
    });
  }

  draw() {
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.gameObjects.forEach((go) => {
      go.draw(this.canvas);
    });
  }
}

class GameObject {
  constructor() {
    if (this.constructor === GameObject) {
      throw new TypeError("Cannot construct GameObject instances directly");
    }

    this.position = new Vector2(0, 0);
    this.speed = 100;
    this.components = [];
  }

  addComponent(component) {
    if(component instanceof Component) {
      component.registerGameObject(this);
      this.components.push(component);
    } else {
      throw { name: "GameObjectException", message: "addComponent must specify a Component object" }
    }
  }

  update(delta) {
    this.components.forEach((component) => {
      component.update(delta);
    });
  }

  draw(canvas) {}
}

class Circle extends GameObject {
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

class Component {
  constructor() {
    if (this.constructor === Component) {
      throw new TypeError("Cannot construct Component instances directly");
    }
    this.gameObject = null;
  }

  registerGameObject(gameObject) {
    this.gameObject = gameObject;
  }

  update(delta) {
    if(!this.gameObject) throw { name: "ComponentException", message: "GameObject not registered" }
  }
}

class MovementComponent extends Component {
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

class Vector2 {
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

(() => {
  let canvas = document.getElementById('canvas');
  let gameState = new GameState(canvas);
  let circle = new Circle(20, 'blue');
  let playerMovementComponent = new MovementComponent();
  circle.addComponent(playerMovementComponent);
  gameState.gameObjects.push(circle);

  canvas.addEventListener('mousedown', (e) => {
    playerMovementComponent.targetPosition.x = e.clientX;
    playerMovementComponent.targetPosition.y = e.clientY;
  });

  let drawLoop = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    gameState.draw();
    window.requestAnimationFrame(drawLoop);
  }

  let updateLoop = () => {
    gameState.update(20);
  };


  drawLoop();
  setInterval(updateLoop, 20);
})();
