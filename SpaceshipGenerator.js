class Spaceship {
    constructor() {
        this.xPosition = 0;
        this.yPosition = 0;
        this.createHtmlRef();
        this.setFly();
        this.choseOnClick();
    }

    createHtmlRef() {
        //this.ref = document.createElement("div");
        this.ref = document.createElement("img");
        let shipType = ["blue-spaceship.png","green-spaceship.png","red-spaceship.png"];
        this.ref.src = shipType[Math.floor(Math.random()*3)];
        this.ref.classList.add("spaceship");

        document.body.appendChild(this.ref);
      }

    setFly(){
        document.addEventListener("keydown",(event)=>{
            console.log(event.key);
            console.log("this.ship:",this.ref);
            // console.log("actual ship:",actualShip.ref);
            
            if(this.ref===actualShip.ref){
                console.log("go fly!");
                this.flyShip(event.key);
            }
        });
    }

    flyShip(direction){
        switch (direction) {
            case "ArrowUp": {
                this.yPosition = this.yPosition - 5;
                this.ref.style.transform = `translate(${this.xPosition}px,${this.yPosition}px)`;
            } break;
            case "ArrowDown": {
                this.yPosition = this.yPosition + 5;
                this.ref.style.transform = `translate(${this.xPosition}px,${this.yPosition}px)`;
                } break;
            case "ArrowLeft": {
                this.xPosition = this.xPosition - 5;
                this.ref.style.transform = `translate(${this.xPosition}px,${this.yPosition}px)`;
                } break;
            case "ArrowRight": {
                this.xPosition = this.xPosition + 5;
                this.ref.style.transform = `translate(${this.xPosition}px,${this.yPosition}px)`;
                } break;
            default:
                break;
        } 
    }
    choseOnClick(){

        // document.addEventListener("click",()=>{
        //     actualShip= this;
        //     console.log("this.ref:",this.ref);
        //     console.log("actualship from chose function:",actualShip.ref);
        // });
    }
}