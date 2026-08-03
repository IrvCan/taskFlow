import { Routes } from '@angular/router';

export const dashboardRoutes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./pages/home/home').then(
                component => component.HomeComponent
            )
    }
];