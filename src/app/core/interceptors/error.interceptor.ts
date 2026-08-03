import { HttpInterceptorFn } from '@angular/common/http';
import { catchError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = ( request, next ) => {

    return next(request).pipe(
        catchError(error => {
            console.error(error);
            throw error;
        })
    )
}