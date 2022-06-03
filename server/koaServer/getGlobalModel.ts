import * as path from 'path';

const getGlobalModel = (...args) => {
  const modelPath = path.join(...args);
  console.log('modelPath', modelPath);

  return new (require(`../models/${modelPath}`))();
};

export { getGlobalModel };
