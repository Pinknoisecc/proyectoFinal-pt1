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
      return window.innerWidth < 280; 
    }
    return false; 
  }
}
