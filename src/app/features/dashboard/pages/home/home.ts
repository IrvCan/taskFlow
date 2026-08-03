import { Component, inject } from '@angular/core';
import { TaskFormComponent } from '../../../tasks/components/task-form/task-form';
import { TaskStore } from '../../../../core/store/task.store';
import { CardComponent } from '../../../../shared/components/card/card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TaskFormComponent, CardComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent  {

  private readonly taskStore = inject(TaskStore);

  protected readonly tasks = this.taskStore.tasks;

  protected readonly totalTasks = this.taskStore.totalTasks;

  protected readonly pendingTasks = this.taskStore.pendingTasks;

  protected readonly completedTasks = this.taskStore.completedTasks;

  constructor() {}

  protected toggleTask(id: number): void {
    
    this.taskStore.toggleTask(id);
  
  }

  protected addTask(title: string): void {

    this.taskStore.addTask(title);

  }
  
}
