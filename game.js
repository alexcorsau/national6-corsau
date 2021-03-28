console.log("OOP Game Homework - Alex Corsau");

class GameObject {
  constructor() {
    this.width = 50;
    this.height = 50;
    this.x = 0;
    this.y = 0;
    this.generateRef();
  }

  generateRef() {
    this.ref = document.createElement("div");
    this.ref.style.width = `${this.width}px`;
    this.ref.style.height = `${this.height}px`;
    this.ref.style.position = "absolute";
    this.ref.style.top = 0;
    this.ref.style.left = 0;

    document.getElementById("game-scene").appendChild(this.ref);
  }

  move(x, y) {
    this.x = x;
    this.y = y;
    this.ref.style.transform = `translate(${this.x}px, ${this.y}px)`;
  }

  removeRef() {
    this.ref.remove();
  }
}

class Player extends GameObject {
  constructor(numberOfLives) { // modified the Player Class so that every player object is instantiated with the number of lives provided as an argument to the constructor
    super();
    this.lives=[]; //added an attribute equal to the array containing the lives of the player
    this.ref.style.background = "blue";
    this.move(50, 225);
    this.addLives(numberOfLives);
    this.removeLife;
  }

  moveUp() {
    if (this.y - 25 >= 0) this.move(this.x, this.y - 25);
  }

  moveDown() {
    if (this.y + 25 <= 500 - this.height) this.move(this.x, this.y + 25);
  }

  //added the addLives method on the Player Class with a "number of lives" parameter
  //this method allows for further new features of the game 
  addLives(numberOfLives){
    let livesDivision = document.getElementById("player-lives");
    for(let i=0;i<numberOfLives;i++){
      const lifeRef = document.createElement("div");
      const lifeImg = document.createElement("img");
      lifeImg.setAttribute("src","/heart.png");
      lifeImg.classList.add("icon-lives");
      lifeRef.appendChild(lifeImg);
      livesDivision.appendChild(lifeRef);
      this.lives.push(lifeRef);
    }
}

//added the removelife method on the Player Class 
  removeLife() {
    this.lives.pop().remove();
  }
}

class Obstacle extends GameObject {
  constructor() {
    super();
    this.ref.style.background = "red";
    this.move(1060, 25);
  }

  moveLeft() {
    this.move(this.x - 5, this.y);
  }
}

class ObstacleFactory {
  constructor() {
    this.obstacles = [];
  }

  createObstacle() {
    const obstacle = new Obstacle();
    obstacle.move(1060, Math.floor(Math.random() * 450));
    this.obstacles.push(obstacle);
  }

  destroyObstacles() {
    this.obstacles = this.obstacles.filter((obstacle) => {
      if (obstacle.x < -50) {
        obstacle.removeRef();
        return false;
      }

      return true;
    });
  }

  moveObstacles() {
    for (const obstacle of this.obstacles) {
      obstacle.moveLeft();
    }
  }
}

/// --- User  input

let keyUpPress = false;
let keyDownPress = false;
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") {
    keyUpPress = true;
  }

  if (event.key === "ArrowDown") {
    keyDownPress = true;
  }
});

document.addEventListener("keyup", (event) => {
  if (event.key === "ArrowUp") {
    keyUpPress = false;
  }

  if (event.key === "ArrowDown") {
    keyDownPress = false;
  }
});

/// --- User  input

// -- Collision Detection

function collisionDetection(player, obstacles) {
  for (const obstacle of obstacles) {
    // console.log(player.x, player.x + player.width, obstacle.x);

    if (
      (player.x <= obstacle.x &&
        obstacle.x <= player.x + player.width &&
        player.y <= obstacle.y &&
        obstacle.y <= player.y + player.height) ||
      (player.x <= obstacle.x + obstacle.width &&
        obstacle.x + obstacle.width <= player.x + player.width &&
        player.y <= obstacle.y + obstacle.height &&
        obstacle.y + obstacle.height <= player.y + player.height)
    )
      {//removing the obstacle form HTML and obstacle array, an attribute of the ObstacleFactory Class, when colliding with the player
        obstacle.ref.remove(); 
        obstacles.splice(obstacles.indexOf(obstacle),1);
        return true;
        
      }
  }

  return false;
}


let lives=3; //number of lives the player has at the beginning of the game


const player = new Player(lives); // modified the Player Class so that every player object is instantiated with the number of lives provided as an argument to the constructor

// console.log(player.lives);

const obstacleFactory = new ObstacleFactory();

let count = 0;

let start=false;


// Game Loop


//added a START button for the game beginning
document.getElementById("game-start").addEventListener("click",()=>{

if(!start){
  start=true;
  let gameLoop = setInterval(() => {
    //console.log(keyUpPress);
  
    if (keyUpPress) player.moveUp();
    if (keyDownPress) player.moveDown();
  
    if (count % 10 === 0) obstacleFactory.createObstacle();
  
    obstacleFactory.moveObstacles();
    if (collisionDetection(player, obstacleFactory.obstacles)) {
      player.removeLife();
      // clearInterval(gameLoop);
      // alert("You hit an obstacle");
      // window.location = "/";
    }
    if(player.lives.length===0) {
      clearInterval(gameLoop);
      alert("You lost!");
      // window.location = "/";
    }
    obstacleFactory.destroyObstacles();
    count++;
  }, 50);
}

});
