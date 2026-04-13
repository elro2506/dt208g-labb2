import { TodoList } from "./TodoList";
import { TodoManager } from "./TodoManager";  //importerar TodoManager klassen

const todoManager = new TodoManager(); //Skapar en instans av TodoManager

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form')! as HTMLFormElement;
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Förhindrar att formuläret skickas traditionellt
        addTodo();
    });
    renderTodo();
});


function addTodo(): void {
    const dutyInput = document.getElementById('duty') as HTMLInputElement; //Det här är själva elementen
    const priorityInput = document.getElementById('priority') as HTMLInputElement;
    const responsibleInput = document.getElementById('responsible') as HTMLInputElement;

    const duty = dutyInput.value;
    const priority = Number(priorityInput.value);
    const responsible = responsibleInput.value;
    console.log(duty, responsible, priority);
    if (duty && responsible && (priority === 1 || priority === 2 || priority === 3)) {
        const newTodo = new TodoList(duty, responsible, priority)
        todoManager.addTodo(newTodo); //Skickar in newTodo till addTodo metoden i TodoManager
        dutyInput.value = ''; //rensar input fälten
        priorityInput.value = '';
        responsibleInput.value = '';
        renderTodo();

    }


}

function renderTodo(): void {
    console.log(todoManager); // Ska visa TodoManager-instansen
    const todos = todoManager.getTodos(); //Hämtar arrayen med kontakter från TodoManager
    const taskList = document.getElementById('todo-list') as HTMLUListElement;//Hämtar listan från html

    if (taskList) {
        taskList.innerHTML = ''; // Rensar listan
        todos.forEach((todo) => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${todo.duty}</strong><br>
            Ansvarig: ${todo.responsible}<br>
            Prioritet: ${todo.priority}<br>
            `;

            const deleteSpan = document.createElement('span');
            deleteSpan.textContent = 'Avklarad';
            deleteSpan.className = 'delete-button';


            //Här tar vi bort med duty istället. 
            deleteSpan.addEventListener('click', () => deleteTodo(todo.duty));
            li.appendChild(deleteSpan);

            taskList.appendChild(li);
        });
    }
}


function deleteTodo(duty: string): void {
    todoManager.deleteTodo(duty);
    renderTodo();
}

