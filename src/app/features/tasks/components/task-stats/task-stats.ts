import { Component, computed, inject } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ProgressBarModule } from 'primeng/progressbar';
import { TaskStore } from '../../../../core/store/task.store';

@Component({
  selector: 'app-task-stats',
  standalone: true,
  imports: [CardModule, ProgressBarModule],
  templateUrl: './task-stats.html',
  styleUrl: './task-stats.scss',
})
export class TaskStatsComponent {
  private readonly store = inject(TaskStore);

  readonly totalTasks = computed(() => this.store.tasks().length);

  readonly completedTasks = computed(() => this.store.completedTasks().length);

  readonly pendingTasks = computed(() => this.store.pendingTasks().length);

  readonly completionRate = computed(() => {
    const total = this.totalTasks();
    return total === 0 ? 0 : Math.round((this.completedTasks() / total) * 100);
  });
}
