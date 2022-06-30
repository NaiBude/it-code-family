import { baseModel } from '../baseModel';
import { dataLog } from '@/koaServer/databaseLog';

interface FindDataParamsType {
  username: string;
}
class User extends baseModel {
  async selectData() {
    const data = await this.knex('user').select();
    return {
      data,
    };
  }

  async findUserData(params: FindDataParamsType) {
    if (params?.username) {
      const data = await this.knex('user')
        .select()
        .where({ ...params });
      return {
        data,
      };
    }
    return {
      data: null,
    };
  }
}
export = User;
