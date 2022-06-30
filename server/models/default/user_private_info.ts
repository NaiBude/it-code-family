import { baseModel } from '../baseModel';

interface InsterUserParamsType {
  username?: string;
  password?: string;
  job?: string;
}

class AddUserInfo extends baseModel {
  async insterUserData(params: InsterUserParamsType = {}) {
    if (params?.username && params?.password && params?.job) {
      const obj = { username: params.username, password: params.password };
      const data = await this.knex('user_private_info').insert({ ...obj });
      return {
        Data: data,
      };
    }
    return {
      Data: null,
    };
  }
}
export = AddUserInfo;
