import { TodoList } from "./TodoList";
import { TodoManager } from "./TodoManager";  //importerar TodoManager klassen

const todoManager = new TodoManager(); //Skapar en instans av TodoManager
//Väntar tills DOM är laddad innan jag hämtar element
document.addEventListener('DOMContentLoaded', () => {
    //Tar for,uläret från DOM
    const form = document.getElementById('form')! as HTMLFormElement;
    form.addEventListener('submit', (event) => {
        event.preventDefault(); //Förhindrar att formuläret laddas om när man klickar
        addTodo(); //Funktionen som lägger till en ToDo
    });
    const clearButton = document.getElementById('clear') as HTMLButtonElement; //hämtar knappen för att rensa avklarade ToDos
    clearButton.addEventListener('click', () => {
        todoManager.clearCompleted(); //Tar bort de ToDos som är klar-markerade
        renderTodo(); //Uppdaterar listan
    })
    renderTodo();
});


function addTodo(): void {
    //Hämtar inpts från fälten
    const dutyInput = document.getElementById('duty') as HTMLInputElement; //Det här är själva elementen
    const priorityInput = document.getElementById('priority') as HTMLInputElement;
    const responsibleInput = document.getElementById('responsible') as HTMLInputElement;

    const duty = dutyInput.value;
    const priority = Number(priorityInput.value); //Konverterar priority till nummer
    const responsible = responsibleInput.value;
    console.log(duty, responsible, priority);
    if (duty && responsible && (priority === 1 || priority === 2 || priority === 3)) {
        const success = todoManager.addTodo(duty, responsible, priority); //skickar data till ToDoManager för validering
        if (success) {
            dutyInput.value = ''; //rensar input fälten
            priorityInput.value = '';
            responsibleInput.value = '';
            renderTodo(); //Uppdaterar listan
        } else {
            alert("Fyll i alla fält och uppge 1, 2 eller 3 i prioritet"); //Visar felmeddelande om det inte valideras
        }
    }


}

function renderTodo(): void {
    //Hämtar ToDos från ToDoManager
    const todos = todoManager.getTodos(); //Hämtar arrayen med kontakter från TodoManager

    const taskList = document.getElementById('todo-list') as HTMLUListElement;//Hämtar listan från html
    const completedList = document.getElementById('completed-list') as HTMLUListElement; //En till lista för avklarade uppgifter

    if (taskList && completedList) {
        taskList.innerHTML = ''; // Rensar listan innan vi renderar om
        completedList.innerHTML = '';

        todos.forEach((todo, index) => { //Loopar igenom alla ToDos
            const li = document.createElement('li'); //Skapar ett li-element för varje ToDO

            li.innerHTML = `<strong>${todo.duty}</strong><br>
            Ansvarig: ${todo.responsible}<br>
            Prioritet: ${todo.priority}<br>
            `; //Lägger in innehållet i listan

            if (todo.completed) {
                li.classList.add("completed"); //LÄgger till en klass om ToDo är avklarad (mest för css)
            }
            const button = document.createElement('button');
            button.textContent = 'Avklarad'; //Knapp för att kunna markera ToDo som klar



            //Här tar vi bort med duty istället. 
            button.addEventListener('click', () => {
                todoManager.markTodoCompleted(index); //Markerar ToDon som klar i ToDoManager


                renderTodo(); //Renderar om listan
            });

            li.appendChild(button);
            //Lägger ToDon i rätt listan beroende på statusen (avklarad/ej avklarad)
            if (todo.completed) {
                completedList.appendChild(li);
            } else {
                taskList.appendChild(li);
            }
        });
    }
}


