import { EnvironmentConfig } from './environment.model';

export const environment: EnvironmentConfig = {
  production: false,
  logging: {
    level: 'debug',
    enableConsole: true,
  },
};
