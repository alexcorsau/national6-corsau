import { getBreedImagesFromServer } from "./utils/api";

let currentBreedPictures = [];

export function renderBreeds(breedList) {
    for (const breed of Object.keys(breedList.message)) {
        renderBreed(breed);
        }
    if(localStorage.breed && localStorage.index) {
        document.getElementById(localStorage.breed).classList.add("breed--selected");
        document.getElementById("page-number").innerText = "";
        document.getElementById("page-number").innerText = parseInt(localStorage.index)+1;
        getBreedImagesFromServer(renderImage);
    }
  }
  
export function renderBreed(dogBreed){
    const breedName = document.createElement("p");
    breedName.innerText = dogBreed;
    breedName.setAttribute("id",dogBreed);
    document.getElementById("breeds").appendChild(breedName);
    breedName.addEventListener("click",selectBreed);
  }
  
export function selectBreed(){
    if(document.querySelector(".breed--selected")) {
        document.querySelector(".breed--selected").classList.remove("breed--selected");
        } 
    localStorage.setItem("index",0);
    modifyPageNumber();
    localStorage.setItem("breed",this.id);
    this.classList.add("breed--selected");
    getBreedImagesFromServer(renderImage);
  }
  
  
export function renderImage(imageResponseMessage) {
    currentBreedPictures = imageResponseMessage.message;
    if(localStorage.index) {
      document.getElementById("breed-image").setAttribute("src",currentBreedPictures[localStorage.index]);
      }
      else {
        document.getElementById("breed-image").setAttribute("src",currentBreedPictures[0]);
      } 
  }
  
export function showPreviousImage(){
    if(document.querySelector(".breed--selected")){
        if(localStorage.index>=1) {
            localStorage.index--;
            }
        modifyPageNumber();
    }
  }
  
export function showNextImage(){
    if(document.querySelector(".breed--selected")){
        if(localStorage.index<currentBreedPictures.length-1) {
            localStorage.index++;
            }
        modifyPageNumber();
    }
}

function modifyPageNumber(){
    document.getElementById("page-number").innerText = "";
    document.getElementById("page-number").innerText = parseInt(localStorage.index)+1;
    document.getElementById("breed-image").setAttribute("src",currentBreedPictures[localStorage.index]);
}