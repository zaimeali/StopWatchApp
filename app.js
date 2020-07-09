let minID = 'minutes';
let secID = 'seconds';
let msecID = 'milliseconds';

function timer(){

}

function init(){
    document.getElementById("stop").disabled = true;
    document.getElementById("reset").disabled = true;
    document.getElementById('start').disabled = false;
}

function startWatch(){
    document.getElementById('start').disabled = true;
    document.getElementById("stop").disabled = false;
    document.getElementById("reset").disabled = false;
}

function stopWatch(){
    document.getElementById('start').disabled = false;
    document.getElementById('start').innerHTML = 'Resume <i class="fa fa-play" aria-hidden="true"></i>';
    document.getElementById("stop").disabled = true;
    document.getElementById("reset").disabled = false;
}

function resetWatch(){
    document.getElementById('start').disabled = false;
    document.getElementById('start').innerHTML = 'Start <i class="fa fa-play" aria-hidden="true"></i>';
    document.getElementById("stop").disabled = true;
    document.getElementById("reset").disabled = true;
}