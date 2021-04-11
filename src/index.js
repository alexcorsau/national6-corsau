
console.log("JavaScript - Dogs App");
let breedListArray =[];
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


fetch("https://dog.ceo/api/breeds/list/all")
.then(handleFetchResponse)
.then(renderBreeds)


function handleFetchResponse(response) {
  // console.log("response from server: ", response);
  return response.json();
}

function renderBreeds(breedList) {
  breedListArray=Object.keys(breedList.message);
  // console.log(breedListArray);
  // console.log("Object.values() breedList.message: ",Object.values(breedList.message));
  // console.log("typeOf Object.values(breedList.message) : ",typeof(Object.values(breedList.message)));
  for (const breed of Object.keys(breedList.message)) {
    console.log(breed);
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
  console.log(breedName);
  document.getElementById("breeds").appendChild(breedName);
}

function selectBreed(){
  if(document.querySelector(".breed--selected")) document.querySelector(".breed--selected").classList.remove("breed--selected");
  localStorage.setItem("index",0);
  document.getElementById("page-number").innerText = "";
  document.getElementById("page-number").innerText = parseInt(localStorage.index)+1;
  localStorage.setItem("breed",this.id);
  // localStorage.setItem("index",);
  this.classList.add("breed--selected");

  fetch(`https://dog.ceo/api/breed/${this.id}/images`)
    .then(handleFetchResponse)
    .then(renderImage)
}


function renderImage(imageResponseMessage) {
  currentBreedPictures = imageResponseMessage.message;
  console.log(currentBreedPictures);
  // console.log("imageResponseMessage: ",imageResponseMessage.message);
  // console.log("typeOf imageResponseMessage : ",typeof(imageResponseMessage.message));

  // console.log("imageResponseMessage[0]: ",imageResponseMessage.message[267]);
  // console.log("typeOf imageResponseMessage[0] : ",typeof(imageResponseMessage.message[267]));
  if(localStorage.index) {
    document.getElementById("breed-image").setAttribute("src",currentBreedPictures[localStorage.index]);
    }
    else document.getElementById("breed-image").setAttribute("src",currentBreedPictures[0]);
  // document.getElementById("breed-image").setAttribute("src",imageResponseMessage.message[267]);
}

// function showImage(imageLink){
//   document.getElementById("breed-img").setAttribute("src",imageLink);
// }


document.getElementById("backward").addEventListener("click",showPreviousImage);
document.getElementById("forward").addEventListener("click",showNextImage);

function showPreviousImage(){
  if(localStorage.index>=1) {
    localStorage.index--;
  }
  document.getElementById("page-number").innerText = "";
  document.getElementById("page-number").innerText = parseInt(localStorage.index)+1;
  document.getElementById("breed-image").setAttribute("src",currentBreedPictures[localStorage.index]);

  // if(!localStorage.index){
  //   localStorage.index=0;
  //   document.getElementById("page-number").innerText = "";
  //   document.getElementById("page-number").innerText = parseInt(localStorage.index)+1;
  //   } else  {
  //     if(localStorage.index===0) {
  //       localStorage.index--;
  //     }
  //     document.getElementById("page-number").innerText = "";
  //     document.getElementById("page-number").innerText = parseInt(localStorage.index)+1;
  //     document.getElementById("breed-image").setAttribute("src",currentBreedPictures[localStorage.index]);
  //   }
}

function showNextImage(){
  if(localStorage.index<currentBreedPictures.length-1) {
      localStorage.index++;
    }
    document.getElementById("page-number").innerText = "";
    document.getElementById("page-number").innerText = parseInt(localStorage.index)+1;
    document.getElementById("breed-image").setAttribute("src",currentBreedPictures[localStorage.index]);
}
