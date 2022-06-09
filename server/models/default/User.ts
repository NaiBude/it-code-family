import { baseModel } from '../baseModel';

class User extends baseModel {
  async selectData() {
    const data = await this.knex('user').select();
    return {
      data,
    };
  }
}
export = User;
