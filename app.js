let todos = ["Get Groceries", "Wash car", "Make dinner"];

render();

function addTodo() {
  const textbox = document.getElementById("todo-title");
  const title = textbox.value;
  todos.push(title);

  render();
}

function render() {
  // reset list before rendering
  document.getElementById("todo-list").innerHTML = "";

  todos.forEach(function (todoItem) {
    const newDiv = document.createElement("div");

    newDiv.innerText = todoItem;

    const todoList = document.getElementById("todo-list");

    todoList.appendChild(newDiv);

    document.getElementById("todo-title").value = "";
  });
}
