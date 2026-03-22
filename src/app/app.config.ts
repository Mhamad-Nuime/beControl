import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import { providePrimeNG } from 'primeng/config';
import { BE_CONTROL_THEME } from './bc-theme';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withViewTransitions()),
    provideTranslateService({
      loader: provideTranslateHttpLoader({ prefix: '/beControl/i18n/', suffix: '.json' }),
      lang: 'ar',
    }),
    providePrimeNG({
      theme: {
          preset: BE_CONTROL_THEME,
          options: {
            darkModeSelector: false
        }
      }
  })
  ],
};
