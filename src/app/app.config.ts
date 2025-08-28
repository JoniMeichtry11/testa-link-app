import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes), provideFirebaseApp(() => initializeApp({ projectId: "testa-hermanos-linktre", appId: "1:193071275948:web:6172839bf77bae555f2409", storageBucket: "testa-hermanos-linktre.firebasestorage.app", apiKey: "AIzaSyDI3hv-zvNcAEBi4tC8IrgCMQlTYHifqFM", authDomain: "testa-hermanos-linktre.firebaseapp.com", messagingSenderId: "193071275948", measurementId: "G-2E41HKWZRP" })), provideStorage(() => getStorage())
  ]
};
