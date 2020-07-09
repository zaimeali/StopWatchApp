let minID = 'minutes';
let secID = 'seconds';
let msecID = 'milliseconds';

let minute = 0;
let second = 0;
let millisecond = 0;

let timer;

function init(){
    document.getElementById("stop").disabled = true;
    document.getElementById("reset").disabled = true;
    document.getElementById('start').disabled = false;
}

function startWatch(){
    document.getElementById('start').disabled = true;
    document.getElementById("stop").disabled = false;
    document.getElementById("reset").disabled = false;

    timer = setInterval(() => {
        millisecond++;
        document.getElementById(msecID).innerHTML = addZero(millisecond);
        if(millisecond > 99){
            second++;
            millisecond = 0;
            document.getElementById(secID).innerHTML = addZero(second);
            console.log(second);
        }
        else if(second > 59){
            minute++;
            document.getElementById(minID).innerHTML = addZero(minute);
            console.log(minute);
            second = 0;
        }
    }, 10);
}

function stopWatch(){
    document.getElementById('start').disabled = false;
    document.getElementById('start').innerHTML = 'Resume <i class="fa fa-play" aria-hidden="true"></i>';
    document.getElementById("stop").disabled = true;
    document.getElementById("reset").disabled = false;

    clearInterval(timer);
}

function resetWatch(){
    document.getElementById('start').disabled = false;
    document.getElementById('start').innerHTML = 'Start <i class="fa fa-play" aria-hidden="true"></i>';
    document.getElementById("stop").disabled = true;
    document.getElementById("reset").disabled = true;

    document.getElementById(minID).innerHTML = "00";
    document.getElementById(secID).innerHTML = "00";
    document.getElementById(msecID).innerHTML = "00";

    minute = 0;
    second = 0;
    millisecond = 0;

    clearInterval(timer);
}

function addZero(time) {
    return (time < 10) ? '0' + time.toString() : time.toString();
}