class Spaceship {
    constructor() {
        this.xPosition = 0;
        this.yPosition = 0;
        this.createHtmlRef();
        this.setFly();
        this.choseOnClick();
    }

    createHtmlRef() {
        this.ref = document.createElement("img");
        let shipType = ["blue-spaceship.png","green-spaceship.png","red-spaceship.png"];
        this.ref.src = shipType[Math.floor(Math.random()*3)];
        this.ref.classList.add("spaceship");
        document.body.appendChild(this.ref);
      }

    setFly(){
        document.addEventListener("keydown",(event)=>{
            if(this.ref.classList.contains("spaceship--active")){
                //console.log("go fly!");
                this.flyShip(event.key);
            }
        });
    }

    flyShip(direction){
        switch (direction) {
            case "ArrowUp": {
                this.yPosition = this.yPosition - 10;
                this.ref.style.transform = `translate(${this.xPosition}px,${this.yPosition}px)`;
            } break;
            case "ArrowDown": {
                this.yPosition = this.yPosition + 10;
                this.ref.style.transform = `translate(${this.xPosition}px,${this.yPosition}px)`;
                } break;
            case "ArrowLeft": {
                this.xPosition = this.xPosition - 10;
                this.ref.style.transform = `translate(${this.xPosition}px,${this.yPosition}px)`;
                } break;
            case "ArrowRight": {
                this.xPosition = this.xPosition + 10;
                this.ref.style.transform = `translate(${this.xPosition}px,${this.yPosition}px)`;
                } break;
            default:
                break;
        } 
    }
    choseOnClick(){
        this.ref.addEventListener("click",()=>{
            if(this.ref.classList.contains("spaceship--active")) {
                this.ref.classList.remove("spaceship--active")
            } else {
                if(document.querySelector(".spaceship--active")){
                    document.querySelector(".spaceship--active").classList.remove("spaceship--active");
                }
                this.ref.classList.add("spaceship--active");
            }
        });
    }
}