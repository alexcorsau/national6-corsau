import { getToDoData, updateUserData, createUserData } from "./utils/api";

console.log("To Do App");

const inputTask = document.getElementById("task-name");

let todo = [];
let userExist = false;

// getToDoData((json) => {
//   console.log(json);

//   if (json.id === "acorsau") {
//     todo = json.todo;
//     userExist = true;
//   }
// });

document.getElementById("add-task-button").addEventListener("click", () => {
    console.log("click add");
    // if (userExist) {
    //     console.log("add task to todo list");
    //     const itemValue = inputTask.value;
    //     if (itemValue) {
    //     console.log(todo);
    //     todo.push({
    //         checked: false,
    //         item: itemValue,
    //         });
    //     updateUserData(todo, () => {});
    //         }
    // } else {
    //     const itemValue = inputTask.value;
    //     if (itemValue) {
    //         createUserData(itemValue, () => {});
    //         }
    //     }
});
