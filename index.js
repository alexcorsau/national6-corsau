console.log("Spaceship Homework - Alex Corsau");

document.getElementById("generate-spaceship").addEventListener("click",generateStarship);
let actualShip;

function generateStarship(){
    actualShip = new Spaceship();
}
