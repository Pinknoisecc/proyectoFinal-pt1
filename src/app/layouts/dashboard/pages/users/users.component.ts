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

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'asignaturas', 'createdAt', 'actions', 'cursos'];

  users: IUser[] = [
    {
      id: 1,
      firstName: 'Juan',
      lastName: 'Ortega',
      cursos: ['1ro B'],
      email: 'juanor@gmail.com',
      asignaturas: ['Química'],
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
    const dialogRef = this.matDialog.open(UserDialogComponent, {
      data: editingUser,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (editingUser) {
          this.users = this.users.map(u => u.id === editingUser.id ? { ...u, ...result } : u);
        } else {
          const lastId = this.users.length > 0 ? this.users[this.users.length - 1].id : 0;
          result.id = lastId + 1;
          result.createdAt = new Date();
          result.asignaturas = typeof result.asignaturas === 'string' ? [result.asignaturas] : result.asignaturas;
          result.cursos = typeof result.cursos === 'string' ? [result.cursos] : result.cursos;
          this.users.push(result);
          this.users.sort((a, b) => a.id - b.id); 
          this.users = [...this.users]; 
        }
      }
    });
  }

  onDeleteUser(id: number): void {
    if (confirm('Está seguro?')) {
      this.users = this.users.filter(u => u.id !== id);
    }
  }

  mostrarAsignaturas(asignaturas: string[]): string {
    return asignaturas.join(', ');
  }

  mostrarCursos(cursos: string[]): string {
    return cursos.join(', ');
  }
}
