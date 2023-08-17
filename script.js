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
