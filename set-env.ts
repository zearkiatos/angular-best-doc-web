const fs = require('fs');
const colors = require('colors');
require('dotenv').config();

const targetPath = './src/environments/environment.prod.ts';

const envConfigFile = `
import { EnvironmentConfig } from './environment.model';

export const environment: EnvironmentConfig = {
    production: ${process.env['NODE_ENV'] === 'production'},
    environment: '${process.env['NODE_ENV']}',
    basePath: '${process.env['BASE_PATH']}',
    logging: {
      level: '${process.env['LOG_LEVEL']}',
      enableConsole: ${process.env['ENABLE_CONSOLE_LOG']},
    }
};`;



console.log(colors.magenta('🦄The file `environment.prod.ts` will be written with the following content: \n'));
console.log(colors.green(envConfigFile));

fs.writeFile(targetPath, envConfigFile, (err: any) => {
    if (err) {
        throw console.error(err);
    } else {
        console.log(colors.magenta(`🅰️ngular environment.prod.ts file generated correctly at ${targetPath} \n`));
    }
 });
