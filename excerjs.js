// Excersise 8 - 1

function change() {
  document.getElementById("todo").innerText = "Done";
}

// Excersies 8 - 2/3
let count = 0;

function countUp() {
  count = count + 1;
  updateCount();
}

function countDown() {
  count = count - 1;
  updateCount();
}

function updateCount() {
  let counter = document.getElementById("counter");
  counter.innerHTML = count;
}

// Excersises 8 - 4

function submit() {
  // This step assigns the input field to the variable
  let textbox = document.getElementById("textbox");

  // This step adds the value of the input, the text, to a variable.
  let inputText = textbox.value;

  // This step creates the "div" element
  let element = document.createElement("div");

  // This step add the input value ("text"), to the div Element
  element.innerText = inputText;

  // This step adds the created element ('div'), with the added value from the input text in the document.
  document.body.appendChild(element);
}

// Excersies 9

// Excecises 9 - 1

// Reminder to add comments to code

let items = ["Apple", "Tomato", "Eggs"];

let apple = document.getElementById("apple-btn");
let tomato = document.getElementById("tomato-btn");
let eggs = document.getElementById("eggs-btn");
let clear = document.getElementById("clear-btn");

function addApple() {
  let pressedBtn = document.getElementById("apple-btn");
  let btnItem = pressedBtn.innerText;

  let element = document.createElement("div");
  element.innerText = btnItem;
  let cart = document.getElementById("cart");
  cart.appendChild(element);
}

function addTomato() {
  let pressedBtn = document.getElementById("tomato-btn");
  let btnItem = pressedBtn.innerText;

  let element = document.createElement("div");
  element.innerText = btnItem;
  let cart = document.getElementById("cart");
  cart.appendChild(element);
}
function addEggs() {
  let pressedBtn = document.getElementById("eggs-btn");
  let btnItem = pressedBtn.innerText;

  let element = document.createElement("div");
  element.innerText = btnItem;
  let cart = document.getElementById("cart");
  cart.appendChild(element);
}

function clearList() {
  document.getElementById(cart);
  cart.innerHTML = "";
}

// Exercise 9 - 2

const measure = document.getElementById("measure");

function convertToCm() {
  const value = measure.value;
  const convert = Number(value);

  const length = value * 2.54;
  console.log(length);

  let ans = document.getElementById("result");
  ans.innerText = length;

  document.body.appendChild(ans);
}

function convertToInch() {
  const value = measure.value;
  const convertVal = Number(value);

  const convert = value / 2.54;

  const result = document.getElementById("result");

  result.innerText = convert;
  document.body.appendChild(result);
}

// Exercises 10

//  10 - 1

let cartArray = [
  { name: "Apple", price: 4, qty: 2 },
  { name: "Orange", price: 3, qty: 3 },
  { name: "Lemons", price: 2, qty: 5 },
];

function cartTotal(getCart) {
  let total = 0;
  getCart.forEach(function (item) {
    total += item.price * item.qty;
  });
  return total;
}
cartTotal(cartArray);

// 10 - 2

const recpt = document.getElementById("recpt");
const total = document.getElementById("total");
function displayRecpt(getItems) {
  recpt.innerHTML = "";
  total.innerHTML = "";

  getItems.forEach(function (item) {
    const recptLine = document.createElement("div");

    recptLine.innerText = item.name + " $" + item.price + " * " + item.qty;
    recpt.appendChild(recptLine);
  });

  let totalLine = document.createElement("div");
  totalLine.innerText = "Total = " + cartTotal(cartArray);
  total.appendChild(totalLine);
}

displayRecpt(cartArray);
