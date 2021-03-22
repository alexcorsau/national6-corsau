console.log("To-Do App - Homework Alex Corsau");

//getting the reference for the division in witch we will render all the tasks
const toDoListDiv = document.querySelector(".to-do-list"); 

//POST to the server the JSON.stringify object with an id for the user and an empty todo list
//will return a 500 ERROR MESSAGE if there is already a user with the same id -- we can and will ignore the error as it does not affect the running of the application
fetch('https://simple-json-server-scit.herokuapp.com/todo', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
            },
        body: JSON.stringify({
            id:"acorsau",
            todo:[]
        })
    }).then(getData);//GET request to the server and the rendering the response in the BODY of the HTML

// function for returning the response as a JS object
function handleFetchResponse(response) { 
    // console.log("handle fetch response print to console"); //used for checking the app during development
    return response.json();
}
// function for GETting the data from the server and rendering the result
function getData(){
    //console.log("Get data call"); //used for checking the app during development
    fetch("https://simple-json-server-scit.herokuapp.com/todo/acorsau")
    .then(handleFetchResponse)
    .then(renderToDoList)
    .catch(()=>{});
}

//adding EVENT LISTENER on the "+" button for adding a new ToDo
document.getElementById("add-new-task-button").addEventListener("click",addNewTodo);

//function for adding a new ToDo in the list: GETting the ToDo list from the server and updating it
function addNewTodo(){
    fetch("https://simple-json-server-scit.herokuapp.com/todo/acorsau")
    .then(handleFetchResponse)
    .then(updateToDoList)
    .then(updateServer)
}

//function for updating the response.todo list from the server with the new ToDo, using .push() method on the ToDo array
function updateToDoList(response){
    let payload = response;
    console.log("payload object before push in array todo",payload);
    const input = document.getElementById("add-task-input");
    if(input.value){
        let newToDo = {
            checked:false,
            item: input.value
            }
        payload.todo.push(newToDo);
    } else {
        window.alert("Please write a task name");
        }
    console.log("payload object after push in array todo",payload);
    return payload; //returning the modified payload
}

//function for updating the server data with a PUT method on a FETCH request, then rendering the new "up-to-date" data from the server using the getData() function
function updateServer(newPayload) {
    fetch('https://simple-json-server-scit.herokuapp.com/todo/acorsau', {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
            },
        body: JSON.stringify(newPayload)
    }).then(getData);
}

//function for iterating on the ToDo array from the response from the server passing each ToDo from that array to "renderTask" function with takes 2 arguments: ToDo and an index created dynamically necessary for further targeting and identifying
function renderToDoList(response){
    console.log("PAYLOAD from render todolist:",response.todo);
    toDoListDiv.innerHTML="";
    for (element of response.todo) {
        // console.log(element);
        renderTask(element,response.todo.indexOf(element));
    } 
}

//function to create the structure for every ToDo: checkbox, name and delete button
function renderTask(element,index){

    const toDoDiv = document.createElement("div");
    toDoDiv.classList.add("to-do-division");
    toDoDiv.setAttribute("id",index);

    const toDoCheckBox = document.createElement("input");
    toDoCheckBox.setAttribute("type","checkbox");

    console.log(toDoCheckBox, toDoCheckBox.checked);
    toDoCheckBox.classList.add("to-do-checkbox");
    
    //creating on each checkbox an EVENT LISTENER when changing the status of the checkbox and calling changeStatus() function
    toDoCheckBox.addEventListener("change",changeStatus);

    const toDoName = document.createElement("h3");
    toDoName.classList.add("to-do-name");

    const toDoDelete = document.createElement("button");
    toDoDelete.classList.add("delete-button");
    toDoDelete.addEventListener("click",deleteTask); ////creating on each delete icon an EVENT LISTENER when pressing the button to call the deleteTask() function
    const toDoDeleteImg = document.createElement("img");
    toDoDeleteImg.setAttribute("src","delete.png");
    toDoDelete.appendChild(toDoDeleteImg);

    //adding content to the HTML elements created (including the status of the checkbox)
    toDoName.innerText = element.item;
    toDoCheckBox.checked = element.checked;
    toDoCheckBox.name = element.item;

    //appending al the elements to each other
    toDoDiv.appendChild(toDoCheckBox);
    toDoDiv.appendChild(toDoName);
    toDoDiv.appendChild(toDoDelete);
    //appending al the elements to division in the BODY of the HTML
    toDoListDiv.appendChild(toDoDiv);
}

//function for changing the status of the checkbox by GETting the data from the server, updating the checkbox status and then Updating the data on the server with a PUT method
function changeStatus(){
    fetch("https://simple-json-server-scit.herokuapp.com/todo/acorsau")
    .then(handleFetchResponse)
    .then(updateTask)
}

//function to update the data we GET from the server (response) and the updating the server by calling the updateServer() function with the modified payload as argument
function updateTask(response){
    let payload = response;
    //console.log(payload); //only for testing
    let box = document.querySelectorAll(":checked");
    //console.log("the boxes with checked value true",box); //only for testing
    for (const element of payload.todo) {
        element.checked = false;
    }
    for (const element of box) {
        console.log(element.parentNode.id);
        payload.todo[element.parentNode.id].checked = true;
    }
    //console.log(payload); //only for testing
    updateServer(payload);
}

//function to delete a task by GETting the data from the server and calling the removeTaskFromResponse() function
function deleteTask(){
    this.parentNode.remove(); //removing the targeted division from the HTML
    fetch("https://simple-json-server-scit.herokuapp.com/todo/acorsau")
    .then(handleFetchResponse)
    .then(removeTaskFromResponse)
}

//function to remove the task we want to delete from response we get from the server and updating the data on the server by calling the updateServer() function with the modified payload as argument
function removeTaskFromResponse(response){
    let payload = response;
    let newPayloadArray =[];
    // console.log(payload); //only for testing
    // console.log(payload.todo);//only for testing
    let remainingTasksList = document.querySelectorAll(".to-do-division");
    //console.log(remainingTasksList); //only for testing
    for (const element of remainingTasksList) {
        // console.log(element.id); //only for testing
        // console.log(payload.todo[element.id]);//only for testing
        newPayloadArray.push(payload.todo[element.id]);
        }
    // console.log(payload);//only for testing
    // console.log(newPayloadArray);//only for testing
    payload.todo = newPayloadArray;
    // console.log(payload);//only for testing
    updateServer(payload);
}