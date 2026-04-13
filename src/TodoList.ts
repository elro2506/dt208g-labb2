import { Todo } from './Todo';

export class TodoList implements Todo {
    duty: string;
    responsible: string;
    priority: number;
    completed: boolean;

    constructor(duty: string,  responsible: string, priority: number) {
        this.duty = duty;
        this.responsible = responsible;
        this.priority = priority;
        this.completed = false;        
    }


}