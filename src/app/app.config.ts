import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { providePrimeNG } from 'primeng/config';
import { provideRouter } from '@angular/router';
import Aura from '@primeng/themes/aura';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { errorInterceptor } from './core/interceptors/error.interceptor';
import { authInterceptor } from './core/interceptors/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes), provideClientHydration(),
    provideHttpClient(withInterceptors([
      authInterceptor,
      errorInterceptor
    ])),
    providePrimeNG({
      license: 'eyJpZCI6IjY5Y2FhNWVjLWJhMTItNGM1OS04OTlkLTBiNmM2NmI5YjIzNyIsInByb2R1Y3QiOiJwcmltZXVpIiwidGllciI6ImNvbW11bml0eSIsInR5cGUiOiJkZXYiLCJpYXQiOjE3ODU0NTMyMzQsImV4cCI6MTgxNjk4OTIzNH0.VVAZf2EAf4qahwpwSnDutkrKiwv9OI5BYvNafvGJTZBkRcERo0YPipNCyMkeTovr9TiMPBR1QCyzYJmYzg8SDQ',
      theme: {
        preset: Aura
      }
    })
  ]
};
