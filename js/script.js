const storedTasks = JSON.parse(localStorage.getItem('todos')) || [];
const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');
function renderList() {
    todoList.innerHTML = '';
    storedTasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.classList.add('flex', 'justify-between', 'items-center', 'bg-gray-100', 'p-2', 'rounded-lg');
        li.innerHTML = `
            <span class="text-gray-700">${task}</span>
            <button onclick="removeTask(${index})" class="text-red-500 hover:text-red-700">Delete</button>
        `;
        todoList.appendChild(li);
    });
}
addButton.addEventListener('click', () => {
    const newTask = todoInput.value.trim();
    if (newTask) {
        storedTasks.push(newTask);
        localStorage.setItem('todos', JSON.stringify(storedTasks));
        todoInput.value = '';
        renderList();
    }
});

function removeTask(index) {
    storedTasks.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(storedTasks));
    renderList();
}
renderList();
