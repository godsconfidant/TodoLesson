// Excersise 8 - 1

function change() {
  document.getElementById("todo").innerText = "Done";
}

// Excersies 8 - 2/3
let count = 0;

function countUp() {
  document.getElementById("counter").innerHTML = count = count + 1;
}

function countDown() {
  document.getElementById("counter").innerHTML = count = count - 1;
}

// Excersises 8 - 4

function submitTextBox() {
  let elm = document.createElement("div");

  let textInput = document.getElementById("textbox").value;

  elm.innerHTML = textInput;

  document.body.appendChild(elm);
}
