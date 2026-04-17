import { LogLevel } from '../app/core/logging/domain/log-level';

export interface EnvironmentConfig {
  production: boolean;
  logging: {
    level: LogLevel;
    enableConsole: boolean;
  };
}
