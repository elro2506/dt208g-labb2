import { Todo } from './Todo';

export class TodoList implements Todo {
    duty: string;
    responsible: string;
    priority: number;

    constructor(duty: string,  responsible: string, priority: number) {
        this.duty = duty;
        this.responsible = responsible;
        this.priority = priority;
        
    }


}