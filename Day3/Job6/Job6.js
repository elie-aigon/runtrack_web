const colorButton = document.getElementById("colorSwitch");
colorButton.addEventListener("click", colorSwitch);
function colorSwitch() {
  const color = '#' + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = color;
}