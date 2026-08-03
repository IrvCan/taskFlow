import { Routes } from '@angular/router';

export const taskRoutes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./pages/task-list/task-list').then(
                component => component.TaskListComponent
            )
    }
];