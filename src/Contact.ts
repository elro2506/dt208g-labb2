import { IContact } from './IContact';

export class Contact implements IContact {
    duty: string;
    responsible: string;
    priority: string;

    constructor(duty: string,  responsible: string, priority: string,) {
        this.duty = duty;
        this.responsible = responsible;
        this.priority = priority;
        
    }


}