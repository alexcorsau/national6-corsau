console.log("JavaScript - Dogs App");

if (!localStorage.getItem("name") || !localStorage.getItem("password")) {
  window.location = "/login.html";
}

document.getElementById("logout").addEventListener("click", () => {
  localStorage.removeItem("name");
  localStorage.removeItem("password");
  window.location = "/";
});


fetch("https://dog.ceo/api/breeds/list/all")
.then(handleFetchResponse)
.then(renderBreeds)


fetch("https://dog.ceo/api/breed/hound/images")
.then(handleFetchResponse)
.then(showImage)

function handleFetchResponse(response) {
  console.log("response from server: ", response);
  return response.json();
}

function renderBreeds(breedList) {
  console.log("breedList: ",breedList);
  console.log("typeOf breedList : ",typeof(breedList));

  console.log("breedList.message : ",breedList.message);
  console.log("typeOf breedList.message : ",typeof(breedList.message));

  console.log("Object.keys() breedList.message: ",Object.keys(breedList.message));
  console.log("typeOf Object.keys(breedList.message) : ",typeof(Object.keys(breedList.message)));

  console.log("Object.values() breedList.message: ",Object.values(breedList.message));
  console.log("typeOf Object.values(breedList.message) : ",typeof(Object.values(breedList.message)));


  console.log("Array.from() breedList.message: ",Array.from(breedList.message));
  console.log("typeOf Array.from(breedList.message) : ",typeof(Array.from(breedList.message)));


   for (const breed of Object.keys(breedList.message)) {
    console.log(breed);
    renderBreed(breed);
  }
}

function renderBreed(breed){
  const breedDiv = document.createElement("div");
  const breedName = document.createElement("p");
  breedName.innerText = breed;
  breedName.setAttribute("id",breed);
  breedName.addEventListener("click",selectBreed);

  breedDiv.appendChild(breedName);

  document.getElementById("breeds").appendChild(breedDiv);
}

function showImage(imageResponseMessage) {
  console.log("imageResponseMessage: ",imageResponseMessage.message);
  console.log("typeOf imageResponseMessage : ",typeof(imageResponseMessage.message));

  console.log("imageResponseMessage[0]: ",imageResponseMessage.message[267]);
  console.log("typeOf imageResponseMessage[0] : ",typeof(imageResponseMessage.message[267]));

  document.getElementById("breed-image").setAttribute("src",imageResponseMessage.message[267]);
}


function selectBreed(){
  localStorage.setItem("breed",this.id);
  // localStorage.setItem("index",);
  this.classList.add("breed--selected");
}
