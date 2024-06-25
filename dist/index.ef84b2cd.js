var modal = document.getElementById("mapModal");
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("map");
var modalImg = document.getElementById("modalMap");
img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
};
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
};

//# sourceMappingURL=index.ef84b2cd.js.map
