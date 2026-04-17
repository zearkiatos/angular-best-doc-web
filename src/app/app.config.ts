import { ApplicationConfig, ErrorHandler, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { routes } from './app.routes';
import { environment } from '../environments/environment';
import { ConsoleLoggerAdapter } from "./core/logging/infrastructure/console-logger.adapter";
import { GlobalErrorHandler } from './core/error/infrastructure/global-error-handler';
import { loggingHttpInterceptor } from './core/http/infrastructure/logging-http.interceptor';
import { LOGGER_PORT, LOG_LEVEL, ENABLE_CONSOLE_LOGGING } from './core/logging/domain/logger-tokens';
import { AppLoggerService } from './core/logging/application/app-logger.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(withInterceptors([loggingHttpInterceptor])),

    // Logging configuration
    { provide: LOG_LEVEL, useValue: environment.logging.level },
    { provide: ENABLE_CONSOLE_LOGGING, useValue: environment.logging.enableConsole },
    { provide: LOGGER_PORT, useClass: ConsoleLoggerAdapter },
    AppLoggerService,

    // Error handling
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
  ]
};
