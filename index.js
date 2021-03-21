console.log("To-Do App - Homework Alex Corsau");


const toDoListDiv = document.querySelector(".to-do-list");

fetch('https://simple-json-server-scit.herokuapp.com/todo', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
            },
        body: JSON.stringify({
            id:"acorsau",
            todo:[]
        })
    }).then(getData);

function handleFetchResponse(response) {
    console.log("handle fetch response print to console");
    return response.json();
}
function getData(){
    console.log("Get data call");
    fetch("https://simple-json-server-scit.herokuapp.com/todo/acorsau")
    .then(handleFetchResponse)
    .then(renderToDoList)
    .catch(()=>{});
}

document.getElementById("add-new-task-button").addEventListener("click",addNewTodo);
document.getElementById("delete-user-button").addEventListener("click",deleteUser);

function deleteUser(){
    fetch('https://simple-json-server-scit.herokuapp.com/todo/acorsau', 
    {
        method: "DELETE",
    })
}

function addNewTodo(){
    fetch("https://simple-json-server-scit.herokuapp.com/todo/acorsau")
    .then(handleFetchResponse)
    .then(updateToDoList)
    .then(updateServer)
}

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
    return payload;
}

function updateServer(newPayload) {
    fetch('https://simple-json-server-scit.herokuapp.com/todo/acorsau', {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
            },
        body: JSON.stringify(newPayload)
    }).then(getData);
}

function renderToDoList(response){
    console.log("PAYLOAD from render todolist:",response.todo);
    toDoListDiv.innerHTML="";
    for (element of response.todo) {
        // console.log(element);
        renderTask(element);
    } 
}


function renderTask(element){

    const toDoDiv = document.createElement("div");
    toDoDiv.classList.add("to-do-division");

    const toDoCheckBox = document.createElement("input");
    toDoCheckBox.setAttribute("type","checkbox");
    toDoCheckBox.classList.add("to-do-checkbox");
    
    toDoCheckBox.addEventListener("change",changeStatus);

    const toDoName = document.createElement("h3");
    toDoName.classList.add("to-do-name");

    const toDoDelete = document.createElement("button");
    toDoDelete.classList.add("delete-button");
    const toDoDeleteImg = document.createElement("img");
    toDoDeleteImg.setAttribute("src","delete.png");
    toDoDelete.appendChild(toDoDeleteImg);

    toDoName.innerText = element.item;
    toDoCheckBox.checked = element.checked;

    toDoDiv.appendChild(toDoCheckBox);
    toDoDiv.appendChild(toDoName);
    toDoDiv.appendChild(toDoDelete);

    toDoListDiv.appendChild(toDoDiv);

}


function checkTasks(){
let statusList = document.getElementsByClassName("to-do-checkbox");

// document.getElementsByClassName("to-do-checkbox").addEventListener("change",changeStatus);
console.log(statusList);

}
checkTasks();

function changeStatus(){
    console.log("click on checkbox");
    console.log(this.parentNode);
    console.log(this.checked);
    
}