import { knex } from '../koaServer/initModels';

class baseModel {
  protected sql;

  constructor() {
    this.sql = knex;
  }
}
export = baseModel;
