// Get the text area element
const textArea = document.getElementById("textArea");

// Add event listeners for bold and italic buttons
document.getElementById("bold").addEventListener("click", function () {
  textArea.style.fontWeight = "bold";
});

document.getElementById("italic").addEventListener("click", function () {
  textArea.style.fontStyle = "italic";
});
document.getElementById("underline").addEventListener("click", function () {
  textArea.style.textDecoration = "underline";
});

// text alignment
document.getElementById("left").addEventListener("click", function () {
  textArea.style.textAlign = "left";
});
document.getElementById("center").addEventListener("click", function () {
  textArea.style.textAlign = "center";
});
document.getElementById("right").addEventListener("click", function () {
  textArea.style.textAlign = "right";
});
document.getElementById("justify").addEventListener("click", function () {
  textArea.style.textAlign = "justify";
});

// text sizing .addEventListener('input',function not click() {

document.getElementById("font-size").addEventListener("input", function () {
  const fontSize = document.getElementById("font-size").value;
  textArea.style.fontSize = fontSize + "px";
});
