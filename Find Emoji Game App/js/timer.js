
let timerInterval;
let startTime;
let elapsedTime = 0;




function startTimer() {
  document.getElementById("startTimerBtn").style.visibility = "hidden";
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(updateTimer, 50);
}

function stopTimer() {
  clearInterval(timerInterval);
  elapsedTime = Date.now() - startTime;
}

function updateTimer() {
  const elapsed = Date.now() - startTime;
  const minutes = Math.floor(elapsed / (1000 * 60));
  const seconds = Math.floor((elapsed / 1000) % 60);
  const milliseconds = Math.floor((elapsed % 1000) / 10);

  document.getElementById("minutes").innerText = formatTime(minutes);
  document.getElementById("seconds").innerText = formatTime(seconds);
  document.getElementById("milliseconds").innerText = formatTime(milliseconds);
}


function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

function getTime() {
  var min= document.getElementById("minutes").innerText;
  var sec = document.getElementById("seconds").innerText;
  var msec = document.getElementById("milliseconds").innerText;
  const totalTime = document.getElementById("total-time")
  if(min == "00"){
    totalTime.innerText = parseInt(sec) + "." + msec + " seconds";
  }
  else if(+min > 1){
    totalTime.innerText = parseInt(min) + " minutes and " + sec + "." + msec + " seconds";
  }
  else{
    totalTime.innerText = parseInt(min) + " minute and " + sec + "." + msec + " seconds";
  }


}