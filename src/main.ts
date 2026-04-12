import { Contact } from "./Contact";
import { ContactManager } from "./ContactManager";  //importerar ContactManager klassen

const contactManager = new ContactManager(); //Skapar en instans av ContactManager

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form')! as HTMLFormElement;
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Förhindrar att formuläret skickas traditionellt
        addContact();
    });
});


function addContact(): void {
    const dutyInput = document.getElementById('duty') as HTMLInputElement; //Det här är själva elementen
    const priorityInput = document.getElementById('priority') as HTMLInputElement;
    const responsibleInput = document.getElementById('responsible') as HTMLInputElement;

    const duty = dutyInput.value;
    const priority = priorityInput.value;
    const responsible = responsibleInput.value;

    if (duty && priority && responsible) {
        const newContact = new Contact(duty, priority, responsible)
        contactManager.addContact(newContact); //Skickar in newContact till addContact metoden i ContactManager
        dutyInput.value = ''; //rensar input fälten
        priorityInput.value = '';
        responsibleInput.value = '';
        renderContacts();

    }


}

function renderContacts(): void {
    console.log(contactManager); // Ska visa ContactManager-instansen
    const contacts = contactManager.getContacts(); //Hämtar arrayen med kontakter från ContactManager
    console.log("Dett är så här många kontakter i " + contacts.length);
    const contactList = document.getElementById('contact-list') as HTMLUListElement;//Hämtar listan från html

    if (contactList) {
        contactList.innerHTML = ''; // Rensar listan
        contacts.forEach((contact) => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${contact.duty}</strong><br>
            priority: ${contact.priority}<br>
            responsible: ${contact.responsible}<br>`;

            const deleteSpan = document.createElement('span');
            deleteSpan.textContent = 'Delete';
            deleteSpan.className = 'delete-button';
            

            //Här tar vi bort med duty istället. 
            deleteSpan.addEventListener('click', () => deleteContact(contact.duty));
            li.appendChild(deleteSpan);

            contactList.appendChild(li);
        });
    }
}


function deleteContact(duty: string): void {
   alert("Bra jobbat!"); // 🔍 Testlogg
    contactManager.deleteContact(duty);
    renderContacts();
}

renderContacts();
