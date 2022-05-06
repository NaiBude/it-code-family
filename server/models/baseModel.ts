import { initModels } from '../koaServer/initModels';

class baseModel {
  protected sql;

  constructor() {
    this.sql = initModels();
  }
}
export = baseModel;
