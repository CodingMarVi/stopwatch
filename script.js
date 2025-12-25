const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

let startTime = 0;
let elapsed = 0; // ms
let timerId = null;

function formatTime(ms) {
  const total = Math.floor(ms);
  const centiseconds = Math.floor((total % 1000) / 10);
  const seconds = Math.floor(total / 1000) % 60;
  const minutes = Math.floor(total / 60000) % 60;
  const hours = Math.floor(total / 3600000);
  return [
    String(hours).padStart(2, '0'),
    String(minutes).padStart(2, '0'),
    String(seconds).padStart(2, '0')
  ].join(':') + '.' + String(centiseconds).padStart(2, '0');
}

function updateDisplay() {
  display.textContent = formatTime(elapsed);
}

function start() {
  if (timerId) return;
  startTime = performance.now() - elapsed;
  timerId = setInterval(() => {
    elapsed = performance.now() - startTime;
    updateDisplay();
  }, 10);
  startBtn.disabled = true;
  stopBtn.disabled = false;
  resetBtn.disabled = false;
}

function stop() {
  if (!timerId) return;
  clearInterval(timerId);
  timerId = null;
  elapsed = performance.now() - startTime;
  updateDisplay();
  startBtn.disabled = false;
  stopBtn.disabled = true;
}

function reset() {
  stop();
  elapsed = 0;
  updateDisplay();
  resetBtn.disabled = true;
}

startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);
resetBtn.addEventListener('click', reset);

window.addEventListener('keydown', (e) => {
  if (e.code === 'Space') {
    e.preventDefault();
    if (timerId) stop(); else start();
  } else if (e.key.toLowerCase() === 'r') {
    reset();
  }
});

updateDisplay();
