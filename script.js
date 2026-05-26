function addTask() {

  let taskInput = document.getElementById("taskInput");

  let taskText = taskInput.value;

  if (taskText === "") {
    alert("Task cannot be empty!");
    return;
  }

  let li = document.createElement("li");

 li.innerHTML = `
  <span onclick="completeTask(this)">
    ${taskText}
  </span>

  <button onclick="removeTask(this)">
    Delete
  </button>
`;
  document.getElementById("taskList").appendChild(li);

  taskInput.value = "";
}

function removeTask(button) {
  button.parentElement.remove();
}

function completeTask(task){
  task.style.textDecoration= "line-through";
}