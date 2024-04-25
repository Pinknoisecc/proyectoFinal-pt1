import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrl: './user-dialog.component.scss'
})
export class UserDialogComponent {
  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private matDialogRef: MatDialogRef<UserDialogComponent>) {
    this.userForm = this.formBuilder.group({
      firstName: ['', [
        Validators.required,
        Validators.pattern('^[a-zA-ZÁÉÍÓÚáéíóúñÑ]+$'),
        Validators.maxLength(5),
      ]],
      lastName: ['', [
        Validators.required,
        Validators.pattern('^[a-zA-ZÁÉÍÓÚáéíóúñÑ]+$'),
        Validators.maxLength(5),
      ]],
      email: ['', [
        Validators.required, 
        Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}')
      ]],
    });
}


  onSave(): void {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
  } else{
    //SI ES Välido//
    this.matDialogRef.close(this.userForm.value);

  }
}

}