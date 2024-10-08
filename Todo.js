// Define the addTask function
function addTask() {
    const taskInput = document.getElementById('taskInput'); // Select the input field
    const taskText = taskInput.value;

    // Logic to add the task to the task list
    if (taskText) {
        const taskList = document.getElementById('taskList'); // Get the task list
        const taskItem = document.createElement('li'); // Create a new list item
        taskItem.textContent = taskText; // Set the text content
        taskList.appendChild(taskItem); // Append the new task to the list
        taskInput.value = ''; // Clear the input field
    }
}

// Add the event listener after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('addButton'); // Select the button
    addButton.addEventListener('click', addTask); // Add the event listener to the button
});
