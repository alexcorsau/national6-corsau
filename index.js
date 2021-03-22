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
        renderTask(element,response.todo.indexOf(element));
    } 
}


function renderTask(element,index){

    const toDoDiv = document.createElement("div");
    toDoDiv.classList.add("to-do-division");
    toDoDiv.setAttribute("id",index);

    const toDoCheckBox = document.createElement("input");
    toDoCheckBox.setAttribute("type","checkbox");

    console.log(toDoCheckBox, toDoCheckBox.checked);
    toDoCheckBox.classList.add("to-do-checkbox");
    
    toDoCheckBox.addEventListener("change",changeStatus);

    const toDoName = document.createElement("h3");
    toDoName.classList.add("to-do-name");

    const toDoDelete = document.createElement("button");
    toDoDelete.classList.add("delete-button");
    toDoDelete.addEventListener("click",deleteTask);
    const toDoDeleteImg = document.createElement("img");
    toDoDeleteImg.setAttribute("src","delete.png");
    toDoDelete.appendChild(toDoDeleteImg);

    toDoName.innerText = element.item;
    toDoCheckBox.checked = element.checked;
    toDoCheckBox.name = element.item;

    toDoDiv.appendChild(toDoCheckBox);
    toDoDiv.appendChild(toDoName);
    toDoDiv.appendChild(toDoDelete);

    toDoListDiv.appendChild(toDoDiv);

}


function changeStatus(){
    fetch("https://simple-json-server-scit.herokuapp.com/todo/acorsau")
    .then(handleFetchResponse)
    .then(updateTask)
}

function updateTask(response){
    let payload = response;
    console.log(payload);
    let box = document.querySelectorAll(":checked");
    console.log("the boxes with checked value true",box);
    for (const element of payload.todo) {
        element.checked = false;
    }
    for (const element of box) {
        console.log(element.parentNode.id);
        payload.todo[element.parentNode.id].checked = true;
    }
    console.log(payload);
    fetch('https://simple-json-server-scit.herokuapp.com/todo/acorsau', {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
            },
        body: JSON.stringify(payload)
    }).then(getData);
}

function deleteTask(){
    this.parentNode.remove();
    fetch("https://simple-json-server-scit.herokuapp.com/todo/acorsau")
    .then(handleFetchResponse)
    .then(removeTaskFromResponse)
}

function removeTaskFromServer(taskId){
    fetch("https://simple-json-server-scit.herokuapp.com/todo/acorsau")
    .then(handleFetchResponse)
    .then(removeTaskFromResponse)
}

function removeTaskFromResponse(response){
    let payload = response;
    let newPayloadArray =[];
    console.log(payload);
    console.log(payload.todo);
    let remainingTasksList = document.querySelectorAll(".to-do-division");
    console.log(remainingTasksList);
    let indexArray = Array.of()
    // for (const element of payload.todo) {
    //     if(remainingTasksList.includes)
    // }
    for (const element of remainingTasksList) {
        console.log(element.id);
        console.log(payload.todo[element.id]);
        newPayloadArray.push(payload.todo[element.id]);
    }
    //     if(payload.todo[element.id]) {
    //         payload.todo.(element);
    //         console.log(element.id);
    //     }
    // }
    console.log(payload);
    console.log(newPayloadArray);
    payload.todo = newPayloadArray;
    console.log(payload);
    updateServer(payload);
    }



