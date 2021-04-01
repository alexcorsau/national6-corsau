const inputName = document.getElementById("name");
const inputPassword = document.getElementById("password");

const password_check = "123";

document.getElementById("login").addEventListener("click",()=>{
     const name = inputName.value;
     const password = inputPassword.value;

     if(name && password===password_check) {
         document.cookie = `name=${name}`;
         document.cookie = `password=${password}`;
         window.location = "/";
     }
});