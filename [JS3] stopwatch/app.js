var seconds = document.querySelector('.second');
var tens = document.querySelector('.ten');

var startBtn = document.querySelector('.start');
var resetBtn = document.querySelector('.reset');

function startTimer() {
    setInterval(function(){var tensValue = parseInt(tens.textContent);
        var secondsValue = parseInt(seconds.textContent);
        if (tensValue < 59) {
            tensValue = tensValue + 1;
            tens.textContent = tensValue;
        } else{
            secondsValue = secondsValue + 1;
            seconds.textContent = secondsValue;
            tensValue = 0;
            tens.textContent = tensValue;
        }}, 1000)
        startBtn.setAttribute('disabled', 'disabled');
}

startBtn.addEventListener('click', function(){
    startTimer();
});

resetBtn.addEventListener('click', function(){
    seconds.textContent = '0';
    tens.textContent = '0';
});