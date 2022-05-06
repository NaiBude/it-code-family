import * as path from 'path';

const getGlobalModel = (...args) => {
  const modelPath = path.join(...args);
  return require(`../models/${modelPath}`);
};
export = getGlobalModel;
