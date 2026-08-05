import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
    providedIn: 'root'
})

export class StorageService {

    private readonly platformId = inject(PLATFORM_ID);

    getItem<T>(key: string): T | null {

        if (!isPlatformBrowser(this.platformId)) {
            return null;
        }

        const value = localStorage.getItem(key);

        if (!value) {
            return null;
        }

        return JSON.parse(value) as T;
    }

    setItem<T>( key: string, value: T ): void {
        
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }

        localStorage.setItem(
            key,
            JSON.stringify(value)
        );

    }

}