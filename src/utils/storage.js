export function logOut(){
    localStorage.removeItem("name");
    localStorage.removeItem("password");
    localStorage.removeItem("breed");
    localStorage.removeItem("index");
    redirectHome();
}

function redirectHome(){
    window.location = "/";
}