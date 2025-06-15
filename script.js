// Wait until the full HTML document is loaded
document.addEventListener('DOMContentLoaded', () => {

    // 1. Select necessary DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // 2. Function to add a new task
    function addTask() {
        // Get and trim the task text
        const taskText = taskInput.value.trim();

        // If the input is empty, alert and stop
        if (taskText === '') {
            alert("Please enter a task.");
            return;
        }

        // Create a new <li> element and set its text
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a "Remove" button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';

        // When clicked, remove the task <li>
        removeBtn.onclick = () => {
            li.remove();
        };

        // Add the button to the li and the li to the ul
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear the input box
        taskInput.value = '';
    }

    // 3. Add event listeners
    // When the "Add Task" button is clicked
    addButton.addEventListener('click', addTask);

    // When Enter is pressed inside the input field
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });

});
