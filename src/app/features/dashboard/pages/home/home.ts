import { Component, computed, effect, signal } from '@angular/core';
import { Task } from '../../../../shared/models/task.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent  {
  
  protected title = signal('TaskFlow');
  
  protected tasks = signal<Task[]>([
    {
      id: 1,
      title: 'Estudiar Angular 22',
      completed: true
    },
    {
      id: 2,
      title: 'Aprender PrimeNG',
      completed: false
    }
  ]);

  protected totalTasks = computed(() => {
    return this.tasks().length;
  });

  protected pendingTasks = computed(() => {
    return this.tasks().filter(task => !task.completed).length;
  });

  protected completedTasks = computed(() => {
    return this.tasks().filter(task => task.completed).length;
  });

  constructor() {
    
    effect(()=>{
      console.log(`Número de tareas: ${this.totalTasks()}`);
    });
    
    effect(() => {

        console.log('Pendientes:', this.pendingTasks());

    });
  }

  protected toggleTask(id: number): void {
    
    this.tasks.update(tasks => {
  
        return tasks.map(task => {
  
            if (task.id === id) {
  
                return {
                    ...task,
                    completed: !task.completed
                };
  
            }
  
            return task;
  
        });
  
    });
  
  }
  
}
