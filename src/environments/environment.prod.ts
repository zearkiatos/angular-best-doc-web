import { EnvironmentConfig } from './environment.model';

export const environment: EnvironmentConfig = {
  production: true,
  logging: {
    level: 'warn',
    enableConsole: true,
  },
};
