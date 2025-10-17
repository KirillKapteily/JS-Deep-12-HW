let timerDisplay = document.querySelector(".stopwatchDisplay");
let timerToDays = document.querySelector(".timerToDays");
let startStopwatchBtn = document.querySelector(".startStopwatchBtn")

const date = new Date("2025-11-12T12:12:12");

let startTimer = () => {

let int = setInterval(() => {
const nowDate = new Date();
const inmls = date.getTime() - nowDate.getTime();
if (inmls <= 0) {
    clearInterval(int);
    
}


const days = Math.floor(inmls / (1000 * 60 * 60 * 24));
  const hours = Math.floor((inmls / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((inmls / (1000 * 60)) % 60);
  const secs = Math.floor((inmls / 1000) % 60);

timerDisplay.textContent = `${days}:${hours}:${mins}:${secs}`
  
}, 1000)


}
startStopwatchBtn.addEventListener("click", startTimer); 