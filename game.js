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
    //this.ref.classList.add("player--collision");
    this.move(50, 225);
    this.addLives(numberOfLives);
    this.removeLife;
  }

  moveUp() {
    if (this.y - playerStep >= 0) this.move(this.x, this.y - playerStep);
  }

  moveDown() {
    if (this.y + playerStep <= 500 - this.height) this.move(this.x, this.y + playerStep);
  }

  //added the addLives method on the Player Class with a "number of lives" parameter
  //this method allows for further new features of the game besides the instantiating of the player object with a given number of lives (user input value, difficulty level input, etc.)
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

//added the removelife method on the Player Class for current task and further development possibilities
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
    this.move(this.x - obstacleStep, this.y);
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

      // the collision is optimized by following actions:
      // 1. adjusting the setInterval interval with the movement of the object, movement of the player and the creating of new obstacles 
      // 2. considering the movement of the obstacles and the player when verifying the collision because there is a difference between rendering and calculating the collision at every step: obstacleStep on X axis and playerStep on Y axis
    if(
      ((player.x+player.width >= obstacle.x+obstacleStep) && (player.x+obstacleStep<=obstacle.x+obstacle.width))
      && ((player.y+player.height >= obstacle.y+playerStep) && (player.y+playerStep<=obstacle.y+obstacle.height))
    )

    // if (
    //   (player.x <= obstacle.x &&
    //     obstacle.x <= player.x + player.width &&
    //     player.y <= obstacle.y &&
    //     obstacle.y <= player.y + player.height) ||
    //   (player.x <= obstacle.x + obstacle.width &&
    //     obstacle.x + obstacle.width <= player.x + player.width &&
    //     player.y <= obstacle.y + obstacle.height &&
    //     obstacle.y + obstacle.height <= player.y + player.height)
    //   )
        {//removing the obstacle from HTML and obstacles array (an attribute of the ObstacleFactory Class), when colliding with the player
          obstacles.splice(obstacles.indexOf(obstacle),1);
          obstacle.removeRef();
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
// global variable to count the number of loops for the game


//game speed ratio = obstalceStep / gameSpeed = 1/10;

let obstacleStep=1;
// global variable for the distance the obstacles move every loop

let playerStep=5;
// global variable for the distance the player moves every loop if the UP/DOWN keys are pressed

let gameDifficulty = 50; 
//added a new global variable for the game difficulty, the periodicity of the game speed that creates new obstacles
//the higher the number is the easier the game is: obstacles are created less often

let gameSpeed=10; 
// added a new global variable for the game speed. is the second argument for the SET INTERVAL function
//the smaller the number is the faster the obstacles move

let start=false;
// added a new global variable for the functionality of the START BUTTON


// Game Loop


//added a START button for the game beginning
document.getElementById("game-start").addEventListener("click",()=>{

if(!start){
  start=true;
  let gameLoop = setInterval(() => {
    //console.log(keyUpPress);
  
    if (keyUpPress) player.moveUp();
    if (keyDownPress) player.moveDown();
  
    if (count % gameDifficulty === 0) obstacleFactory.createObstacle();
  
    if (collisionDetection(player, obstacleFactory.obstacles)) {
      player.removeLife();
    }

    obstacleFactory.moveObstacles();
    
    if(player.lives.length===0) {
      clearInterval(gameLoop);
      alert("You lost!");
      window.location = "/";
    }
    obstacleFactory.destroyObstacles();
    count++;
  }, gameSpeed);
}

});
