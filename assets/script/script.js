const hour = document.getElementById('hourId');
const minute = document.getElementById('minuteId');
const second = document.getElementById('secondId');

const relogio = setInterval(function time(){
    let newHour = new Date();
    let hr = newHour.getHours();
    let min = newHour.getMinutes();
    let sec = newHour.getSeconds();

    if (hr < 10){
        hr = '0' + hr
    }
    if (min < 10){
        min = '0' + min
    }
    if (sec < 10){
        sec = '0' + sec
    }

    hour.textContent = hr;
    minute.textContent = min;
    second.textContent = sec;
})