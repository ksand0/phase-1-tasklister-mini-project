document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  // Function to create an editable task item
  function createEditableTask(taskDescription) {
    const taskItem = document.createElement("li");
    const taskInput = document.createElement("input");
    taskInput.type = "text";
    taskInput.value = taskDescription;

    // Event listener to replace the input field with task text when editing is done
    taskInput.addEventListener("blur", function() {
      taskItem.textContent = taskInput.value;
      taskItem.appendChild(editButton);
      taskItem.appendChild(deleteButton);
    });

    // Event listener to handle editing using Enter key
    taskInput.addEventListener("keydown", function(event) {
      if (event.key === "Enter") {
        taskInput.blur(); // Trigger blur event to replace input field with task text
      }
    });

    // Create delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function() {
      taskItem.remove(); // Remove the task item when delete button is clicked
    });

    // Create edit button
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", function() {
      taskItem.textContent = ""; // Clear task text
      taskItem.appendChild(taskInput); // Replace with input field
      taskInput.focus(); // Focus on input field for editing
    });

    taskItem.appendChild(taskInput);
    taskItem.appendChild(editButton);
    taskItem.appendChild(deleteButton);

    return taskItem;
  }

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Get the input value
    const taskInput = document.getElementById("new-task-description");
    const taskDescription = taskInput.value;

    // Create and append a new editable task item
    const taskItem = createEditableTask(taskDescription);
    taskList.appendChild(taskItem);

    // Clear the input field after submitting the form
    taskInput.value = "";
  });
});

