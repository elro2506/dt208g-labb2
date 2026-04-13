import { TodoList } from "./TodoList";
import { LocalStorageUtil } from "./LocalStorageUtil";


export class TodoManager {
    private todos: TodoList[] = [];  //Array som håller alla kontakter


    //Kontruktor skapar objekt av klassen TodoManager och fyller arrayen med kontakter från LocalStorage
    constructor() {
        this.todos = LocalStorageUtil.loadTodos();
    }


    
    public addTodo(todo: TodoList): void {
        this.todos.push(todo);
        LocalStorageUtil.saveTodos(this.todos);

    }
    /*
    public deleteTodo(index: number): void {
        this.todos.splice(index, 1); 
        
        //Vi tar bort en matchande responsible.
        

        LocalStorageUtil.saveTodos(this.todos);

    }
        */

    public deleteTodo(duty: string): void {
       
        
        //Vi tar bort en matchande responsible.
        this.todos = this.todos.filter(c => c.duty !== duty)

        LocalStorageUtil.saveTodos(this.todos);

    }
    public getTodos(): TodoList[] { //retunerar kontakterna till main.ts
        return this.todos;
    }





}