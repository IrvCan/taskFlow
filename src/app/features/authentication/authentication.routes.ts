import { Routes } from '@angular/router';

export const authenticationRoutes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./pages/login/login').then(
                component => component.LoginComponent
            )
    }
];