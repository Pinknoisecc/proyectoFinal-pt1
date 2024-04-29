import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IUser } from '../../models';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss']
})
export class UserDialogComponent {
  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder, 
    private matDialogRef: MatDialogRef<UserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private editingUser?: IUser
  ) {
    this.userForm = this.formBuilder.group({
      firstName: [editingUser ? editingUser.firstName : '', [
        Validators.required,
        Validators.pattern('^[a-zA-ZÁÉÍÓÚáéíóúñÑ]+$'),
        Validators.maxLength(10),
      ]],
      lastName: [editingUser ? editingUser.lastName : '', [
        Validators.required,
        Validators.pattern('^[a-zA-ZÁÉÍÓÚáéíóúñÑ]+$'),
        Validators.maxLength(10),
      ]],
      email: [editingUser ? editingUser.email : '', [
        Validators.required, 
        Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}')
      ]],
      asignaturas: [editingUser ? editingUser.asignaturas : [], Validators.required], // Asignar las asignaturas del usuario en edición si existen
    });
  }

  onSave(): void {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
    } else {
      const userData = this.userForm.value;
      // Convertir la asignatura a un array de strings si es una sola asignatura
      userData.asignaturas = typeof userData.asignaturas === 'string' ? [userData.asignaturas] : userData.asignaturas;
      this.matDialogRef.close(userData);
    }
  }
}
