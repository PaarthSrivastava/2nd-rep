const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
let taskCount = 0;

taskInput.addEventListener("keypress", function(e) {
  if (e.key === "Enter" && taskInput.value.trim() !== "") {
    addTask(taskInput.value.trim());
    taskInput.value = "";
  }
});

function addTask(taskText) {
  const div = document.createElement("div");
  div.className = "entry";

  const taskNumber = ++taskCount;

  const label = document.createElement("strong");
  label.textContent = `Task ${taskNumber}: `;

  const content = document.createElement("span");
  content.contentEditable = "true";
  content.textContent = taskText;
  content.className = "editable";

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.onclick = function () {
    content.focus();
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = function () {
    taskList.removeChild(div);
    if (taskNumber === taskCount) {
      taskCount--; // re-use deleted task number if it was last
    }
  };

  div.appendChild(label);
  div.appendChild(content);
  div.appendChild(editBtn);
  div.appendChild(deleteBtn);
  taskList.appendChild(div);
}
