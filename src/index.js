document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let newInputId = document.getElementById("new-task-description");
  newInputId.id = "taskDescription";

  let form = document.getElementById("create-task-form");
  form.addEventListener("submit", addTasks);

  function addTasks(e) {
    e.preventDefault();
    let listItem = document.getElementById("tasks");
    let listItemChild = document.createElement("li");
    listItemChild.textContent = e.target.taskDescription.value;
    listItem.appendChild(listItemChild);
    form.reset();
  }
});
