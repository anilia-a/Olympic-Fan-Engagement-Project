// SUBSCRIBE TO NEWSLETTER FUNCTIONALITY
var headerContainer = document.getElementById("headerContainer");
if (headerContainer) headerContainer.addEventListener("click", function() {
    var popup = document.getElementById("subscribeOverlay");
    if (!popup) return;
    var popupStyle = popup.style;
    if (popupStyle) {
        popupStyle.display = "flex";
        popupStyle.zIndex = 100;
        popupStyle.backgroundColor = "rgba(113, 113, 113, 0.3)";
        popupStyle.alignItems = "center";
        popupStyle.justifyContent = "center";
    }
    popup.setAttribute("closable", "");
    var onClick = popup.onClick || function(e) {
        if (e.target === popup && popup.hasAttribute("closable")) popupStyle.display = "none";
    };
    popup.addEventListener("click", onClick);
});
// PICTURE SLIDESHOW FUNCTIONALITY
let slideIndex = 0;
showSlide(slideIndex);
function changeSlide(n) {
    showSlide(slideIndex += n);
}
function showSlide(n) {
    let slides = document.getElementsByClassName("slide");
    if (n >= slides.length) slideIndex = 0;
    if (n < 0) slideIndex = slides.length - 1;
    for(let i = 0; i < slides.length; i++)slides[i].style.display = "none";
    slides[slideIndex].style.display = "block";
}
// COUNTDOWN FUNCTIONALITY
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
//BUTTON VIEWING
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".button-primary-green");
    buttons.forEach((button)=>{
        button.addEventListener("click", function() {
            const url = button.getAttribute("data-url");
            window.open(url, "_blank");
        });
    });
});

//# sourceMappingURL=index.c36f364e.js.map
