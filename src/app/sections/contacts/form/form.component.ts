import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  form = new FormGroup({
    name: new FormControl('', {
      validators: [Validators.required],
    }),

    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
    }),

    textarea: new FormControl('', {
      validators: [Validators.required, Validators.minLength(5)],
    }),
  });

  get nameIsInvalid() {
    return this.form.controls.name.dirty && this.form.controls.name.invalid;
  }

  get emailIsInvalid() {
    return (
      this.form.controls.email.touched &&
      this.form.controls.email.dirty &&
      this.form.controls.email.invalid
    );
  }

  get textareaIsInvalid() {
    return (
      this.form.controls.textarea.touched && this.form.controls.textarea.dirty
    );
  }

  onSubmit() {
    const enteredName = this.form.value.name;
    const enteredEmail = this.form.value.email;
    const enteredTextarea = this.form.value.textarea;
    console.log(enteredName, enteredEmail, enteredTextarea);
  }
}
