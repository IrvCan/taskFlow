import { Injectable, signal } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class FilterStore {

    readonly search = signal('');

}