import * as path from 'path';

const getGlobalModel = (...args) => {
  const modelPath = path.join(...args);
  return new (require(`../models/${modelPath}`))();
};

export { getGlobalModel };
