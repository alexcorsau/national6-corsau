//adding EVENT LISTENER on the "DELETE USER" button for removing the USER from the server
//removes the object from the server containing 2 key:value pairs : id:"user" and todo:["array of ToDo objects"]
//only used for developing purposes to get to test more intensive the application
document.getElementById("delete-user-button").addEventListener("click",deleteUser);

//function to remove the user from the server
function deleteUser(){
    fetch('https://simple-json-server-scit.herokuapp.com/todo/acorsau', 
    {
        method: "DELETE",
    })
}