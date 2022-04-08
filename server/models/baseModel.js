const { initModels } = require('../koaServer/initModels');

class baseModel {
  constructor() {
    this.sql = initModels();
  }
}
exports.baseModel = baseModel;
