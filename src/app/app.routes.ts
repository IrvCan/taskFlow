import { Routes } from '@angular/router';
import { ROUTES } from './core/constants/routes.constants';
import { authGuard } from './core/guards/auth.guard';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout';
import { MainLayoutComponent } from './layouts/main-layout/main-layout';

export const routes: Routes = [
    {
        path: ROUTES.LOGIN,
        component: AuthLayoutComponent,
        loadChildren: () =>
            import('./features/authentication/authentication.routes').then(route => route.authenticationRoutes)
    },
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
                path: ROUTES.TASKS,
                loadChildren: () => import('./features/tasks/task.routes').then(route => route.taskRoutes)
            },
            {
                path: ROUTES.SETTINGS,
                loadChildren: () => import('./features/settings/settings.routes').then(route => route.settingsRoutes)
            }
        ]
    }
];
