function addEntry() {
  const input = document.getElementById("entryInput");
  const value = input.value.trim();

  if (value === "") return;

  const entryList = document.getElementById("entriesList");

  const entryDiv = document.createElement("div");
  entryDiv.className = "entry";

  const entryInput = document.createElement("input");
  entryInput.type = "text";
  entryInput.value = value;
  entryInput.disabled = true;
  entryInput.className = "entry-text";

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "Completed";
  completeBtn.onclick = () => {
    entryInput.classList.toggle("completed");
  };

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.onclick = () => {
    entryInput.disabled = !entryInput.disabled;
    editBtn.textContent = entryInput.disabled ? "Edit" : "Save";
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = () => entryList.removeChild(entryDiv);

  entryDiv.appendChild(entryInput);
  entryDiv.appendChild(completeBtn);
  entryDiv.appendChild(editBtn);
  entryDiv.appendChild(deleteBtn);

  entryList.appendChild(entryDiv);
  input.value = "";
}
