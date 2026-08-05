import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-task-filter',
  imports: [ FormsModule, InputTextModule ],
  templateUrl: './task-filter.html',
  styleUrl: './task-filter.scss',
})
export class TaskFilterComponent {
  readonly search = model('');
}
