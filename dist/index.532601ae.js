// Set the date we're counting down to
var countDownDate = new Date("Jul 26, 2024 00:00:00").getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / 86400000);
    var hours = Math.floor(distance % 86400000 / 3600000);
    var minutes = Math.floor(distance % 3600000 / 60000);
    var seconds = Math.floor(distance % 60000 / 1000);
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "OLYMPICS START";
    }
}, 1000);

//# sourceMappingURL=index.532601ae.js.map
