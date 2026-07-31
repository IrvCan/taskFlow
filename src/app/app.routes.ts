import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout';
import { HomeComponent } from './features/dashboard/pages/home/home';
import { TaskListComponent } from './features/tasks/pages/task-list/task-list';

export const routes: Routes = [
     {
        path: '',
        component: MainLayoutComponent,
        children: [
            {
                path: '',
                component: HomeComponent
            },
            {
                path: 'tasks',
                component: TaskListComponent
            }
        ]
    }
];
