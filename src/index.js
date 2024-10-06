document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("create-task-form");
  const tasksList = document.getElementById("tasks");

  // this function handle the form submission and also  adding tasks
  taskForm.addEventListener("submit", function(event) {
    event.preventDefault(); // This Prevents the default behaviour of the browser 

   
    /*
    this code get the input values from the form for execution
    */
    const newTaskDescription = document.getElementById("new-task-description").value;
    const taskPriority = document.getElementById("task-priority").value; // Get priority

    if (newTaskDescription.trim() === "") {
      alert("Task description cannot be empty!");
      return;
    }

    // code for the creation of the list item element for the task
    const taskItem = document.createElement("li");
    taskItem.className = "task-item"; // Add class for styling
    taskItem.textContent = `${newTaskDescription} ${taskPriority}`;

    // the task styled on the priority basis 
    const priorityColors = {
      High: "red",
      Medium: "orange",
      Low: "green"
    };
    
    taskItem.style.color = priorityColors[taskPriority] || "green";
    
    // delete button added to the task
    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-btn";
    deleteButton.textContent = "X";

    taskItem.appendChild(deleteButton); //appeding done to the button(added to the parent function)
    
    tasksList.appendChild(taskItem);//appeding done to the button(added to the parent function)

    taskForm.reset(); // used to clear the field after tghe task is added. 

    //event  listner added to enable the delition of button used to delete the added task
    deleteButton.addEventListener("click", () => {
      tasksList.removeChild(taskItem); // Task removed from the list
    });
  });
});
