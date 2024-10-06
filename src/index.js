//SOLUTION
document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("create-task-form");
  const tasksList = document.getElementById("tasks");

 // this function handle the form submission and also  adding tasks
 taskForm.addEventListener("submit", function(event) {
  event.preventDefault(); // This Prevents the default behaviour of the browser 

  // this code get the input values from the form for execution
    
  const newTaskDescription = document.getElementById("new-task-description").value;
  const taskPriority = document.getElementById("task-priority").value; // Get priority

  if (newTaskDescription.trim() === "") {
    alert("Task description cannot be empty!");
    return;
  }

    // Create a new list item element for the task
    const taskItem = document.createElement("li");
    taskItem.className = "task-item"; // Add class for styling
    taskItem.textContent = `${newTaskDescription} (${taskPriority})`;

    // Style the task based on the priority(This is done using the map() method)
    const priorityColors = {
      High: "red",
      Medium: "orange",
      Low: "green"
    };
    
    taskItem.style.color = priorityColors[taskPriority] || "green";

    // Create the delete button element
    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("class", "delete-btn"); // this is used to create the selection for the particular styling
    deleteButton.innerHTML = "X"; //text in the button

    // Create the edit button element
    const editButton = document.createElement("button");
    editButton.setAttribute("class", "edit-btn"); // Set the class for styling
    editButton.innerHTML = "Edit"; // Set button text

     // appeding done to the button(added to the parent function)
    taskItem.append(editButton);
    taskItem.append(deleteButton);

     // appeding done to the button(added to the parent function)
    tasksList.append(taskItem);

    // form input clearance ( after the task is added)
        taskForm.reset();

    // Add event listener to the delete button to remove the task
    deleteButton.addEventListener("click", () => {
      tasksList.removeChild(taskItem); // Remove the task from the list
    });

    // Add event listener to the edit button to edit the task
    editButton.addEventListener("click", () => {
      // When clicking 'Edit', transform the task into an editable input field
      const taskText = newTaskDescription;
      const editInput = document.createElement("input");
      editInput.type = "text";
      editInput.value = taskText; // Set the current task text as the value
      taskItem.innerHTML = ''; // Clear the current content of the list item

      // Creation of a new button  (to be able to save edited task)
      const saveButton = document.createElement("button");
      saveButton.textContent = "Save";

      // Append the input and save button to the task item
      taskItem.append(editInput);
      taskItem.append(saveButton);

      // Add event listener to save the edited task
      saveButton.addEventListener("click", () => {
        const updatedTaskDescription = editInput.value;

        // If the updated task description is not empty, update the task
        if (updatedTaskDescription.trim() !== "") {
          taskItem.innerHTML = `${updatedTaskDescription} (${taskPriority})`; // Update the task description
          taskItem.style.color = priorityColors[taskPriority] || "green"; // Keep priority color

          // Re-append the edit and delete buttons after saving
          taskItem.append(editButton);
          taskItem.append(deleteButton);
        } else {
          alert("Task description cannot be empty!");
        }
      });
    });
  });
});
