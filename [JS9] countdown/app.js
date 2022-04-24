const countdown = function count() {
    var countTime = new Date("25 may, 2021 11:30:00").getTime();
    var now = new Date().getTime();
    var gap = countTime - now;

    var seconds = 1000;
    var minutes = seconds*60;
    var hours = minutes*60;
    var days = hours*24;

    var daysText = Math.floor(gap / days);
    var hoursText = Math.floor((gap % days) / hours); 
    var minutesText = Math.floor((gap % hours) / minutes); 
    var secondsText = Math.floor((gap % minutes) / seconds); 
    
    document.querySelector(".day").innerText = daysText;
    document.querySelector(".hour").innerText = hoursText;
    document.querySelector(".minute").innerText = minutesText;
    document.querySelector(".second").innerText = secondsText;
}

setInterval(countdown, 1000);