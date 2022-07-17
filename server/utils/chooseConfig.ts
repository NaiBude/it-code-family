import { HAVE_SELFCONFIG_TIP, NO_SELFCONFIG_TIP } from './vocabulary';
import { sqlConfigInter } from '../interface/config';
import { sqlConfig } from '../config/config';

let selfConfig: sqlConfigInter = null;

try {
  selfConfig = require('../config/baseConfig').baseConfig;
  console.log(HAVE_SELFCONFIG_TIP);
} catch (error) {
  console.error(NO_SELFCONFIG_TIP);
}

export const config = {
  ...sqlConfig,
  ...(selfConfig ? selfConfig : {}),
};
