import { Injectable } from '@angular/core';

import { Task } from '../../shared/models/task.model';

@Injectable({
    providedIn: 'root'
})
export class TaskService {

    getTasks(): Promise<Task[]> {

        return new Promise(resolve => {

            setTimeout(() => {

                resolve([
                    {
                        id: 1,
                        title: 'Estudiar Angular 22',
                        completed: false
                    },
                    {
                        id: 2,
                        title: 'Aprender PrimeNG',
                        completed: true
                    }
                ]);

            }, 2000);

        });

    }

}