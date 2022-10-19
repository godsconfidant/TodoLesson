let todos = [
  { title: "Get Groceries", dueDate: "2021-10-04" },

  { title: "Wash car", dueDate: "2022-02-08" },

  { title: "Make dinner", dueDate: "2021-04-04" },
];

render();

function addTodo() {
  const textbox = document.getElementById("todo-title");
  const title = textbox.value;

  const datePicker = document.getElementById("date-picker");
  const dueDate = datePicker.value;

  todos.push({
    title: title,
    dueDate: dueDate,
  });

  render();
}

function render() {
  // reset list before rendering
  document.getElementById("todo-list").innerHTML = "";

  todos.forEach(function (todo) {
    const newDiv = document.createElement("div");

    newDiv.innerText = todo.title + " " + todo.dueDate;

    const todoList = document.getElementById("todo-list");

    todoList.appendChild(newDiv);

    document.getElementById("todo-title").value = "";
  });
}
