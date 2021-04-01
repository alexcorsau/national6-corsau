console.log("Course 21 - Cookies and Local Storage");

console.log(document.cookie);

//document.cookie = "name=alex";
// document.cookie = "name=alex";

// document.cookie2 = "test2=def";
// console.log(document.cookie2);
//document.cookie="password=1234; expires=Thu, 31 Oct 2021 07:28:00 GMT";

document.getElementById("logout").addEventListener("click", ()=> {
    document.cookie = "password=12; expires=Thu, 31 Oct 1900 07:28:00 GMT";
    
    window.location="/";
});


if(!document.cookie) {
    window.location = "/login.html"
}

if(document.cookie){
    const cookiesElements = document.cookie.split("; ");
    console.log(cookiesElements);

    const cookieObject = {};

    for (const element of cookiesElements) {
        const [key,value] = element.split("=");
        console.log(key,value);
        cookieObject[key]=value;
        console.log(cookieObject);


    }

    if(!cookieObject.name || !cookieObject.password){
        window.location = "/login.html";
    }
}