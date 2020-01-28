var secondHand = document.getElementById('second');
var minuteHand = document.getElementById('minute');
var hourHand = document.getElementById('hour');
var startDegrees = 0;


// Keeping degrees the same, but increased time intervals for second, minute and hour

setInterval(function () {
    secondHand.style.transform = "rotate(" + (startDegrees+= 6) + "deg)";
    }, 1000);

setInterval(function () {
    minuteHand.style.transform = "rotate(" + (startDegrees+= 6) + "deg)";
}, 60000);

setInterval(function () {
    hourHand.style.transform = "rotate(" + (startDegrees+= 6) + "deg)";
}, 3600000
);