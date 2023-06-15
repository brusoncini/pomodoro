const workMinutes = 25;
const shortBreakMinutes = 5;
const longBreakMinutes = 15;

let interval;
let currentMinutes;
let currentSeconds;
let currentMode;

// Formata o timer em 2 dígitos
function formatTime(time) {
  return time < 10 ? "0" + time : time;
}

// Mostra o timer na tela
function showTimer() {
  document.getElementById("timer").innerHTML =
    formatTime(currentMinutes) + ":" + formatTime(currentSeconds);
}

// Começa o timer
function startTimer(minutes) {
  currentMinutes = minutes;
  currentSeconds = 0;

  // Término do timer
  interval = setInterval(function () {
    if (currentMinutes === 0 && currentSeconds === 0) {
      clearInterval(interval);
    }

    // Atualiza os segundos
    if (currentSeconds === 0) {
      currentMinutes--;
      currentSeconds = 59;
    } else {
      currentSeconds--;
    }

    showTimer();
  }, 1000);
}

// Modos do timer
function setMode(mode, minutes) {
  currentMode = mode;
  currentMinutes = minutes;
  currentSeconds = 0; 
  showTimer();
}

// Botão start
document.getElementById("start").addEventListener("click", function () {
  if (currentMode) {
    clearInterval(interval);
    startTimer(currentMinutes);
  }
});

// Botão pause
document.getElementById("pause").addEventListener("click", function () {
  clearInterval(interval);
});


// Botão reset
document.getElementById("reset").addEventListener("click", function () {
  clearInterval(interval);
  if (currentMode === "pomodoro") {
    setMode("pomodoro", workMinutes);
  } else if (currentMode === "short-break") {
    setMode("short-break", shortBreakMinutes);
  } else if (currentMode === "long-break") {
    setMode("long-break", longBreakMinutes);
  }
});

// Modo Pomodoro
document.getElementById("pomodoro").addEventListener("click", function () {
  clearInterval(interval);
  setMode("pomodoro", workMinutes);
});

// Modo short break
document.getElementById("short-break").addEventListener("click", function () {
  clearInterval(interval);
  setMode("short-break", shortBreakMinutes);
});

// Modo long-break
document.getElementById("long-break").addEventListener("click", function () {
  clearInterval(interval);
  setMode("long-break", longBreakMinutes);
});

// Exibe o valor inicial do timer
setMode("pomodoro", workMinutes);