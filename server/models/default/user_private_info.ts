import { baseModel } from '../baseModel';

interface InsterUserParamsType {
  username: string;
  password: string;
  job: string;
}

class AddUserInfo extends baseModel {
  async insterUserData(params: InsterUserParamsType) {
    if (params?.username && params?.password && params?.job) {
      const data = await this.knex('user_public_info').inster();
      return {
        Data,
      };
    }
    return {
      Data: null,
    };
  }
}
export = AddUserInfo;
