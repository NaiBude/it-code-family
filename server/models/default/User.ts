import baseModel from '../baseModel';

class User extends baseModel {
  async selectData() {
    const result = await this.sql('user').select();
    console.log('result', result);
    return {
      result,
    };
  }
}
export = User;
