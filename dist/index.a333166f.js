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

//# sourceMappingURL=index.a333166f.js.map
