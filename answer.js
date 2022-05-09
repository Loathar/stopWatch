const appendTens = document.querySelector(".tens");
const appendSeconds = document.querySelector(".seconds");
let tens = 00;
let seconds = 00;
const startBtn = document.querySelector(".startBtn");
const stopBtn = document.querySelector(".stopBtn");
const clearBtn = document.querySelector(".clearBtn");
const date = document.querySelector(".date");

let now = new Date();
let Interval;
date.innerHTML = now.toLocaleDateString();

function startTimer() {
  tens++;
  if (tens <= 9) {
    appendTens.innerHTML = "0" + tens;
  }
  if (tens > 9) {
    appendTens.innerHTML = tens;
  }
  if (tens > 99) {
    seconds++;
    appendSeconds.innerHTML = "0" + seconds;
    tens = 0;
    appendTens.innerHTML = "0" + tens;
    console.log(seconds);
  }
  if (seconds > 9) {
    appendSeconds.innerHTML = seconds;
  }
}

startBtn.onclick = function () {
  clearInterval(Interval);

  Interval = setInterval(startTimer, 10);
};

stopBtn.onclick = function () {
  clearInterval(Interval);
};

clearBtn.onclick = function () {
  clearInterval(Interval);
  tens = "00";
  seconds = "00";
  appendTens.innerHTML = tens;
  appendSeconds.innerHTML = seconds;
};
