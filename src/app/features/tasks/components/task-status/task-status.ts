import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-task-status',
  imports: [],
  templateUrl: './task-status.html',
  styleUrl: './task-status.scss',
})
export class TaskStatusComponent {
  readonly completed = input(false);

  readonly label = computed(() => {
        return this.completed()
            ? 'Completada'
            : 'Pendiente';
  });

}
