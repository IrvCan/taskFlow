import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class HeaderComponent {

  private readonly router = inject(Router);
  
  protected title = signal('TaskFlow');


  protected navigateToTasks(): void {
    this.router.navigate(['/tasks']);
  }

}
