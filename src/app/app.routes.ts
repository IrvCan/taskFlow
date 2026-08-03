import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
     {
        path: '',
        component: MainLayoutComponent,
        canActivate: [authGuard],
        children: [
            {
                path: '',
                loadChildren: () => import('./features/dashboard/dashboard.routes').then(route => route.dashboardRoutes)
            },
            {
                path: 'tasks',
                loadChildren: () => import('./features/tasks/task.routes').then(route => route.taskRoutes)
            }
        ]
    }
];
