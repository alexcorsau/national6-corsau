console.log("OOP game");


class GameObject{
    constructor() {
        this.width = 50;
        this.height = 50;
        this.x = 0;
        this.y = 0;
        this.generateRef();
        // this.move(50,225);
    }
    generateRef(){
        this.ref = document.createElement("div");
        this.ref.style.width = `${this.width}px`;
        this.ref.style.height = `${this.height}px`;
        // this.ref.style.background = "red";
        this.ref.style.position = "absolute";
        this.ref.style.top = 0;
        this.ref.style.left = 0;
        document.getElementById("game-scene").appendChild(this.ref);
    }

    move(x,y){
        this.x = x;
        this.y = y;
        this.ref.style.transform = `translate(${this.x}px,${this.y}px)`
    }
    removeRef(){
        this.ref.remove();
    }
}


class Player extends GameObject{
    constructor() {
        super();
        this.ref.style.background = "blue";
        this.move(50,225);
        
    }
   
    moveUp(){
        if(this.y-25>=0) this.move(this.x,this.y-25);
    }

    moveDown(){
        if(this.y+25+this.height<=500) this.move(this.x,this.y+25);
    }
}


class Obstacle extends GameObject {
    constructor (){
        super();
        this.ref.style.background = "red";
        this.move(1060,25);
    }

    moveLeft(){
        this.move(this.x-5,this.y);
    }
}

class ObstacleFactory {
    constructor() {
        this.obstacles = [];
    }

    createObstacle(){
        const obstacle = new Obstacle();
        obstacle.move(1060, Math.floor(Math.random()*(500-obstacle.height)));
        this.obstacles.push(obstacle);
    }
    moveObstacles(){
        for (const obstacle of this.obstacles) {
            obstacle.moveLeft();
        }
    }

    destroyObstacles(){
        this.obstacles = this.obstacles.filter((obstacle)=>{
            if(obstacle.x<-50) {
                obstacle.removeRef();
                return false;
            }
            return true;
        });
    }

    
}

function collisionDetection(player, obstacles) {
    for (const obstacle of obstacles) {
        if
        (((player.x+player.width >= obstacle.x)&&(player.x<=obstacle.x+obstacle.width))
         && ((player.y+player.height >= obstacle.y)&&(player.y<=obstacle.y+obstacle.height)))


        //  (
        //     ( (player.x+player.width >= obstacle.x) && ((player.y+player.height >= obstacle.y) || (player.y<=obstacle.y+obstacle.height)) )
        //  ||
        //  ( (player.x<=obstacle.x+obstacle.width) && ((player.y+player.height <= obstacle.y) || (player.y>=obstacle.y+obstacle.height)) )
        //  )


        //  ((player.x <= obstacle.x &&
        //     obstacle.x <= player.x + player.width &&
        //     player.y <= obstacle.y &&
        //     obstacle.y <= player.y + player.height) ||
        //   (player.x <= obstacle.x + obstacle.width &&
        //     obstacle.x + obstacle.width <= player.x + player.width &&
        //     player.y <= obstacle.y + obstacle.height &&
        //     obstacle.y + obstacle.height <= player.y + player.height))
        

        {
            return true;
        }
    }
    return false;
}


const player = new Player();
//const obstacle1 = new Obstacle();

const obstacleFactory = new ObstacleFactory();

let keyUpPress = false;
let keyDownPress = false;


document.addEventListener("keydown",(event)=>{
    if(event.key === "ArrowUp")    {
        keyUpPress = true;
    }
    if(event.key === "ArrowDown")    {
        keyDownPress = true;
    }
});

document.addEventListener("keyup",(event)=>{
    if(event.key === "ArrowUp")    {
        keyUpPress = false;
    }
    if(event.key === "ArrowDown")    {
        keyDownPress = false;
    }

});

let count=0;

let gameLoop = setInterval( () => {
    //console.log(keyDownPress);
    if(keyUpPress) player.moveUp();
    if(keyDownPress) player.moveDown();
    //obstacle1.moveLeft();
    if (count%15===0) obstacleFactory.createObstacle();
    obstacleFactory.moveObstacles();
    if(collisionDetection(player,obstacleFactory.obstacles)){
        clearInterval(gameLoop);
        alert("dead");
        window.location = '/';
    } 
    obstacleFactory.destroyObstacles();

    count++;    
},50);