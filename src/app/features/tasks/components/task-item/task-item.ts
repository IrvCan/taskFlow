import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { Task } from '../../../../shared/models/task.model';
import { TaskStatusComponent } from '../task-status/task-status';

@Component({
  standalone: true,
  selector: 'app-task-item',
  imports: [CheckboxModule, TaskStatusComponent, FormsModule],
  templateUrl: './task-item.html',
  styleUrls: ['./task-item.scss'],
})
export class TaskItemComponent {
  readonly task = input.required<Task>();

  readonly toggle = output<number>();

}
