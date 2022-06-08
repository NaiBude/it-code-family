import knex from '../koaServer/initModels';

class baseModel {
  protected knex;

  constructor() {
    this.knex = knex;
  }
}
export = baseModel;
