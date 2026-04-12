import { Contact } from "./Contact";
import { LocalStorageUtil } from "./LocalStorageUtil";


export class ContactManager {
    private contacts: Contact[] = [];  //Array som håller alla kontakter


    //Kontruktor skapar objekt av klassen ContactManager och fyller arrayen med kontakter från LocalStorage
    constructor() {
        this.contacts = LocalStorageUtil.loadContacts();
    }


    
    public addContact(contact: Contact): void {
        this.contacts.push(contact);
        LocalStorageUtil.saveContacts(this.contacts);

    }
    /*
    public deleteContact(index: number): void {
        this.contacts.splice(index, 1); 
        
        //Vi tar bort en matchande responsible.
        

        LocalStorageUtil.saveContacts(this.contacts);

    }
        */

    public deleteContact(duty: string): void {
       
        
        //Vi tar bort en matchande responsible.
        this.contacts = this.contacts.filter(c => c.duty !== duty)

        LocalStorageUtil.saveContacts(this.contacts);

    }
    public getContacts(): Contact[] { //retunerar kontakterna till main.ts
        return this.contacts;
    }





}