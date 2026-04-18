import { LogLevel } from '../app/core/logging/domain/log-level';

export interface EnvironmentConfig {
  production: boolean;
  environment: string,
  basePath: string,
  logging: {
    level: LogLevel;
    enableConsole: boolean;
  };
}
