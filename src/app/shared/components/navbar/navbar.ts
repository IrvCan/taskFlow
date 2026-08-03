import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-navbar',
  imports: [ RouterLink, ButtonModule ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class NavbarComponent  {}
