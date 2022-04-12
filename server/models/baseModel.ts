import { initModels } from '../koaServer/initModels';

export class baseModel {
  protected sql;
  constructor() {
    this.sql = initModels();
  }
}
