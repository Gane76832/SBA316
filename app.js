
const todoForm = document.getElementById('todo-form'); 
const todoInput = document.querySelector('#todo-input'); 
const todoList = document.querySelector('#todo-list');
const clearCompletedBtn = document.querySelector('#clear-completed');


console.log('The To-Do List app has started.');


todoForm.addEventListener('submit', addTask); 
clearCompletedBtn.addEventListener('click', clearCompletedTasks); 


function addTask(event) {
    event.preventDefault(); 

   
    const taskText = todoInput.value.trim(); 
    if (taskText === '') {
        alert('Please enter something, a task, an assignment, ANYTHING. Thank you.'); 
        return;
    }

    
    const listItem = document.createElement('li'); 
    listItem.classList.add('task-item');
    listItem.setAttribute('data-task', taskText);

    const checkbox = document.createElement('input'); 
    checkbox.type = 'checkbox';
    checkbox.classList.add('task-checkbox');
    checkbox.addEventListener('change', toggleTaskCompletion); 

    const taskTextElement = document.createElement('span'); 
    taskTextElement.classList.add('task-text');
    taskTextElement.textContent = taskText;

    
    listItem.appendChild(checkbox);
    listItem.appendChild(taskTextElement);

    
    todoList.appendChild(listItem);

   
    todoInput.value = '';

    // This was to show the visibility of the clear tasks button
    updateClearCompletedVisibility();

    console.log(`Task added: ${taskText}`);
}


function toggleTaskCompletion(event) {
    const checkbox = event.currentTarget;
    const taskItem = checkbox.parentElement;

    if (checkbox.checked) {
        taskItem.classList.add('completed');
    } else {
        taskItem.classList.remove('completed');
    }

    
    updateClearCompletedVisibility();
}


function clearCompletedTasks() {
    
    const completedTasks = todoList.querySelectorAll('.task-item.completed');

    
    completedTasks.forEach(task => {
        todoList.removeChild(task);
    });

    console.log('Cleared all completed tasks.');

    
    updateClearCompletedVisibility();
}

// Function to show or hide the Clear Completed Tasks button at the very bottom
function updateClearCompletedVisibility() {
    const completedTasks = todoList.querySelectorAll('.task-item.completed'); // Get all completed tasks
    if (completedTasks.length > 0) {
        // If there are completed tasks then this shows the button
        clearCompletedBtn.classList.remove('hidden');
    } else {
        // However, if there are no completed tasks then hide the button
        clearCompletedBtn.classList.add('hidden');
    }
}
