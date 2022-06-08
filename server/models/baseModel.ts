import knex = require('../koaServer/initModels');

class baseModel {
  protected knex;

  constructor() {
    this.knex = knex;
  }
}
export { baseModel };
