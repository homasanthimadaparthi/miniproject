// Select elements
const taskInput = document.getElementById("task");
const prioritySelect = document.getElementById("priority");
const deadlineInput = document.getElementById("deadline");
const addTaskBtn = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

// Add task event
addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    const priority = prioritySelect.value;
    const deadline = deadlineInput.value;

    // Validation: if task not entered
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    //validation: if deadlined is not enterd
    if (deadline== "") {
        alert("Please select a deadline for the task");
        return;
    }

    // Create task container
    const taskItem = document.createElement("div");
    taskItem.classList.add("task-item", priority);

    // Task details
    const taskDetails = document.createElement("span");
    taskDetails.innerHTML = `
        <strong>${taskText}</strong><br>
        Priority: ${priority}<br>
        Deadline: ${deadline ? deadline : "Not set"}
    `;

    // Button container
    const btnContainer = document.createElement("div");

    /* -------- Mark as Done Button -------- */
    const doneBtn = document.createElement("button");
    doneBtn.textContent = "Done";
    doneBtn.style.background = "#2ecc71";
    doneBtn.style.color = "#fff";
    doneBtn.style.border = "none";
    doneBtn.style.padding = "6px 10px";
    doneBtn.style.borderRadius = "4px";
    doneBtn.style.cursor = "pointer";
    doneBtn.style.marginRight = "6px";

    doneBtn.addEventListener("click", () => {
        taskItem.style.opacity = "0.6";
        taskDetails.style.textDecoration ="none";
    });

    /* -------- Delete Button -------- */
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.style.background = "#e74c3c";
    deleteBtn.style.color = "#fff";
    deleteBtn.style.border = "none";
    deleteBtn.style.padding = "6px 10px";
    deleteBtn.style.borderRadius = "4px";
    deleteBtn.style.cursor = "pointer";

    deleteBtn.addEventListener("click", () => {
        taskItem.remove();
    });

    // Append buttons
    btnContainer.appendChild(doneBtn);
    btnContainer.appendChild(deleteBtn);

    // Append elements
    taskItem.appendChild(taskDetails);
    taskItem.appendChild(btnContainer);
    taskList.appendChild(taskItem);

    // Clear inputs
    taskInput.value = "";
    deadlineInput.value = "";
});