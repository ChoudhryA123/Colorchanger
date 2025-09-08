// Generate a random hex color
function getRandomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
// Change background color
function changeColor() {
    document.body.style.backgroundColor = getRandomColor();
}
// Hook up button click
var button = document.getElementById("colorBtn");
button === null || button === void 0 ? void 0 : button.addEventListener("click", changeColor);
