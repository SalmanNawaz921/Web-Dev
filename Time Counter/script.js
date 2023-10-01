let date = document.querySelector("#date");
let time = document.querySelector("#time");
const dayCount = document.getElementById("count-days");
const hrCount = document.getElementById("count-hours");
const minCount = document.getElementById("count-minutes");
const secCount = document.getElementById("count-seconds");
const last = Array.from(document.querySelectorAll(".min-container")).pop();
let interval;

let calculateBtn = document.getElementById("calculateBtn");
calculateBtn.addEventListener("click", () => {
  const counterTime = new Date(date.value + " " + time.value);
  interval = setInterval(() => calcTime(counterTime), 1000);
});

function calcTime(counterTime) {
  const currentTime = new Date();

  if (counterTime > currentTime) {
    const timeLeft = (counterTime - currentTime) / 1000;
    dayCount.innerText = Math.floor(timeLeft / (3600 * 24));
    hrCount.innerText = Math.floor((timeLeft / 3600) % 24);
    minCount.innerText = Math.floor((timeLeft / 60) % 60);
    secCount.innerText = Math.floor(timeLeft % 60);
    last.style.display = "flex";
  }
  //   calcTime(counterTime);
}

const stopBtn = document.getElementById("stopBtn");
stopBtn.addEventListener("click", () => {
  clearInterval(interval);
});

const resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener("click", () => {
  dayCount.innerText = 0;
  hrCount.innerText = 0;
  minCount.innerText = 0;
  secCount.innerText = 0;
  last.style.display = "none";
});
