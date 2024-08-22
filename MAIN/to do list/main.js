document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-todo');
    const inputField = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    addButton.addEventListener('click', () => {
        const todoText = inputField.value.trim();
        if (todoText === '') return;

        const li = document.createElement('li');
        li.innerHTML = `
            <span>${todoText}</span>
            <button class="edit">Redaktə et</button>
            <button class="delete">Sil</button>
        `;

        li.querySelector('.edit').addEventListener('click', () => {
            const newText = prompt('Yeni tapşırıq:', todoText);
            if (newText !== null) {
                li.querySelector('span').textContent = newText;
            }
        });

        li.querySelector('.delete').addEventListener('click', () => {
            li.remove();
        });

        li.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        todoList.appendChild(li);
        inputField.value = '';
    });

    inputField.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addButton.click();
        }
    });
});