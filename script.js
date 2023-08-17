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

// document.getElementById('font-size').addEventListener('input', function(){
//     const fontSizeValue = document.getElementById('font-size').value;
//     textArea.style.fontSize = fontSizeValue + 'px'; // Adding 'px' unit
// });

// text Transforming
const textCaseSelect = document.getElementById("text-case");
// Add event listener to the select element
textCaseSelect.addEventListener("change", function () {
  const selectedOption = textCaseSelect.value;
  if (selectedOption === "uppercase") {
    textArea.style.textTransform = "uppercase";
  } else if (selectedOption === "lowercase") {
    textArea.style.textTransform = "lowercase";
  } else {
    textArea.style.textTransform = "none"; // Reset to normal
  }
});

// Get the color picker input element
const colorPicker = document.getElementById("pick-color");
// Add event listener to the color picker
colorPicker.addEventListener("input", function () {
  const selectedColor = colorPicker.value;
  textArea.style.color = selectedColor;
});
