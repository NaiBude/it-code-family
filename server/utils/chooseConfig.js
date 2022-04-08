const { HAVE_SELFCONFIG_TIP, NO_SELFCONFIG_TIP } = require('../utils/vocabulary');
const { sqlConfig } = require('../config/config');

let selfConfig = null;

try {
  selfConfig = require('./baseConfig');
  console.log(HAVE_SELFCONFIG_TIP);
} catch (error) {
  console.log(NO_SELFCONFIG_TIP);
}

exports.config = {
  ...sqlConfig,
  ...() => {
    return selfConfig ? selfConfig : {};
  },
};
