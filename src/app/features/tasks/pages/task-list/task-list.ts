import { Component, effect, inject } from '@angular/core';
import { TaskStore } from '../../../../core/store/task.store';
import { TaskCardComponent } from '../../components/task-card/task-card';
import { TaskFormComponent } from '../../components/task-form/task-form';
import { TaskItemComponent } from '../../components/task-item/task-item';
import { TaskFilterComponent } from '../../components/task-filter/task-filter';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [ TaskFilterComponent, TaskCardComponent, TaskFormComponent, TaskItemComponent ],
  templateUrl: './task-list.html',
  styleUrl: './task-list.scss',
})
export class TaskListComponent  {

  readonly store = inject(TaskStore);

  constructor() {

      this.store.loadTasks();

      effect(() => {

          console.log(this.store.tasks());

      });

  }

}
