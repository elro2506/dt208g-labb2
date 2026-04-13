import { TodoList } from './TodoList';
export class LocalStorageUtil {

    static saveTodos(todos: TodoList[]) {
        localStorage.setItem('todos', JSON.stringify(todos)); // Sparar hela todo-arrayen till localStorage
    }

    static loadTodos(): TodoList[] {
        const TodoStr = localStorage.getItem('todos');
        if (TodoStr) {
            //return JSON.parse(TodoStr);//När denna returneras kan Typescript inte veta
            //vad som kommer ut ur localStorage. 
            //============
            //Bättre att skriva
            const rawData = JSON.parse(TodoStr);
            return rawData.map((c: { duty: string; responsible: string; priority: number; completed: boolean }) => {
                const todo = new TodoList(c.duty, c.responsible, Number(c.priority));
            todo.completed = c.completed;
            return todo;
            });

        } else {
            return [];
        }
     }
    }