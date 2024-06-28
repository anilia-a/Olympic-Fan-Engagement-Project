//RELOAD HOME PAGE
document.getElementById("home-button").addEventListener("click", function() {
    location.reload();
});
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
document.addEventListener("DOMContentLoaded", function() {
    const apiKey = "51a61ec0535f4e1ca16042d07f528167"; // Replace with your NewsAPI key
    const url = `https://newsapi.org/v2/everything?q=Ireland+Olympics&language=en&sortBy=publishedAt&pageSize=10&apiKey=${apiKey}`;
    fetch(url).then((response)=>response.json()).then((data)=>{
        const articles = data.articles;
        const headlinesContainer = document.getElementById("news-headlines");
        articles.forEach((article)=>{
            const headlineElement = document.createElement("div");
            headlineElement.className = "news-headline";
            let image = "";
            if (article.urlToImage) image = `<img src="${article.urlToImage}" alt="${article.title}" class="news-image">`;
            headlineElement.innerHTML = `
                    <a href="${article.url}" target="_blank">
                        ${image}
                        <p>${article.title}</p>
                    </a>
                `;
            headlinesContainer.appendChild(headlineElement);
        });
    // Adjust height of headlinesContainer if necessary (not usually needed)
    // headlinesContainer.style.height = '100%'; 
    }).catch((error)=>{
        console.error("Error fetching the news:", error);
    });
});
document.addEventListener("DOMContentLoaded", ()=>{
    const form = document.getElementById("post-message-form");
    const messageInput = document.getElementById("message-input");
    const messagesList = document.getElementById("messages-list");
    form.addEventListener("submit", (e)=>{
        e.preventDefault();
        const messageText = messageInput.value.trim();
        if (messageText) {
            addMessage(messageText);
            messageInput.value = "";
        }
    });
    function addMessage(text) {
        const message = document.createElement("div");
        message.classList.add("message");
        const timestamp = document.createElement("span");
        timestamp.classList.add("timestamp");
        timestamp.textContent = new Date().toLocaleString();
        message.textContent = text;
        message.appendChild(timestamp);
        messagesList.insertBefore(message, messagesList.firstChild);
    }
});

//# sourceMappingURL=index.c36f364e.js.map
