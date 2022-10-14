let todos = ["Get Groceries", "Wash car", "Make dinner"];

todos.forEach(function (todoItem) {
  let newDiv = document.createElement("div");
  newDiv.innerHTML = todoItem;
  document.body.appendChild(newDiv);
});

function addTodo() {
  let textbox = document.getElementById("todo-title");
  let title = textbox.value;
  todos.push(title);
}
