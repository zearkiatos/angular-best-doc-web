import { InjectionToken } from '@angular/core';
import { LogLevel } from './log-level';
import { LoggerPort } from './logger-port';

export const LOGGER_PORT = new InjectionToken<LoggerPort>('LoggerPort', {
  providedIn: 'root',
  factory: () => {
    throw new Error('LoggerPort not provided');
  },
});

export const LOG_LEVEL = new InjectionToken<LogLevel>('LOG_LEVEL', {
  providedIn: 'root',
  factory: () => 'info',
});

export const ENABLE_CONSOLE_LOGGING = new InjectionToken<boolean>('ENABLE_CONSOLE_LOGGING', {
  providedIn: 'root',
  factory: () => true,
});
