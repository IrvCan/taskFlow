import { Injectable, inject } from '@angular/core';
import { StorageService } from './storage.service';
import { STORAGE_KEYS } from '../constants/storage.constants';
import { Task } from '../../shared/models/task.model';

@Injectable({
    providedIn: 'root'
})
export class TaskService {

    private readonly storageService = inject(StorageService);


    getTasks(): Promise<Task[]> {

        const tasks = this.storageService.getItem<Task[]>(
            STORAGE_KEYS.TASKS
        );

        return Promise.resolve(tasks ?? []);

    }

}