import { Component, signal } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ NavbarComponent ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class HeaderComponent {
  
  protected title = signal('TaskFlow');

}
