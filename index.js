console.log("JavaScript - Dogs App");

let currentBreedPictures = [];

if (!localStorage.getItem("name") || !localStorage.getItem("password")) {
  window.location = "/login.html";
}

document.getElementById("logout").addEventListener("click", () => {
  localStorage.removeItem("name");
  localStorage.removeItem("password");
  localStorage.removeItem("breed");
  localStorage.removeItem("index");
  window.location = "/";
});

document.getElementById("backward").addEventListener("click",showPreviousImage);
document.getElementById("forward").addEventListener("click",showNextImage);

fetch("https://dog.ceo/api/breeds/list/all")
.then(handleFetchResponse)
.then(renderBreeds)

function handleFetchResponse(response) {
  return response.json();
}

function renderBreeds(breedList) {
  for (const breed of Object.keys(breedList.message)) {
    renderBreed(breed);
  }
  if(localStorage.breed && localStorage.index) {
    document.getElementById(localStorage.breed).classList.add("breed--selected");
    document.getElementById("page-number").innerText = "";
    document.getElementById("page-number").innerText = parseInt(localStorage.index)+1;
    fetch(`https://dog.ceo/api/breed/${localStorage.breed}/images`)
      .then(handleFetchResponse)
      .then(renderImage)
  }
}

function renderBreed(dogBreed){
  const breedName = document.createElement("p");
  breedName.innerText = dogBreed;
  breedName.setAttribute("id",dogBreed);
  breedName.addEventListener("click",selectBreed);
  document.getElementById("breeds").appendChild(breedName);
}

function selectBreed(){
  if(document.querySelector(".breed--selected")) document.querySelector(".breed--selected").classList.remove("breed--selected");
  localStorage.setItem("index",0);
  document.getElementById("page-number").innerText = "";
  document.getElementById("page-number").innerText = parseInt(localStorage.index)+1;
  localStorage.setItem("breed",this.id);
  this.classList.add("breed--selected");
  fetch(`https://dog.ceo/api/breed/${this.id}/images`)
    .then(handleFetchResponse)
    .then(renderImage)
}

function renderImage(imageResponseMessage) {
  currentBreedPictures = imageResponseMessage.message;
  if(localStorage.index) {
    document.getElementById("breed-image").setAttribute("src",currentBreedPictures[localStorage.index]);
    }
    else document.getElementById("breed-image").setAttribute("src",currentBreedPictures[0]);
}



function showPreviousImage(){
  if(document.querySelector(".breed--selected")){
    console.log("Previous Picture");
    if(localStorage.index>=1) {
      localStorage.index--;
    }
    document.getElementById("page-number").innerText = "";
    document.getElementById("page-number").innerText = parseInt(localStorage.index)+1;
    document.getElementById("breed-image").setAttribute("src",currentBreedPictures[localStorage.index]);
  }
}

function showNextImage(){
  if(document.querySelector(".breed--selected")){
    console.log("Next Picture");
    if(localStorage.index<currentBreedPictures.length-1) {
      localStorage.index++;
    }
    document.getElementById("page-number").innerText = "";
    document.getElementById("page-number").innerText = parseInt(localStorage.index)+1;
    document.getElementById("breed-image").setAttribute("src",currentBreedPictures[localStorage.index]);
  } 
}
