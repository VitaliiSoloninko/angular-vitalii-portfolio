import { Component } from '@angular/core';
import { FormComponent } from './form/form.component';

@Component({
    selector: 'app-contacts',
    imports: [FormComponent],
    templateUrl: './contacts.component.html',
    styleUrl: './contacts.component.scss'
})
export class ContactsComponent {}
