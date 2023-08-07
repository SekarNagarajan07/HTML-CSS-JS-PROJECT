let hr = (min = sec = ms = "0" + 0);
startTimer;

const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);

//Functions

startTimer = setInterval(() => {
  ms++;
  ms = ms < 10 ? "0" + ms : ms;

  if (ms == 100) {
    sec++;
    sec = min < 10 ? "0" + sec : sec;
  }
});
