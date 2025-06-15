document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // ✅ Load tasks from localStorage when the page loads
    loadTasks();

    // ✅ Add task when button is clicked
    addButton.addEventListener('click', () => {
        addTask(taskInput.value);
    });

    // ✅ Add task when Enter is pressed
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask(taskInput.value);
        }
    });

    // ✅ Function to add task (with optional saving)
    function addTask(taskText, save = true) {
        const trimmedText = taskText.trim();
        if (trimmedText === '') {
            alert('Please enter a task.');
            return;
        }

        // Create list item
        const li = document.createElement('li');
        li.textContent = trimmedText;

        // Create remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-btn');
        removeButton.onclick = function () {
            li.remove();
            removeFromLocalStorage(trimmedText);
        };

        // Append button to li, li to list
        li.appendChild(removeButton);
        taskList.appendChild(li);

        // Clear input
        taskInput.value = '';

        // Save to localStorage
        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(trimmedText);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }
    }

    // ✅ Load tasks from localStorage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(task => addTask(task, false)); // don't re-save while loading
    }

    // ✅ Remove task from localStorage
    function removeFromLocalStorage(taskText) {
        let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks = storedTasks.filter(task => task !== taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }
});
