import { HAVE_SELFCONFIG_TIP, NO_SELFCONFIG_TIP } from './vocabulary';
import { sqlConfigInter } from '../interface/config';
import { sqlConfig } from '../config/config';

let selfConfig: sqlConfigInter = null;

try {
  selfConfig = require('..config/baseConfig');
  console.log(selfConfig);

  console.log(HAVE_SELFCONFIG_TIP);
} catch (error) {
  console.log('error', error);

  console.log(NO_SELFCONFIG_TIP);
}

exports.config = {
  ...sqlConfig,
  ...() => {
    return selfConfig ? selfConfig : {};
  },
};
