import { TodoList } from "./TodoList";
import { LocalStorageUtil } from "./LocalStorageUtil";


export class TodoManager {
    private todos: TodoList[] = [];  //Array som lagrar alla ToDos


    //Kontruktor skapar objekt av klassen TodoManager och fyller arrayen med ToDos från LocalStorage
    constructor() {
        this.todos = LocalStorageUtil.loadTodos(); //Hämtar de sparade ToDos från LocalStorage
    }



    public addTodo(duty: string, responsible: string, priority: number): boolean {
        if (!duty || !responsible || ![1, 2, 3].includes(priority)) { //Detta validerar inputs, dvs alla fält ska vara ifyllda och prioritet=1-3
            return false;
        }

        const newTodo = new TodoList(duty, responsible, priority); //Skapar ett nytt ToDo-objekt
        this.todos.push(newTodo); //Lägger till objektet i arrayen
        LocalStorageUtil.saveTodos(this.todos); //Sparar objekten i LocalStorage
        return true;

    }

    public markTodoCompleted(index: number): void {



        //Vi tar bort en matchande responsible.
        this.todos[index].completed = true; //Detta markerar en ToDo som avklarad
        LocalStorageUtil.saveTodos(this.todos); //Sparar ändringen i LocalStorage

    }
    public getTodos(): TodoList[] { //retunerar ToDos till main.ts
        return this.todos;
    }

    public clearCompleted(): void {
        this.todos = this.todos.filter(todo => !todo.completed); //Tar bort de ToDos som är avklarade
        LocalStorageUtil.saveTodos(this.todos);
    }




}