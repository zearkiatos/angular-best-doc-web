import { Inject, Injectable } from '@angular/core';
import { LogContext } from '../../logging/domain/log-context';
import { LogLevel, LogLevelPriority } from '../../logging/domain/log-level';
import { LoggerPort } from '../../logging/domain/logger-port';
import { ENABLE_CONSOLE_LOGGING, LOG_LEVEL } from '../../logging/domain/logger-tokens';

interface LogPayload {
  timestamp: string;
  level: LogLevel;
  message: string;
  traceId?: string;
  spanId?: string;
  parentSpanId?: string;
  context?: LogContext;
  error?: Record<string, unknown>;
}

@Injectable()
export class ConsoleLoggerAdapter implements LoggerPort {
  constructor(
    @Inject(LOG_LEVEL) private logLevel: LogLevel,
    @Inject(ENABLE_CONSOLE_LOGGING) private enableConsole: boolean,
  ) {}

  debug(message: string, context?: LogContext): void {
    this.log('debug', message, undefined, context);
  }

  info(message: string, context?: LogContext): void {
    this.log('info', message, undefined, context);
  }

  warn(message: string, context?: LogContext): void {
    this.log('warn', message, undefined, context);
  }

  error(message: string, error?: unknown, context?: LogContext): void {
    this.log('error', message, error, context);
  }

  private log(
    level: LogLevel,
    message: string,
    error: unknown | undefined,
    context?: LogContext,
  ): void {
    if (!this.enableConsole || !this.shouldLog(level)) {
      return;
    }

    const payload = this.buildPayload(level, message, error, context);
    const consoleMethod = this.getConsoleMethod(level);

    let traceInfo = '';
    if (payload.traceId) {
      traceInfo = ` [trace: ${payload.traceId} / span: ${payload.spanId}]`;
    }

    consoleMethod(
      `[${payload.timestamp}] [${payload.level.toUpperCase()}]${traceInfo} ${payload.message}`,
      payload,
    );
  }

  private shouldLog(level: LogLevel): boolean {
    return LogLevelPriority[level] >= LogLevelPriority[this.logLevel];
  }

  private buildPayload(
    level: LogLevel,
    message: string,
    error: unknown | undefined,
    context?: LogContext,
  ): LogPayload {
    const payload: LogPayload = {
      timestamp: new Date().toISOString(),
      level,
      message,
    };

    if (context?.traceContext) {
      payload.traceId = context.traceContext.traceId;
      payload.spanId = context.traceContext.spanId;
      payload.parentSpanId = context.traceContext.parentSpanId;
    }

    if (context) {
      payload.context = context;
    }

    if (error) {
      payload.error = this.serializeError(error);
    }

    return payload;
  }

  private serializeError(error: unknown): Record<string, unknown> {
    if (error instanceof Error) {
      return {
        name: error.name,
        message: error.message,
        stack: error.stack,
        cause: error.cause,
      };
    }
    return { raw: String(error) };
  }

  private getConsoleMethod(level: LogLevel): (...args: unknown[]) => void {
    switch (level) {
      case 'debug':
        return console.debug.bind(console);
      case 'info':
        return console.info.bind(console);
      case 'warn':
        return console.warn.bind(console);
      case 'error':
        return console.error.bind(console);
      default:
        return console.log.bind(console);
    }
  }
}
