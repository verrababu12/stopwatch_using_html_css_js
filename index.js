let timer = null;
let seconds = 0;
let lapCount = 0;

function updateDisplay() {
  // Convert total seconds into hours, minutes, and seconds
  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor((seconds % 3600) / 60);
  let sec = seconds % 60;
  // Convert numbers to strings and add leading zeros if needed
  let hoursStr = hours < 10 ? "0" + hours : "" + hours;
  let minutesStr = minutes < 10 ? "0" + minutes : "" + minutes;
  let secondsStr = sec < 10 ? "0" + sec : "" + sec;
  // Display the formatted time
  document.getElementById("display").innerText =
    hoursStr + ":" + minutesStr + ":" + secondsStr;
}

function start() {
  if (!timer) {
    timer = setInterval(() => {
      seconds++;
      updateDisplay();
    }, 100);

    // Show/Hide Buttons
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("resumeBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
  }
}

function stop() {
  clearInterval(timer);
  timer = null;

  // Show/Hide Buttons
  document.getElementById("resumeBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

function resume() {
  if (!timer) {
    timer = setInterval(() => {
      seconds++;
      updateDisplay();
    }, 100);

    // Show/Hide Buttons
    document.getElementById("resumeBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
  }
}

function reset() {
  clearInterval(timer);
  timer = null;
  seconds = 0;
  lapCount = 0;
  updateDisplay();

  document.getElementById("laps").innerHTML = "";

  // Reset buttons
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("resumeBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
}

function recordLap() {
  if (seconds === 0) return;

  const laps = document.getElementById("laps");
  const li = document.createElement("li");
  //   Convert total seconds into hours, minutes, and seconds
  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor((seconds % 3600) / 60);
  let sec = seconds % 60;

  // Convert numbers to strings and add leading zeros if needed
  let hoursStr = hours < 10 ? "0" + hours : "" + hours;
  let minutesStr = minutes < 10 ? "0" + minutes : "" + minutes;
  let secondsStr = sec < 10 ? "0" + sec : "" + sec;
  li.textContent = `Lap ${++lapCount}: ${hoursStr}:${minutesStr}:${secondsStr}`;
  laps.appendChild(li);
}

updateDisplay();

// let timer;
// let seconds = 0;

// function updateDisplay() {
//   // Convert total seconds into hours, minutes, and seconds
//   let hours = Math.floor(seconds / 3600);
//   let minutes = Math.floor((seconds % 3600) / 60);
//   let sec = seconds % 60;

//   // Convert numbers to strings and add leading zeros if needed
//   let hoursStr = hours < 10 ? "0" + hours : "" + hours;
//   let minutesStr = minutes < 10 ? "0" + minutes : "" + minutes;
//   let secondsStr = sec < 10 ? "0" + sec : "" + sec;

//   // Display the formatted time
//   document.getElementById("display").innerText =
//     hoursStr + ":" + minutesStr + ":" + secondsStr;
// }

// function start() {
//   if (!timer) {
//     timer = setInterval(() => {
//       seconds++;
//       updateDisplay();
//     }, 1000); // changed to 1000ms (1 second) for real stopwatch behavior
//   }
// }

// function stop() {
//   clearInterval(timer);
//   timer = null;
// }

// function reset() {
//   stop();
//   seconds = 0;
//   updateDisplay();
// }
