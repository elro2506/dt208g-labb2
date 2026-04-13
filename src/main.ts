import { TodoList } from "./TodoList";
import { TodoManager } from "./TodoManager";  //importerar TodoManager klassen

const todoManager = new TodoManager(); //Skapar en instans av TodoManager

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form')! as HTMLFormElement;
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Förhindrar att formuläret skickas traditionellt
        addTodo();
    });
    const clearButton = document.getElementById('clear') as HTMLButtonElement;
    clearButton.addEventListener('click', () => {
        todoManager.clearCompleted();
        renderTodo();
        })
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

    const todos = todoManager.getTodos(); //Hämtar arrayen med kontakter från TodoManager

    const taskList = document.getElementById('todo-list') as HTMLUListElement;//Hämtar listan från html
    const completedList = document.getElementById('completed-list') as HTMLUListElement; //En till lista för avklarade uppgifter

    if (taskList && completedList) {
        taskList.innerHTML = ''; // Rensar listan
        completedList.innerHTML = '';
        
        todos.forEach((todo, index) => {
            const li = document.createElement('li');

            li.innerHTML = `<strong>${todo.duty}</strong><br>
            Ansvarig: ${todo.responsible}<br>
            Prioritet: ${todo.priority}<br>
            `;

            if (todo.completed) {
                li.classList.add("completed");
            }
            const button = document.createElement('button');
            button.textContent = 'Avklarad';
            


            //Här tar vi bort med duty istället. 
            button.addEventListener('click', () => {
                todoManager.markTodoCompleted(index);


            renderTodo();
        });

        li.appendChild(button);
        
        if (todo.completed) {
            completedList.appendChild(li);
        } else {
            taskList.appendChild(li);
        }
    });
}
}


