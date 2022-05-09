"use strict";

// VARIABLES
let tens = "00";
let seconds = "00";
let appendSeconds = document.querySelector(".seconds");
let appendTens = document.querySelector(".tens");
let appendDate = document.querySelector(".date");
const startBtn = document.querySelector(".startBtn");
const stopBtn = document.querySelector(".stopBtn");
const clearBtn = document.querySelector(".clearBtn");
const now = new Date();
let Interval;
// Need variables for tens and seconds. Variables for appending tens and seconds, and variables for appending tens and seconds to html elements
// Need variables for buttons, date and Interval.

// Declare variables for date and interval

// Fixing the date
appendDate.innerHTML = now.toLocaleDateString();
// toLocaleDateString() makes date more readable

//////////// LOGIC FOR MAKEING THE STOPWATCH RUN

// Starts the counter
// Funtion startTimer()
// tens + 1
// check if tens is equal or smaller then 9, then add 0 and tens to html element.
// when the milisecond counter is less then 9. Add a 0 to the string that is rendered to the screen.
function startTimer() {
  tens++;
  if (tens <= 9) {
    appendTens.innerHTML = "0" + tens;
  }
  //Check if tens is more than 9, then add tens to html element.
  // When the milliseconds is more than 9 no 0 is needed. appendTens = tens
  if (tens > 9) {
    appendTens.innerHTML = tens;
  }
  if (tens > 99) {
    seconds++;
    appendSeconds.innerHTML = "0" + seconds;
    tens = 0;
    appendTens.innerHTML = "0" + tens;
  }
  if (seconds > 9) {
    appendSeconds.innerHTML = seconds;
  }
}

// if tens is more then 99, increase seconds with one. then set appendseconds to 0 and secconds. set tens to 0 then set appendTens html to 0 + tens
// If seconds gets larger then 9. set appendSeconds html to seconds. No need for 0

////////// BUTTONS ////////////

//startBtn
startBtn.onclick = function () {
  clearInterval(Interval);
  console.log("Check");
  Interval = setInterval(startTimer, 10);
};
// startBtn when clicked clears interval(interval) and sets Interval to setInterval with startTimer and, 10 milliseconds

// Starts the interval and the startTimer funtion is executed.

// stopBtn
// Make the counter stop. clearInterval(Interval) resets the interval variable
stopBtn.onclick = function () {
  clearInterval(Interval);
};

// clearBtn
// clearInterval. Then set variabels to string 00. Then set appendTens/Seconds to variables tens and seconds
clearBtn.onclick = function () {
  console.log("hi");
  clearInterval(Interval);
  tens = "00";
  seconds = "00";
  appendTens.innerHTML = tens;
  appendSeconds.innerHTML = seconds;
};
/////////////////
