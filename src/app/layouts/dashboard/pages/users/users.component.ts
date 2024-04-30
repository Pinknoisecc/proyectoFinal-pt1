import { Component } from '@angular/core';
import { IUser } from './models';
import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from './components/user-dialog/user-dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'asignaturas', 'createdAt', 'actions', 'cursos',];

  users: IUser[] = [
    {
      id: 1,
      firstName: 'Juan',
      lastName: 'Ortega',
      cursos: ['1ro B'],
      email: 'juanor@gmail.com',
      asignaturas: ['Química'], // Asignatura
      createdAt: new Date()
    },
    {
      id: 2,
      firstName: 'Claudio',
      lastName: 'Ramirez',
      cursos: ['1ro B'],
      email: 'claudio.r@gmail.com', 
      asignaturas: ['Biología'],
      createdAt: new Date()
    },
  ];

  constructor(private matDialog: MatDialog) {}

  openDialog(editingUser?: IUser): void {
    this.matDialog
      .open(UserDialogComponent, {
        data: editingUser,
      })
      .afterClosed()
      .subscribe({
        next: (result) => {
          if (result) {
            if (editingUser) {
              this.users = this.users.map((u) => u.id === editingUser.id ? { ...u, ...result } : u);
            } else {
              result.id = new Date().getTime().toString().substring(0, 3);
              result.createdAt = new Date();
              // Convertir la asignatura a un array de strings si es una sola asignatura
              result.asignaturas = typeof result.asignaturas === 'string' ? [result.asignaturas] : result.asignaturas;
              this.users = [...this.users, result];

              result.cursos = typeof result.cursos === 'string' ? [result.cursos] : result.cursos;
              this.users = [...this.users, result];
            }
          }
          console.log(result);
        },
      });
  }

  onDeleteUser(id: number): void {
    if (confirm('Está seguro?')) {
      this.users = this.users.filter((u) => u.id !== id);
    }
  }

  // Función para mostrar las asignaturas como una cadena separada por comas
  mostrarAsignaturas(asignaturas: string[]): string {
    return asignaturas.join(', ');
  }

  mostrarCursos(cursos: string[]): string {
    return cursos.join(', ');
  }
}
