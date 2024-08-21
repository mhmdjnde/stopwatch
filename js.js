let timer = document.getElementById("timer");
let ms = 0;
let s = 0;
let m = 0;
let h = 0;
let inn = null;
function run() {
  timer.textContent = `${h}:`.padStart(3, 0);
  timer.textContent += `${m}:`.padStart(3, 0);
  timer.textContent += `${s}:`.padStart(3, 0);
  timer.textContent += `${ms}`.padStart(2, 0);
}

function start() {
  if (inn) return;

  inn = setInterval(() => {
    ms++;
    if (ms == 99) {
      ms = 0;
      s++;
    }
    if (s == 60) {
      s = 0;
      m++;
    }
    if (m == 60) {
      h++;
      m = 0;
    }
    run();
  }, 10);
}

function stop() {
  clearInterval(inn);
  inn = null;
}

function reset() {
  stop();
  timer.textContent = "00:00:00:00";
  ms = 0;
  s = 0;
  m = 0;
  h = 0;
}
