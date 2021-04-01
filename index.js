console.log("Course 20 - BOM: Browser object model");

console.log(window.screen);

document.getElementById("open").addEventListener("click", ()=> {
    window.open("https://google.com")
});

document.getElementById("close").addEventListener("click", ()=> {
    window.close()
})

setTimeout(()=> {
    console.log("test");
    window.blur();
},3000);

window.addEventListener("load",()=> {console.log("all is loaded")});

window.addEventListener("resize",(event)=> {console.log(event)});