// Define UI Vars

const newTodo = document.querySelector("#new-todo");
const taskList = document.querySelector(".list-group");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const form = document.querySelector("#addItem");

// Load all event listeners
loadEventListeners();

function loadEventListeners() {
  // add task event
  form.addEventListener("click", addTask);
};

// Add Tasks
function addTask(e) {
  if (newTodo.value === "") {
    alert("add a task");
  }
  // create li
  const li = document.createElement("li");
  // add class
  li.className = "list-group-item";

  // create text node and append to li
  li.appendChild(document.createTextNode(newTodo.value));
  // create new link element
  const link = document.createElement("button");
	link.className = 'delete-item text-right btn btn-danger btn-sm float-right';
	link.innerHTML = '<i class="fas fa-times"></i>';
  li.appendChild(link);

  // append li to ul
  taskList.appendChild(li);

  // clear input
  newTodo.value = "";

  e.preventDefault();
}
