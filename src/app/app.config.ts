import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { TestInterceptor } from './test.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(),importProvidersFrom(HttpClientModule),
    provideHttpClient(withInterceptorsFromDi()),  
    {
        provide:HTTP_INTERCEPTORS,
        useClass:TestInterceptor,
        multi:true
    }]
 
  
};
  