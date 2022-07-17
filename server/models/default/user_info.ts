import { baseModel } from '../baseModel';

interface FindDataParamsType {
  username: string;
}

class User extends baseModel {
  async selectData() {
    const data = await this.knex('user_private_info').select();
    return {
      data,
    };
  }

  async findUserData(params: FindDataParamsType) {
    if (params?.username) {
      const data = await this.knex('user_public_info')
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
