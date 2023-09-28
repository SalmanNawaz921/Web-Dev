//Declaring Variables To Use From HTML
let hrDropdown = document.getElementById("hr-dropdown");
let minDropdown = document.getElementById("min-dropdown");
let secDropdown = document.getElementById("sec-dropdown");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let alarmBtn = document.getElementById("alarmBtn");
let audio = new Audio("./assets/alarm.wav");
let alarmTime;
hrDropdown.innerHTML += createHrOpt();
minDropdown.innerHTML += createMinOpt();
secDropdown.innerHTML += createMinOpt();
let currentTime = 0;

//Functions to automate the creation of option elements
function createHrOpt() {
  let inHTML = "";
  for (let i = 0; i <= 23; i++) {
    if (i < 10) {
      inHTML += `<option value="option0${i}">0${i}</option>`;
    } else {
      inHTML += `<option value="option${i}">${i}</option>`;
    }
  }
  return inHTML;
}
function createMinOpt() {
  let inHTML = "";
  for (let i = 0; i <= 59; i++) {
    if (i < 10) {
      inHTML += `<option value="option0${i}">0${i}</option>`;
    } else {
      inHTML += `<option value="option${i}">${i}</option>`;
    }
  }
  return inHTML;
}

//Function for displaying the current time and storing current time in a variable

function todayTime() {
  setInterval(() => {
    let today = new Date();
    hours.innerText = String(today.getHours()).padStart("2", 0);
    minutes.innerText = String(today.getMinutes()).padStart("2", 0);
    seconds.innerText = String(today.getSeconds()).padStart("2", 0);
    currentTime =
      Number(hours.innerText) * 3600 +
      Number(minutes.innerText) * 60 +
      Number(seconds.innerText);
  }, 1000);
}

todayTime();

//Adding on click event to setAlarm Button

alarmBtn.addEventListener("click", () => {
  let hrOpt = hrDropdown.options[hrDropdown.selectedIndex].value;
  let minOpt = minDropdown.options[minDropdown.selectedIndex].value;
  let secOpt = secDropdown.options[secDropdown.selectedIndex].value;
  hrOpt = hrOpt.substring(6, 8);
  minOpt = minOpt.substring(6, 8);
  secOpt = secOpt.substring(6, 8);
  alarmTime = Number(hrOpt) * 3600 + Number(minOpt) * 60 + Number(secOpt);
  alarmTime = alarmTime - currentTime;
  if (alarmTime > 0) {
    interval = setInterval(updateRemainingTime, 1000); // Start the interval to update remaining time
  }
});

//Function to update remaining time

function updateRemainingTime() {
  if (alarmTime > 0) {
    alarmTime--;
    let remainingHr = Math.floor(alarmTime / 3600);
    let remainingMin = Math.floor((alarmTime % 3600) / 60);
    let remainingSec = alarmTime % 60;

    let alarmMessage = document.querySelector(".alarm-message");
    let showRemainingTime = `Your alarm will ring in ${remainingHr} hours ${remainingMin} minutes ${remainingSec} seconds`;
    alarmMessage.innerText = showRemainingTime;

    if (alarmTime === 0) {
      audio.play();
      clearInterval(interval);
      alarmMessage.innerText = "Wake Up!!!!!!!!!"; // Display "Wake Up!!!!!!!" message
      setTimeout(() => {
        alarmMessage.innerText = ""; // Clear the message after 8 seconds
      }, 8000);
    }
  }
}
