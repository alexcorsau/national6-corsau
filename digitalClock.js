console.log("JavaScript - Digital Clock");
// Using the new knowledge leaned in index.js file we can implement a digital clock
// The digital clock will use existing html objects in index.html file
// Using "setInterval" we will calculate the value for seconds, minutes and hours an update the page every second to reflect the time spend on the page

let seconds = 0;
const secondsParagraphs = document.querySelectorAll(".seconds p");

let minutes = 0;
const minutesParagraphs = document.querySelectorAll(".minutes p");

let hours = 0;
const hoursParagraphs = document.querySelectorAll(".hours p");

let savedTimersDivision = document.querySelector(".Saved-timers");

let statusRunning = false;

function incrementTime() {
  renderDigits(seconds, secondsParagraphs);
  renderDigits(minutes, minutesParagraphs);
  renderDigits(hours, hoursParagraphs);

  seconds++;

  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }

  if (minutes === 60) {
    minutes = 0;
    hours++;
  }

  if (hours === 24) {
    hours = 0;
  }
}

function renderDigits(nr, pList) {
  const stringDigits = nr + "";
  const digitList = stringDigits.split("");

  if (digitList.length === 2) {
    pList[0].innerText = digitList[0];
    pList[1].innerText = digitList[1];
  } else {
    pList[0].innerText = 0;
    pList[1].innerText = digitList[0];
  }
}


let timer;
let counterOfSavedTimers=0;

document.getElementById("start-button").addEventListener("click",startTimer);
document.getElementById("stop-button").addEventListener("click",stopTimer);
document.getElementById("reset-button").addEventListener("click",resetTimer);
document.getElementById("save-timer").addEventListener("click",saveTimer);

function startTimer() {
  if(statusRunning===false) {
    timer = setInterval(incrementTime,1000);
    statusRunning=true;
  }
}

function stopTimer() {
  if(statusRunning===true) {
    clearInterval(timer);
    statusRunning=false;
  }
}

function resetTimer() {
  stopTimer();
  seconds=0;
  minutes=0;
  hours=0;
  renderDigits(seconds, secondsParagraphs);
  renderDigits(minutes, minutesParagraphs);
  renderDigits(hours, hoursParagraphs);
  counterOfSavedTimers=0;
  clearSavedTimers();
}

function saveTimer() {
  counterOfSavedTimers++;
  const newTimerSaved = document.createElement("p");
  newTimerSaved.innerText = `Timer ${counterOfSavedTimers}: ${hoursParagraphs[0].innerText}${hoursParagraphs[1].innerText}:${minutesParagraphs[0].innerText}${minutesParagraphs[1].innerText}:${secondsParagraphs[0].innerText}${secondsParagraphs[1].innerText}`;
  savedTimersDivision.appendChild(newTimerSaved);
}

function clearSavedTimers() {
  savedTimersDivision.innerHTML="";
}