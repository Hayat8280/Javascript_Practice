let sec = 0;
let interval = null;
let isTimer = false, isRunning = false;

const UpdateDisplay = () => {
    let hours = Math.floor(sec / 3600);
    let mins = Math.floor((sec % 3600) / 60);
    let secs = sec % 60;
    hours = hours < 10 ? '0' + hours : hours;
    mins = mins < 10 ? '0' + mins : mins;
    secs = secs < 10 ? '0' + secs : secs;
    console.log(hours, mins, secs);
    document.querySelector('.display-time').textContent =
    hours + ":" + mins + ":" + secs;
}

function SetTime() {
    let option = document.getElementById('timeUnit').selectedIndex;
    sec = document.getElementById('inputTime').value;
    if(option === 1) {
        sec *= 60;
    } else if(option === 2) {
        sec *= 60 * 60;
    }
    UpdateDisplay();
}

function StartTimer() {
    if(isRunning) {
        return;
    }
    isRunning = true;
    interval = setInterval(() => {
            if(sec > 0) {
                sec--;
                UpdateDisplay();
            } else {
                isRunning = false;
                clearInterval(interval);
                interval = null;
            }
    }, 1000);
}

function PauseTimer() {
    isRunning = false;
    clearInterval(interval);
    interval = null;
    UpdateDisplay();
}

function ResetTimer() {
    isRunning = false;
    clearInterval(interval);
    interval = null;
    sec = 0;
    UpdateDisplay();
}