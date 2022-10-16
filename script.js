const timeElement = document.querySelector('.watch .time');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

let seconds = 0;
let interval = null;

//event listeners

//timer function
function timer () {
  seconds ++;

  //format our time
  let secs = seconds % 60;
  let min = Math.floor(seconds / 60);
}
