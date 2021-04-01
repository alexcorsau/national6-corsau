const inputName = document.getElementById("name");
const inputPassword = document.getElementById("password");

const password_check = "123";

document.getElementById("login").addEventListener("click",()=>{
     const name = inputName.value;
     const password = inputPassword.value;

     if(name && password===password_check) {
        localStorage.setItem("name",name);
        localStorage.setItem("password",password);
         window.location = "/";
     }
});