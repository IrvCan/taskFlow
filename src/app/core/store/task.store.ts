import { Injectable, inject, computed, signal } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { TaskService } from '../services/task.service';
import { Task } from '../../shared/models/task.model';
import { STORAGE_KEYS } from '../constants/storage.constants';

@Injectable({
    providedIn: 'root'
})
export class TaskStore {

    private readonly taskService = inject(TaskService);
    private readonly storageService = inject(StorageService);

    readonly tasks = signal<Task[]>([]);

    readonly completedTasks = computed(() => {

        return this.tasks().filter(task => task.completed);

    });

    readonly pendingTasks = computed(() => {

        return this.tasks().filter(task => !task.completed);

    });

    async loadTasks(): Promise<void> {

        const tasks =  await this.taskService.getTasks();

        this.tasks.set(tasks);

    }

    addTask(title: string): void {

        const task: Task = {
            id: Date.now(),
            title,
            completed: false,
            priority: 'medium'
        };

        this.tasks.update(tasks => {
            const updatedTasks = [
                ...tasks,
                task
            ];

            this.storageService.setItem(
                STORAGE_KEYS.TASKS,
                updatedTasks
            );

            return updatedTasks;
        });
    }

    toggleTask(id: number): void {

        this.tasks.update(tasks => {

           const updatedTasks = tasks.map(task => {

                if (task.id !== id) {
                    return task;
                }

                return {
                    ...task,
                    completed: !task.completed
                };

            });

            this.storageService.setItem(
                STORAGE_KEYS.TASKS,
                updatedTasks
            );

            return updatedTasks;

        });

    }

}