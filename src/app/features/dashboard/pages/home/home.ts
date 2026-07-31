import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent  {
  
  protected title = signal('TaskFlow');
  
  protected tasks = signal([
    'Estudiar Angular 22',
    'Aprender PrimeNG'
  ]);

  protected totalTasks = computed(() => {
    return this.tasks().length;
  });

  constructor() {
    effect(()=>{
      console.log(`Número de tareas: ${this.totalTasks()}`);
    });
  }

}
