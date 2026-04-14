import { TodoList } from './TodoList';
export class LocalStorageUtil {

    static saveTodos(todos: TodoList[]) {
        localStorage.setItem('todos', JSON.stringify(todos)); // Sparar hela todo-arrayen till localStorage
    }

    static loadTodos(): TodoList[] {
        const TodoStr = localStorage.getItem('todos');
        if (TodoStr) {

            const rawData = JSON.parse(TodoStr); //Konverterar JSON till sträng
            return rawData.map((c: { duty: string; responsible: string; priority: number; completed: boolean }) => {
                const todo = new TodoList(c.duty, c.responsible, Number(c.priority));
                todo.completed = c.completed; //Gör en manuell handpålläggning på att det är completed
                return todo;
            });

        } else {
            return [];
        }
    }
}