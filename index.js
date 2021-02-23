console.log("JavaScript - Async Programming");

document.addEventListener("click",onClick);

let counter=0;
function onClick(){
    console.log("just a click in the app");
    counter++;
    console.log("conter: ",counter);
}
console.log(counter);

//the function is a anonymous function
setTimeout(function(){
     console.log("this is a code ran after 2 seconds");
}, 2000);
console.log("after first timeout");


// this is similar to :

setTimeout(setTimeOutFunction, 2000);
function setTimeOutFunction(){
    console.log("this is a code ran after 2 seconds setTimeOutFunciton");
}


console.log("First");

setTimeout(function(){
    console.log("Second");
}, 0);

setTimeout(function(){
    console.log("Third");
}, 0);

console.log("Fourth");

setTimeout(function(){
    console.log("Fifth");
}, 1);


setInterval (function(){
    console.log("ping");
},1000);
