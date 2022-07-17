import { baseModel } from '../baseModel';

interface InsterUserParamsType {
  username?: string;
  password?: string;
  nickname?: string;
  job?: string;
}

class AddUserInfo extends baseModel {
  async insterUserData(params: InsterUserParamsType = {}) {
    const message = { Code: 0 };
    if (params?.username && params?.password) {
      const data = { username: params.username, password: params.password, job: params.job };
      try {
        await this.knex('user_private_info').insert({ ...data });
      } catch (error) {
        if (error?.code === 'ER_DUP_ENTRY') {
          message.Code = -2;
        }
      }
      if (message.Code === -2) {
        return message;
      }
      try {
        await this.knex('user_public_info').insert({
          username: params?.username,
          nickname: params?.nickname,
        });
      } catch (error) {
        if (error?.code === 'ER_DUP_ENTRY') {
          message.Code = -3;
        }
        await this.knex('user_private_info').where('username', params.username).delete();
      }
    }
    return {
      ...message,
    };
  }
}
export = AddUserInfo;
