import { renderBreeds, showNextImage, showPreviousImage } from "./breeds";
import { getBreedListFromServer } from "./utils/api";
import { logOut } from "./utils/storage";

console.log("JavaScript - Dogs App");


if (!localStorage.getItem("name") || !localStorage.getItem("password")) {
  window.location = "/login.html";
}

document.getElementById("logout").addEventListener("click",logOut);
document.getElementById("backward").addEventListener("click",showPreviousImage);
document.getElementById("forward").addEventListener("click",showNextImage);

getBreedListFromServer(renderBreeds);

// fetch("https://dog.ceo/api/breeds/list/all")
// .then(handleFetchResponse)
// .then(renderBreeds)

// function renderBreeds(breedList) {
//   // console.log(breedListArray);
//   // console.log("Object.values() breedList.message: ",Object.values(breedList.message));
//   // console.log("typeOf Object.values(breedList.message) : ",typeof(Object.values(breedList.message)));
//   for (const breed of Object.keys(breedList.message)) {
//     console.log(breed);
//     renderBreed(breed);
//   }
//   if(localStorage.breed && localStorage.index) {
//     document.getElementById(localStorage.breed).classList.add("breed--selected");
//     document.getElementById("page-number").innerText = "";
//     document.getElementById("page-number").innerText = parseInt(localStorage.index)+1;
    
        
//     // getBreedImagesFromServer(renderImage)

//     // fetch(`https://dog.ceo/api/breed/${localStorage.breed}/images`)
//     //   .then(handleFetchResponse)
//     //   .then(renderImage)
//   }
// }

// function renderBreed(dogBreed){
//   const breedName = document.createElement("p");
//   breedName.innerText = dogBreed;
//   breedName.setAttribute("id",dogBreed);
//   breedName.addEventListener("click",selectBreed);
//   console.log(breedName);
//   document.getElementById("breeds").appendChild(breedName);
// }

// function selectBreed(){
//   if(document.querySelector(".breed--selected")) document.querySelector(".breed--selected").classList.remove("breed--selected");
//   localStorage.setItem("index",0);
//   document.getElementById("page-number").innerText = "";
//   document.getElementById("page-number").innerText = parseInt(localStorage.index)+1;
//   localStorage.setItem("breed",this.id);
//   // localStorage.setItem("index",);
//   this.classList.add("breed--selected");


//   // getBreedImagesFromServer(renderImage)

//     // fetch(`https://dog.ceo/api/breed/${localStorage.breed}/images`)
//     //   .then(handleFetchResponse)
//     //   .then(renderImage)
// }


// function renderImage(imageResponseMessage) {
//   currentBreedPictures = imageResponseMessage.message;
//   console.log(currentBreedPictures);
//   if(localStorage.index) {
//     document.getElementById("breed-image").setAttribute("src",currentBreedPictures[localStorage.index]);
//     }
//     else document.getElementById("breed-image").setAttribute("src",currentBreedPictures[0]);
//   // document.getElementById("breed-image").setAttribute("src",imageResponseMessage.message[267]);
// }

// function showPreviousImage(){
//   if(document.querySelector(".breed--selected")){
//     if(localStorage.index>=1) {
//       localStorage.index--;
//     }
//     document.getElementById("page-number").innerText = "";
//     document.getElementById("page-number").innerText = parseInt(localStorage.index)+1;
//     document.getElementById("breed-image").setAttribute("src",currentBreedPictures[localStorage.index]);
//   }
// }

// function showNextImage(){
//   if(document.querySelector(".breed--selected")){
//     if(localStorage.index<currentBreedPictures.length-1) {
//       localStorage.index++;
//     }
//     document.getElementById("page-number").innerText = "";
//     document.getElementById("page-number").innerText = parseInt(localStorage.index)+1;
//     document.getElementById("breed-image").setAttribute("src",currentBreedPictures[localStorage.index]);
//   }
// }
