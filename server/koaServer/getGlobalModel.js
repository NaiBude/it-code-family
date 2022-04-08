const path = require('path');

exports.getGlobalModel = (...args) => {
  const modelPath = path.join(...args);
  return require(`../models/${modelPath}`);
};
