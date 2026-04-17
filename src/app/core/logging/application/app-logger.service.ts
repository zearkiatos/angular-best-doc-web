import { Inject, Injectable } from '@angular/core';
import { LogContext } from '../domain/log-context';
import { LoggerPort } from '../domain/logger-port';
import { LOGGER_PORT } from '../domain/logger-tokens';
import { TraceContextService } from './trace-context.service';

@Injectable({
  providedIn: 'root',
})
export class AppLoggerService {
  constructor(@Inject(LOGGER_PORT) private logger: LoggerPort, private traceService: TraceContextService) {}

  debug(message: string, context?: LogContext): void {
    this.logger.debug(message, this.enrichContext(context));
  }

  info(message: string, context?: LogContext): void {
    this.logger.info(message, this.enrichContext(context));
  }

  warn(message: string, context?: LogContext): void {
    this.logger.warn(message, this.enrichContext(context));
  }

  error(message: string, error?: unknown, context?: LogContext): void {
    this.logger.error(message, error, this.enrichContext(context));
  }

  private enrichContext(context?: LogContext): LogContext {
    const currentTrace = this.traceService.getCurrentTrace();

    return {
      ...context,
      traceContext: context?.traceContext || currentTrace || undefined,
    };
  }
}
