import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { AppLoggerService } from '../../logging/application/app-logger.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private injector: Injector) {}

  handleError(error: Error | unknown): void {
    const logger = this.injector.get(AppLoggerService);

    const errorMessage = error instanceof Error ? error.message : String(error);
    const context = {
      scope: 'GlobalErrorHandler',
      extra: {
        url: typeof window !== 'undefined' ? window.location.href : 'unknown',
      },
    };

    logger.error('Unhandled Application Error', error, context);
  }
}
