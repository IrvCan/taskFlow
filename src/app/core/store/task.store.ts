import { Injectable, computed, inject, linkedSignal, resource } from '@angular/core';
import { TaskService } from '../services/task.service';

@Injectable({
    providedIn: 'root'
})

export class TaskStore {

    private readonly taskService = inject(TaskService);
    
    readonly tasksResource = resource({
        loader: async () => {
            return this.taskService.getTasks();
        }
    });

    readonly tasks = linkedSignal(() => {
        return this.tasksResource.value() ?? [];
    });

    readonly totalTasks = computed(() => {
        return this.tasks().length;
    });

    readonly completedTasks = computed(() => {
        return this.tasks().filter(task => task.completed).length;
    });

    readonly pendingTasks = computed(() => {
        return this.tasks().filter(task => !task.completed).length;
    });

    addTask(title: string): void {

        const newTask = {
            id: Date.now(),
            title,
            completed: false
        };

        this.tasks.update(tasks => [
            ...tasks,
            newTask
        ]);
    }

    toggleTask(id: number): void {

        this.tasks.update(tasks =>
            tasks.map(task => ({
                ...task,
                completed:
                    task.id === id
                        ? !task.completed
                        : task.completed
            }))
        );

    }
}