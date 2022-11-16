// Todo App change  ok

let todos = [
  { title: "Get Groceries", dueDate: "2021-10-04", id: "id1" },

  { title: "Wash car", dueDate: "2022-02-08", id: "id1" },

  { title: "Make dinner", dueDate: "2021-04-04", id: "id3" },
];

render();

function addTodo() {
  const textbox = document.getElementById("todo-title");
  const title = textbox.value;

  const datePicker = document.getElementById("date-picker");
  const dueDate = datePicker.value;

  const id = new Date().getTime();

  todos.push({
    title: title,
    dueDate: dueDate,
    id: id,
  });

  render();
}

function deleteTodo(event) {
  const deleteButton = event.target;
  const idToDelete = deleteButton.id;

  todos.filter(function (todo) {});
}

function render() {
  // reset list before rendering
  document.getElementById("todo-list").innerHTML = "";

  todos.forEach(function (todo) {
    const newDiv = document.createElement("div");
    newDiv.innerText = todo.title + " " + todo.dueDate;

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.style = "margin-left: 12px;";
    deleteButton.id = todo.id;
    newDiv.appendChild(deleteButton);
    deleteButton.onclick = deleteTodo;

    const todoList = document.getElementById("todo-list");

    todoList.appendChild(newDiv);

    document.getElementById("todo-title").value = "";
  });
}

// Should I add new feature?
//Missesd a push. Start Pushing first thing in the morning
