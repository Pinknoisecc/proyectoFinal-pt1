import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  showFiller = false;

  isMobile(): boolean {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 280; // Cambia 600 por el ancho que desees para definir cuando es un dispositivo móvil
    }
    return false; // Return false in a server environment
  }
}
