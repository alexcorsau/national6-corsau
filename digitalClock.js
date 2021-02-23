console.log("JavaScript - Digital Clock");

let seconds = 0;
const secondsParagraphs = document.querySelectorAll(".seconds p");
console.log(secondsParagraphs);
const minutesParagraphs = document.querySelectorAll(".minutes p");
console.log(minutesParagraphs);
const hoursParagraphs = document.querySelectorAll(".hours p");
let minutes=0;
let hours =0;
setInterval (function(){
    renderDigits(seconds,secondsParagraphs);
    if(seconds===60){
        seconds=0;
        renderDigits(seconds,secondsParagraphs);
        if(minutes===59){
            minutes=0;
            renderDigits(minutes,minutesParagraphs);
            if(hours===23){
                hours=0;
                renderDigits(hours,hoursParagraphs);
            } else {
                hours++;
                renderDigits(hours,hoursParagraphs);
            }
        } else {
            minutes++;
            renderDigits(minutes,minutesParagraphs);
            }
    }
    seconds++;
},1000);

function renderDigits(nr,pList){
    const stringDigits = nr + "";
    const digitList = stringDigits.split("");
    if(digitList.length===2){
        pList[0].innerText = digitList[0];
        pList[1].innerText = digitList[1];
        } else {
            pList[0].innerText = 0;
            pList[1].innerText = digitList[0];
            }
    }